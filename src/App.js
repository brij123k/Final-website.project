import React from 'react';
import './App.css';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Roti from './Pages/ALL CATEGORY/index';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/roti/:id' element={<Roti/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;