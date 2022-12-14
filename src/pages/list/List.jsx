import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Navbar from '../../component/Navbar/Navbar';
import "./list.scss"
const List = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className='list-container'>
                <Navbar/>
            </div>
            
        </div>
    );
};

export default List;