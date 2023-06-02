import { configureStore, createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            return state.filter((item) => item.id !== itemId);
        },
        updateItem: (state, action) => {
            const updatedItem = action.payload;
            const itemIndex = state.findIndex((item) => item.id === updatedItem.id);
            if (itemIndex !== -1) {
                state[itemIndex] = updatedItem;
            }
        },
    },
});

export const { addItem, deleteItem, updateItem } = itemSlice.actions;

const store = configureStore({
    reducer: {
        items: itemSlice.reducer,
    },
});

export default store;