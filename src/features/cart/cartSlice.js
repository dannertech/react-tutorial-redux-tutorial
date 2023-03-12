import React from 'react';
import cartItems from '../../cartItems.js';


import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    amount: 0,
    cartItems: cartItems,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state, action) => {
            return state.total = 0;
        }
    }
});

export const {actions} = cartSlice;
export default cartSlice.reducer;
export const slice = cartSlice;