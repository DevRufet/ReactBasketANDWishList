import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import WishListPage from './pages/WishListPAge/WishListPage';
import MainProvider from './context/MainProvider';
import WishListProvider from './context/WishListProvider';
import CoreProvider from './context/CoreProvider';
function App() {
 

  return (
    <>
    <CoreProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CoreProvider>
    </>
  )
}

export default App
