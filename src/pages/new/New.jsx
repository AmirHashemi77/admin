import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Navbar from '../../component/Navbar/Navbar';
import "./new.scss"
import { DriveFolderUploadOutlined } from '@mui/icons-material';


const New = () => {
    const [file,setFile]=useState()

    const addfile=(e)=>{
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className='new'>
            <Sidebar/>
            <div className='new-container'>
                <Navbar/>

                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className='left'>
                        <img src={file ? file : "https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-10639.jpg?w=2000"} alt="img" />
                    </div>
                    <div className='right'>
                        <form>
                            <div className="item">
                                <label htmlFor="file">
                                    Image :
                                    <DriveFolderUploadOutlined  className='icon'/>
                                    </label>
                                
                                <input type="file" onChange={addfile}  id='file' style={{display:"none"}}/>
                            </div>
                            <div className="item">
                                <label>
                                        UserName
                                </label>
                                
                                <input type="text" placeholder='john_deo'/>
                            </div>
                            <div className="item">
                                <label>
                                        Email
                                </label>
                                
                                <input type="email" placeholder='john_deo@example.com'/>
                            </div>
                            <div className="item">
                                <label>
                                        Password
                                </label>
                                
                                <input type="password" />
                            </div>
                            <div className="item">
                                <label>
                                        Country
                                </label>
                                
                                <input type="text" placeholder='USA'/>
                            </div>
                            <div className="item">
                                <label>
                                        Name and Surname
                                </label>
                                
                                <input type="text" placeholder='John Deo'/>
                            </div>
                            <div className="item">
                                <label>
                                        Phone
                                </label>
                                
                                <input type="text" placeholder='+1 234 567 89'/>
                            </div>
                            <div className="item">
                                <label>
                                        Address
                                </label>
                                
                                <input type="text" placeholder='Elton St. 216 NewYork'/>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;