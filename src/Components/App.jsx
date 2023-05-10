import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CarritoProvider } from "../Context/CartContext";
import { Cart } from "./Cart/Cart";
import { Checkout } from "./Checkout/Checkout";
import {ItemDetailContainer} from './ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { NavBar } from "./NavBar/NavBar";
import { ToastContainer } from 'react-toastify';
import { createProducts } from "../Firebase/Firebase";

export const App = () => {
  return (
    <>
        <CarritoProvider>
        <BrowserRouter>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
        </CarritoProvider>
    </>
  )
}