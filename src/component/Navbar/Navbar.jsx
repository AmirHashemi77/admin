import { CropFree, Language, Search, Menu, DarkModeOutlined, NotificationsOutlined, MessageOutlined, SettingsOutlined } from '@mui/icons-material';
import React from 'react';
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type="text" placeholder='Search...' />
                    <Search className='icon'/>
                </div>
                <ul>
                        <li className='language-item'>
                            <Language className='icon'/>
                            <span>English</span>
                        </li>
                        <li>
                            <DarkModeOutlined className='icon'/>
                        </li>
                        <li>
                            <CropFree className='icon'/>
                            
                        </li>
                        <li>
                            <div className='badge-icon'>
                                <NotificationsOutlined className='icon'/>
                                <div className='badge'>5</div>

                            </div>
                        </li>
                        <li>
                            <div className='badge-icon'>
                                <MessageOutlined className='icon'/>
                                <div className='badge'>5</div>

                            </div>
                        </li>
                        <li>
                            <Menu className='icon'/>
                        </li>
                        <li>
                            <img src='img/1.jpg' alt='profil'/>
                        </li>
                        <li>
                            <SettingsOutlined className='icon'/>
                        </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;