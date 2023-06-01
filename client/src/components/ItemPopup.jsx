import React, { useState } from 'react';

const ItemPopup = ({ item, onClose, onUpdate }) => {
    const [editedItem, setEditedItem] = useState(item);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditedItem({
            ...editedItem,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(editedItem);
        setIsEditing(false);
    };

    return (
        <div className="item-popup">
            <div className="item-popup-content">
                <h2>{isEditing ? 'Edit Item' : 'Item Details'}</h2>
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={editedItem.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={editedItem.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={editedItem.price}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <div>
                            <strong>Title:</strong> {item.title}
                        </div>
                        <div>
                            <strong>Description:</strong> {item.description}
                        </div>
                        <div>
                            <strong>Price:</strong> {item.price}
                        </div>
                        <button type="button" onClick={handleEdit}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemPopup;