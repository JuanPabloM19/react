import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { NavBar } from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
