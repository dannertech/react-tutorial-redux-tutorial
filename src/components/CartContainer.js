import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../features/cart/cartSlice';
import CartItem
 from './CartItem';

const CartContainer = () => {
    const {amount, total, cartItems} = useSelector((store) => store.cart);
    const {calculateTotal, clearCart} = actions;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotal())
    })
    if(amount < 1){
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return(
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                    {cartItems.map((item) => {
                        return (
                            <CartItem {...item} key={item.id} />
                        )
                    })}
                </div>
                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>
                            Total <span>${total}</span>
                        </h4>
                    </div>
                    <button onClick={() => dispatch(clearCart())} className='btn clear-btn'>
                        Clear Cart
                    </button>
                </footer>
        </section>
    )
};

export default CartContainer;