import { CreditCardOutlined, Dashboard, InsertChart, Inventory, Logout, Notifications, PersonOutlineOutlined, Settings, LocalShipping } from '@mui/icons-material';
import React, { useContext } from 'react';
import "./sidebar.scss"
import { Link } from 'react-router-dom';
import context from '../../context/context';
const Sidebar = () => {
const ctx=useContext(context)

console.log(ctx);

    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' className='logo'>lamadin</Link>
            </div>
            
            <div className='center'>
                <div>
                    <h4 className='title'>MAIN</h4>
                            <ul>
                                <Link to='/' className='item'>
                                <Dashboard className='icon'/>
                                <p>Dashboard</p>
                                </Link>
                                
                            </ul>

                </div>
                <div>
                    <h4 className='title'>LISTS</h4>
                            <ul>
                                <Link to="/user" className='item'>
                                <PersonOutlineOutlined className='icon'/>
                                <p>User</p>
                                </Link>
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
                <button onClick={()=>ctx.setdarkmode(false)} className='white-btn'></button>
                <button onClick={()=>ctx.setdarkmode(true)} className='dark-btn'></button>
            </div>
        </div>
    );
};

export default Sidebar;