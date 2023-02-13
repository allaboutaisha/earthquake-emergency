import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      { user ?
        <>  
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} /> } />
            <Route path="/orders" element={<OrderHistoryPage /> } />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes> 
        </>  
        :
        <AuthPage setUser= {setUser} />
      }
    </main>
  ); 
} 
