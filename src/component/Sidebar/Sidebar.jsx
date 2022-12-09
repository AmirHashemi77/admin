import { CreditCardOutlined, Dashboard, InsertChart, Inventory, Logout, Notifications, PersonOutlineOutlined, Settings, LocalShipping } from '@mui/icons-material';
import React from 'react';
import "./sidebar.scss"
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <h1 className='logo'>lamadin</h1>
            </div>
            
            <div className='center'>
                <div>
                    <h4 className='title'>MAIN</h4>
                            <ul>
                                <li className='item'>
                                <Dashboard className='icon'/>
                                <p>Dashboard</p>
                                </li>
                                
                            </ul>

                </div>
                <div>
                    <h4 className='title'>LISTS</h4>
                            <ul>
                                <li className='item'>
                                <PersonOutlineOutlined className='icon'/>
                                <p>User</p>
                                </li>
                                <li className='item'>
                                <Inventory className='icon'/>
                                <p>Products</p>
                                </li>
                                <li className='item'>
                                <CreditCardOutlined className='icon'/>
                                <p>Orders</p>
                                </li>
                                <li className='item'>
                                <LocalShipping className='icon'/>
                                <p>Delivery</p>
                                </li>
                                
                            </ul>

                </div>
                <div>
                    <h4 className='title'>USEFUL</h4>
                            <ul>
                                <li className='item'>
                                <InsertChart className='icon'/>
                                <p>Stats</p>
                                </li>
                                <li className='item'>
                                <Notifications className='icon'/>
                                <p>Notification</p>
                                </li>
                             
                                
                            </ul>

                </div>
                <div>
                    <h4 className='title'>SERVICE</h4>
                            <ul>
                                <li className='item'>
                                <Settings className='icon'/>
                                <p>System Health</p>
                                </li>
                                <li className='item'>
                                <Settings className='icon'/>
                                <p>Logs</p>
                                </li>
                                <li className='item'>
                                <Settings className='icon'/>
                                <p>Setting</p>
                                </li>
                             
                                
                            </ul>

                </div>
                <div>
                    <h4 className='title'>SERVICE</h4>
                            <ul>
                                <li className='item'>
                                <Logout className='icon'/>
                                <p>Profile</p>
                                </li>
                                <li className='item'>
                                <Logout className='icon'/>
                                <p>Logout</p>
                                </li>
                             
                                
                            </ul>

                </div>
            </div>
            <div className='bottom'>
            <h4 className='title'>THEME</h4>
                <button className='white-btn'></button>
                <button className='dark-btn'></button>
            </div>
        </div>
    );
};

export default Sidebar;