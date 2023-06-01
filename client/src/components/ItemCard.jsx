import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../store';
import './itemCard.css';

const ItemCard = ({ item, onDelete, onMoreInfo }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        onMoreInfo(item.id);
    };

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(item.id));
    };



    return (
        <div className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <button onClick={handleOpenPopup} className="more-info-button">More Info</button>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default ItemCard;