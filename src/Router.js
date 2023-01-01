import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import GourmetDetail from './pages/GourmetDetail/GourmetDetail';
import GourmetList from './pages/GourmetList/GourmetList';
import NavLayout from './components/Outlet/NavLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/Detail" element={<GourmetDetail />} />
          <Route path="/List" element={<GourmetList />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
