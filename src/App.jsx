import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wishlist from './components/Pages/Whishlist/Wishlist';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AdminPanel from './components/Pages/Admin/AdminPanel';
import { WishlistProvider } from './contexts/WishlistContext';
import './App.css';

const App = () => {
  return (
    <WishlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Wishlist />} />
          <Route path="/wishlist/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
};

export default App;
