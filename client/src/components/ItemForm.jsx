import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';
import './styles/itemForm.css';

const ItemForm = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImage, setItemImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now().toString(), // Generate a unique ID for the item
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            image: itemImage,
        };

        dispatch(addItem(newItem));

        // Clear the form inputs
        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setItemImage('');
    };

    const handleClear = () => {
        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setItemImage('');
    };

    return (
        <div className="item-form">
            <h2 className="form-title">Add Item to Inventory</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemName">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <label htmlFor="itemDescription">Item Description:</label>
                <input
                    type="text"
                    id="itemDescription"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                />
                <label htmlFor="itemPrice">Item Price:</label>
                <input
                    type="text"
                    id="itemPrice"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                />
                <label htmlFor="itemImage">Item Image:</label>
                <input
                    type="text"
                    id="itemImage"
                    value={itemImage}
                    onChange={(e) => setItemImage(e.target.value)}
                />
                <button type="submit">Add Item</button>
                <button type="button" onClick={handleClear}>
                    Clear
                </button>
            </form>
        </div>
    );
};

export default ItemForm;