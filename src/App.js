import cartSlice, {slice} from "./features/cart/cartSlice";
import React, {useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {store}from '../src/store.js';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
