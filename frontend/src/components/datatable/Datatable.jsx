import './datatable.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows} from '../../dataTableFakeData'
import { Link} from "react-router-dom"

function Datatable({quote}) {
  	const actionColumn = [{
		field: "action",
		headerName: "Azioni",
		width: 150,
		renderCell: (params) => {
			const {row} = params
			return(
			<div className='cellAction'>
				<Link to={`/orders/${row.id}`} state={{ quote: filterTest(row.id)}}>
				<div className='viewButton'>Vedi dettagli</div>
				</Link>
			</div>
			)
		} 
	}]
 
	const filterTest = (id) => {
		const result = quote.filter(row => row._id === id)
		return result

	}


  const test = quote.map((row) => {
    return {
      id: row._id,
      user: row.clientInfo.name,
      email: row.clientInfo.email,
      city: row.clientInfo.city,
      address: row.clientInfo.address,

    }
  })
  	return (
		<div className='datatable'>
			<DataGrid
			rows={test}
			columns={userColumns.concat(actionColumn)}
			pageSize={17}
			rowsPerPageOptions={[17]}
			checkboxSelection/>
		</div>
  )
}

export default Datatable