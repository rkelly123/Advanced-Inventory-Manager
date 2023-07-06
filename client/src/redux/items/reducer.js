import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addItemAsync, getItemsAsync, deleteItemAsync, updateItemAsync } from './thunks';

const INITIAL_STATE = {
    list: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    deleteItem: REQUEST_STATE.IDLE,
    updateItem: REQUEST_STATE.IDLE,
    error: null
};

const itemsSlice = createSlice({
    name: 'items',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAsync.pending, (state) => {
                return {
                    ...state,
                    getItems: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    getItems: REQUEST_STATE.FULFILLED,
                    list: action.payload
                }
            })
            .addCase(getItemsAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getItems: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(addItemAsync.pending, (state) => {
                return {
                    ...state,
                    addItem: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    addItem: REQUEST_STATE.FULFILLED,
                    list: [...state.list, action.payload]
                }
            })
            .addCase(addItemAsync.rejected, (state, action) => {
                return {
                    ...state,
                    getItems: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(deleteItemAsync.pending, (state) => {
                return {
                    ...state,
                    deleteItem: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    deleteItem: REQUEST_STATE.FULFILLED,
                    list: state.list.filter((item) => item.id !== action.payload)
                }
            })
            .addCase(deleteItemAsync.rejected, (state, action) => {
                return {
                    ...state,
                    deleteItem: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            })
            .addCase(updateItemAsync.pending, (state) => {
                return {
                    ...state,
                    updateItem: REQUEST_STATE.PENDING,
                    error: null
                }
            })
            .addCase(updateItemAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    updateItem: REQUEST_STATE.FULFILLED,
                    list: state.list.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    )
                }
            })
            .addCase(updateItemAsync.rejected, (state, action) => {
                return {
                    ...state,
                    updateItem: REQUEST_STATE.REJECTED,
                    error: action.error
                }
            });;
    }
});

export default itemsSlice.reducer;
