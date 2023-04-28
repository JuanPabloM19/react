import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Checkout } from "./Checkout/Checkout";
import { ItemDetailConatiner } from "./ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { NavBar } from "./NavBar/NavBar";

function App() {
  return (
    <>
      <main className="app">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailConatiner />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
