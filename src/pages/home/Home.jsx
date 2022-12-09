import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import "./home.scss";
import Navbar from '../../component/Navbar/Navbar';
const Home = () => {
    return (
        <div className='home'> 
            <Sidebar/>
            <div className='home-container'>
                <Navbar/>
            </div>
        </div>
    );
};

export default Home;