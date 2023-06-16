import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItemAsync } from '../redux/items/thunks';
import './styles/itemPopup.css';

const ItemPopup = ({ item, onClose }) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [editedItem, setEditedItem] = useState({ ...item });

    const handleEdit = (field, value) => {
        setEditedItem((prevItem) => ({ ...prevItem, [field]: value }));
    };

    const handleSave = () => {
        dispatch(updateItemAsync(editedItem));
        setEditing(false);
    };

    return (
        <div className="item-popup">
            <div className={`item-info ${editing ? 'editing' : ''}`}>
                <div className="item-field">
                    <label htmlFor="name">Name:</label>
                    {editing ? (
                        <input
                            type="text"
                            id="name"
                            value={editedItem.name}
                            onChange={(e) => handleEdit('name', e.target.value)}
                        />
                    ) : (
                        <p>{item.name}</p>
                    )}
                </div>

                <div className="item-field">
                    <label htmlFor="description">Description:</label>
                    {editing ? (
                        <input
                            type="text"
                            id="description"
                            value={editedItem.description}
                            onChange={(e) => handleEdit('description', e.target.value)}
                        />
                    ) : (
                        <p>{item.description}</p>
                    )}
                </div>

                <div className="item-field">
                    <label htmlFor="price">Price:</label>
                    {editing ? (
                        <input
                            type="text"
                            id="price"
                            value={editedItem.price}
                            onChange={(e) => handleEdit('price', e.target.value)}
                        />
                    ) : (
                        <p>{item.price}</p>
                    )}
                </div>
            </div>

            <div className="item-actions">
                {editing ? (
                    <button onClick={handleSave} className="save-button">Save</button>
                ) : (
                    <button onClick={() => setEditing(true)} className="edit-button">Edit</button>
                )}
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default ItemPopup;