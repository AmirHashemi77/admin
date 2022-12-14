import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import Navbar from '../../component/Navbar/Navbar';
import "./list.scss"
import DataTable from '../../component/DataTable/DataTable';
import { Link } from 'react-router-dom';
const List = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className='list-container'>
                <Navbar/>
                <div className='header'>
                    <h1>Customer</h1>
                    <Link className='link'>Add New</Link>

                </div>
                <DataTable/>
            </div>
            
        </div>
    );
};

export default List;