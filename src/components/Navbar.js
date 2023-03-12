import React from 'react';
import {useSelector} from 'react-redux';
import {CartIcon} from '../icons';

const Navbar = () => {
    const amount = useSelector((store) => store.cart.amount)
    console.log(amount)
    return (
        <nav>
            <div className='nav-center'>
                <h3>Redux Toolkit</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                    <p className='total-amount'>0</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;