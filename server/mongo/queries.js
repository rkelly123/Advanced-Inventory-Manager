const InventoryItem = require('./model');

const queries = {
    getAllItems: async function (filter) {
        const items = await InventoryItem.find(filter);
        return items;
    },
    addItem: async function (item) {
        const newItem = new InventoryItem({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            adoptable: true
        });
        newItem.save()
            .then((savedItem) => {
                console.log('Item saved:', savedItem);
            })
            .catch((error) => {
                console.error('Error saving item:', error);
            })
    },
    updateItem: async function (item) {
        InventoryItem.findOneAndUpdate(
            { id: item.id },
            { name: item.name, description: item.description, price: item.price, image: item.image },
            { new: true })
            .then((updatedItem) => {
                console.log('Item updated:', updatedItem);
            })
            .catch((error) => {
                console.error('Error updating item:', error);
            });
    },
    deleteItem: async function (id) {
        InventoryItem.findOneAndDelete({ id: id })
            .then((deletedItem) => {
                console.log('Item deleted:', deletedItem);
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
    }
}


module.exports = queries;