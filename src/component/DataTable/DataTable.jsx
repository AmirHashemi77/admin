import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from '../../databaseSource';
import "./dataTable.scss"
import { Link } from 'react-router-dom';
const DataTable = () => {

    const actionColumn=[
        {
            field: "action",
            headerName: "Action",
            width: 230,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                  <Link to='/user/test' className='view-button'>View</Link>
                  <button className='delete-button'>Delete</button>
                  
                </div>
              );
            },
          }
    ]

    return (
        <div className='dataTable'>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
                </div>
    );
};

export default DataTable;