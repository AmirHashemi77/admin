import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import "./home.scss";
const Home = () => {
    return (
        <div className='home'> 
            <Sidebar/>
            <div className='home-container'></div>
        </div>
    );
};

export default Home;