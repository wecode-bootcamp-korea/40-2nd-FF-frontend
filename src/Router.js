import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import GourmetDetail from './pages/GourmetDetail/GourmetDetail';
import GourmetList from './pages/GourmetList/GourmetList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Detail" element={<GourmetDetail />} />
        <Route path="/List" element={<GourmetList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
