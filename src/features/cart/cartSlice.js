import React from 'react';
import cartItems from '../../cartItems.js';


import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    amount: 4,
    cartItems: cartItems,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state, action) => {
            state.cartItems = [];
        },
        addCartItem: (state, action) => {
            
            let item = state.cartItems.filter((item) => item.id == action.payload);
       
            item[0].amount += 1;

         
        },
        deleteCartItem: (state, action) => {
            let item = state.cartItems.filter((item) => item.id == action.payload);
            if(item.amount < 0){
                item.amount -= 1;
            } else {
                item.amount = 0;
            }
        }
    }
});

export const {actions} = cartSlice;
export default cartSlice.reducer;
export const slice = cartSlice;