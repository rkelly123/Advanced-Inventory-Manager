import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEMS,
    async () => {
        return await ItemService.getItems();
    }
);

export const addItemAsync = createAsyncThunk(
    actionTypes.ADD_ITEM,
    async (item) => {
        const response = await ItemService.addItem(item);
        return response;
    }
);

export const deleteItemAsync = createAsyncThunk(
    actionTypes.DELETE_ITEM,
    async (itemId) => {
        const response = await ItemService.deleteItem(itemId);
        return response;
    }
);
