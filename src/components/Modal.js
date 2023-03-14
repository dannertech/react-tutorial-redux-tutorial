import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../features/modal/modalSlice.js';
import {actions as cartActions} from '../features/cart/cartSlice.js';


const Modal = () => {
    const dispatch = useDispatch();
    

    return(
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove All Items From Your Shopping Cart</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={() => {
                        dispatch(cartActions.clearCart());
                        dispatch(actions.closeModal());
                    }
                     }>Confirm</button>
                    <button type='button' className='btn clear-btn' onClick={() => dispatch(actions.closeModal())}>Cancel</button>
                </div>
            </div>
        </aside>
    )
};

export default Modal;