import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from '../../features/quote/quoteSlice';
import {useEffect} from 'react'

import './table.scss'

const TableComponent = () => {
    
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const {quote, isLoading, isError, message} = useSelector((state) => state.quotes)

    useEffect(() => {

    if(isError) {
      console.log('message')
    }
    
    dispatch(getQuotes())
    
    }, [user, isError, message, dispatch])

    return (
        <div className='listWrapper'>
            <div className='listTitle'>Ultimi clienti</div>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className='tableCellColumn'>Nominativo</TableCell>
                        <TableCell className='tableCellColumn'>ID</TableCell>
                        <TableCell className='tableCellColumn'>Totale Contratto</TableCell>
                        <TableCell className='tableCellColumn'>Stato</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {quote.map((row) => (
                        <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                            {row.clientInfo.firstName}
                        </TableCell>
                        <TableCell className='tableCell'>{row._id}</TableCell>
                        <TableCell className='tableCell'>{row.total}</TableCell>
                        <TableCell className='tableCell'>
                            <span className={`status ${row.stato}`}>{row.stato}</span>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
        </div>
    )
}

export default TableComponent