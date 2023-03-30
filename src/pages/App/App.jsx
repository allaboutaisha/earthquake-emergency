import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Footer from '../../components/Footer/Footer';
import * as ordersAPI from '../../utilities/orders-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  async function handleChangeQty(packageItemId, newQty) {
    const updatedCart = await ordersAPI.setPackageQtyInCart(packageItemId, newQty)
    setCart(updatedCart)
  }

  async function handleCheckout() {
    await ordersAPI.checkout()
    navigate('/orders')
  }

  return (
    <main className="App">
        <div className="Container">  
          <NavBar cart={cart} user={user} />
          <Routes>
            <Route path="/home" element={<HomePage setCart={setCart} setUser={setUser} user={user} /> } />
            <Route path="/orders" element={user ? <OrderHistoryPage /> : <Navigate to="/auth" /> } />
            <Route path="/orders/cart" element={user ? <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />: <Navigate to="/auth" />  } />
            <Route path="/auth" element={<AuthPage setUser={setUser} user={user} />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes> 
          <Footer />
        </div>
    </main>
  ); 
} 
