import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import PaymentGateway from '../pages/PaymentGateway';
import Cart from '../pages/Cart';
import About from '../pages/About'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/PaymentGateway' element={<PaymentGateway />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default AppRoutes;


