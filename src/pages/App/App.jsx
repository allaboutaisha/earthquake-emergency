import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage';
import Cart from '../Cart/Cart';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      { user ?
        <>  
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<HomePage user={user} setUser={setUser} /> } />
            <Route path="/orders" element={<OrderHistoryPage /> } />
            <Route path="/orders/cart" element={<Cart /> } />

            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes> 
        </>  
        :
        <AuthPage setUser= {setUser} />
      }
    </main>
  ); 
} 
