import './datatable.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows} from '../../dataTableFakeData'


function Datatable() {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return(
          <div className='cellAction'>
            <div className='viewButton'>View</div>
            <div className='deleteButton'>Delete</div>
          </div>
        )
      } 
    }
  ]
  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        //With the concat method you can add another column, without 
        // defining it in the column array. This is really cool, did not know that
        // Maybe I can make use of this in other parts of my program. 
        // If you think about it's obvious, they are just arrays. 
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable