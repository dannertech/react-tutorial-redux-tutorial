import React from 'react';
import {ChevronDown, ChevronUp} from '../icons';
import {actions} from '../features/cart/cartSlice.js';
import {useDispatch} from 'react-redux';

const CartItem = ({id, img, title, price, amount}) => {
    const dispatch = useDispatch();
    const {addCartItem, deleteCartItem, removeItem} = actions;

 
    return (
        <article className='cart-item'>
            <img src={img} alt="Image of cellphone"/>
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>Remove</button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => dispatch(addCartItem(id))}>
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className='amount-btn' onClick={() => dispatch(deleteCartItem(id))}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
};

export default CartItem;