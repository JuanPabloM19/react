import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CarritoProvider } from "../Context/CartContext";
import { Cart } from "./Cart/Cart";
import { Checkout } from "./Checkout/Checkout";
import { ItemDetailConatiner } from "./ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { NavBar } from "./NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import { createProducts } from "./Firebase/Firebase.js";

export const App = () => {
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailConatiner />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}
