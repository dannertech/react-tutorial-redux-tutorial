import cartSlice, {slice} from "./features/cart/cartSlice";
import React, {useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {store}from '../src/store.js';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

function App() {
  const {isOpen} = useSelector((store) => store.modal)
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
