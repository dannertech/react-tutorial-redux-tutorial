import React from 'react';
import {useSelector} from 'react-redux';
import CartItem
 from './CartItem';

const CartContainer = () => {
    const {amount, total, cartItems} = useSelector((store) => store.cart);
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
                </footer>
        </section>
    )
};

export default CartContainer;