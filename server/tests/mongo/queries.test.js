const queries = require('../../mongo/queries');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const waitForExpect = require('wait-for-expect');

const InventoryItem = require('../../mongo/model');
let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

const testItem = {
    id: 1,
    name: 'Test Item',
    description: 'This is a test item',
    price: 10.99,
    image: 'test-image-url',
    adoptable: true,
};

describe('InventoryItem queries', () => {
    afterEach(async () => {
        await InventoryItem.deleteMany({});
    });

    it('should add an item', async () => {
        await queries.addItem(testItem);

        const savedItem = await InventoryItem.findOne({ id: testItem.id });
        expect(savedItem).toBeTruthy();
        expect(savedItem.name).toBe(testItem.name);
    });

    it('should update an item', async () => {
        try {
            await InventoryItem.create(testItem);

            const updatedItemData = {
                ...testItem,
                name: 'Updated Item',
                price: 20.0,
            };

            await queries.updateItem(updatedItemData);

            await waitForExpect(async () => {
                const updatedItem = await InventoryItem.findOne({ id: testItem.id });
                expect(updatedItem).toBeTruthy();
                expect(updatedItem.name).toBe('Updated Item');
                expect(updatedItem.price).toBe(20.0);
            });
        } catch (error) {
            throw error;
        }
    });


    it('should delete an item', async () => {
        await InventoryItem.create(testItem);

        await queries.deleteItem(testItem.id);

        const deletedItem = await InventoryItem.findOne({ id: testItem.id });
        expect(deletedItem).toBeFalsy();
    });

    it('should get all items', async () => {
        await InventoryItem.create(testItem);
        await InventoryItem.create({ ...testItem, id: 2 });

        const items = await queries.getAllItems({});

        expect(items).toHaveLength(2);
    });
});