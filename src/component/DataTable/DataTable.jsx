import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from '../../databaseSource';
import "./dataTable.scss"
const DataTable = () => {
    return (
        <div className='dataTable'>
                <DataGrid
                    rows={userRows}
                    columns={userColumns}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
                </div>
    );
};

export default DataTable;