import './datatable.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows} from '../../dataTableFakeData'
import { Link} from "react-router-dom"

function Datatable({quote}) {

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Azioni",
      width: 200,
      renderCell: (params) => {
        const {row} = params
        return(
          <div className='cellAction'>
            <Link to={`/orders/${row.id}`} state={{ testValue: "hello"}}>
              <div className='viewButton'>Vedi dettagli</div>
            </Link>
            
            <div className='deleteButton'>Elimina</div>
          </div>
        )
      } 
    }
  ]

  
  const test = quote.map((row) => {
    return {
      id: row._id,
      user: row.clientInfo.firstName,
      email: row.clientInfo.email,
      age: row.clientInfo.plz
    }
  })
  return (
    <div className='datatable'>
        <DataGrid
        rows={test}
        //With the concat method you can add another column, without 
        // defining it in the column array. This is really cool, did not know that
        // Maybe I can make use of this in other parts of my program. 
        // If you think about it's obvious, they are just arrays. 
        columns={userColumns.concat(actionColumn)}
        pageSize={17}
        rowsPerPageOptions={[17]}
        checkboxSelection
        
      />
    </div>
  )
}

export default Datatable