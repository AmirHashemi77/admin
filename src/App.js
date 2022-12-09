import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<List/>}/>
      <Route path='/user/:userId' element={<Single/>}/>
      <Route path='/user/new' element={<New/>}/>
    </Routes>
  );
};

export default App;