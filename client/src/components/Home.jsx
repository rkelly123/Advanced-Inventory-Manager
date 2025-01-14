import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAsync, deleteItemAsync } from '../redux/items/thunks';
import ItemForm from './ItemForm';
import ItemCard from './ItemCard';
import ItemPopup from './ItemPopup';
import './styles/home.css';

const Home = () => {
    const dispatch = useDispatch();
    const [selectedItemId, setSelectedItemId] = useState(null);
    const inventoryItems = useSelector((state) => state.items.list);

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []); 

    const handleMoreInfo = (itemId) => {
        setSelectedItemId(itemId);
    };

    const handleDelete = (itemId) => {
        dispatch(deleteItemAsync(itemId));
        setSelectedItemId(null);
    };

    return (
        <div>
            <h1 className="app-title">Inventory Management System</h1>
            <ItemForm />
            <div className="item-card-list">
                {inventoryItems.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onMoreInfo={handleMoreInfo}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            {selectedItemId && (
                <ItemPopup
                    item={inventoryItems.find((item) => item.id === selectedItemId)}
                    onClose={() => setSelectedItemId(null)}
                />
            )}
        </div>
    );
};

export default Home;