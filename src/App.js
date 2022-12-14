import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import "./style/darkmode.scss"
import context from './context/context';


const App = () => {

  const [darkMode,setDarkMode]=useState(false)

  return (
    <context.Provider value={{
      darkmode:darkMode,
      setdarkmode:setDarkMode
    }}>

    <div className={ darkMode ? 'app dark' : 'app'}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<List/>}/>
      <Route path='/user/:userId' element={<Single/>}/>
      <Route path='/user/new' element={<New/>}/>
    </Routes>

    </div>
    </context.Provider>
  );
};

export default App;