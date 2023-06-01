// store.js

import { configureStore, createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'item',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        deleteItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateItem: (state, action) => {
            const { id, newName, newDescription, newPrice } = action.payload;
            const item = state.find((item) => item.id === id);
            if (item) {
                item.name = newName;
                item.description = newDescription;
                item.price = newPrice;
            }
        },
    },
});

const store = configureStore({
    reducer: {
        items: itemSlice.reducer,
    },
});

export const { addItem, deleteItem, updateItem } = itemSlice.actions;
export default store;