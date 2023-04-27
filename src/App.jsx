import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { Checkout } from './Components/Checkout/Checkout';
import {ItemDetailConatiner} from './Components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'
import {NavBar} from './Components/NavBar/NavBar'

export const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/product/:id' element={<ItemDetailConatiner/>} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}