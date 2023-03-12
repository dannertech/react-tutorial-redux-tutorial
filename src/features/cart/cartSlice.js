import React from 'react';

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    amount: 0,
    cartItems: [],
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