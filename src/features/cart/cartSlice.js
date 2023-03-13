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
            if(item[0].amount < 0){
                item[0].amount = 0;
            } else {
                item[0].amount -= 1;
            }
        },
        calculateTotal: (state, action) => {
            let total = 0;
            for(let i = 0; i < state.cartItems.length; i++){
                let itemTotal = state.cartItems[i].amount * state.cartItems[i].price;
                console.log(itemTotal);
                total += itemTotal;
            }
            state.total = total;
        },
        removeItem: (state, action) => {
            let filteredArray = [];
            for(let i = 0; i < state.cartItems.length; i++){
                filteredArray = state.cartItems.filter((item) => item.id != action.payload)
            }
            state.cartItems = filteredArray;
        }
    }
});

export const {actions} = cartSlice;
export default cartSlice.reducer;
export const slice = cartSlice;