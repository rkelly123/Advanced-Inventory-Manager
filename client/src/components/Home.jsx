import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../store';
import ItemForm from './ItemForm';
import ItemCard from './ItemCard';
import ItemPopup from './ItemPopup';
import './home.css';

const Home = () => {
    const dispatch = useDispatch();
    const [selectedItemId, setSelectedItemId] = useState(null);
    const inventoryItems = useSelector((state) => state.items);

    const handleMoreInfo = (itemId) => {
        setSelectedItemId(itemId);
    };

    const handleUpdate = (updatedItem) => {
        dispatch(updateItem(updatedItem));
    };

    return (
        <div>
            <h1 className="app-title">Inventory Management System</h1>
            <ItemForm />
            <div className="item-card-list">
                {inventoryItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
            {selectedItemId && (
                <ItemPopup
                    item={inventoryItems.find((item) => item.id === selectedItemId)}
                    onClose={() => setSelectedItemId(null)}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
};

export default Home;