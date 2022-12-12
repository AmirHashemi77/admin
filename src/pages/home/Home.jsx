import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import "./home.scss";
import Navbar from '../../component/Navbar/Navbar';
import Widget from '../../component/Widget/Widget';
const Home = () => {
    return (
        <div className='home'> 
            <Sidebar/>
            <div className='home-container'>
                <Navbar/>
                <div className='widgets'>
                    <Widget type='user'/>
                    <Widget type='order'/>
                    <Widget type='earning'/>
                    <Widget type='balance'/>
                </div>
            </div>
        </div>
    );
};

export default Home;