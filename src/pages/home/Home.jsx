import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import "./home.scss";
import Navbar from '../../component/Navbar/Navbar';
import Widget from '../../component/Widget/Widget';
import Featured from '../../component/Featured/Featured';
import Chart from '../../component/Chart/Chart';
import HomeTable from '../../component/Table/Table';
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
                <div className='chars-wrapper'>
                    <Featured/>
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
                </div>
                <div className='table-container'>
                    <HomeTable/>
                </div>
            </div>
        </div>
    );
};

export default Home;