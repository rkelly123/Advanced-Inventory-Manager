import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { deleteItem } from '../redux/store';
import './styles/itemCard.css';

const ItemCard = ({ item, onMoreInfo, onDelete }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        onMoreInfo(item.id);
    };

    const dispatch = useDispatch();

    const handleDelete = () => {
        onDelete(item.id)
        // dispatch(deleteItem(item.id));
    };



    return (
        <div className="item-card">
            <h3 className="item-name">{item.name}</h3>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
                <button onClick={handleOpenPopup} className="more-info-button">More Info</button>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default ItemCard;