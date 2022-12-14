import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Navbar from '../../component/Navbar/Navbar';
import "./single.scss"
import Chart from '../../component/Chart/Chart';
import HomeTable from '../../component/Table/Table';
const Single = () => {
    return (
        <div className='single'>
            <Sidebar/>
            <div className='single-container'>
                <Navbar/>
                <div className='top'>
                    <div className='left'>
                        <h4>Information</h4>
                        <div className='info-wrapper'>
                            <img src="/img/1.jpg" alt="profile" />
                            <div className='info'>
                                <h6>Jane Doe</h6>
                                <p>Email : <span>janedeo@example.com</span></p>
                                <p>Phone : <span>+1 234 567 89</span></p>
                                <p>Address : <span>Elton St. 234 Garden Yd.NewYork</span></p>
                                <p>Country : <span>USA</span></p>
                            </div>
                        </div>
                        <button>Edit</button>
                    </div>
                    <div className='right'>
                        <Chart aspect={5/1} title='Last 6 Mounth'/>
                    </div>
                </div>
                <div className='bottom '>
                    <HomeTable/>
                </div>
            </div>
        </div>
    );
};

export default Single;
