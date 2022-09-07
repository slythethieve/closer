import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// let's test displaying db data. starting with just the name
import { useDispatch } from 'react-redux';
import { createQuote, getQuotes } from '../../features/quote/quoteSlice';
import {useEffect} from 'react'

import './table.scss'

// This could be another good potential addition to the application
// Keeping track of where we are with an order.
const TableComponent = () => {
    
    //testing dispatch
    const dispatch = useDispatch()

    

    const rows = [
        {
            id: 342342342,
            name: "Elisabeth Theophile",
            total: 15600,
            stato: "Produzione"
        },
        {
            id: 69778458,
            name: "Famiglia Sagace",
            total: 5000,
            stato: "Ordinare"
        },
        {
            id: 344324235,
            name: "Signora Bisigato",
            total: 3660,
            stato: "Produzione"
        },
        {
            id: 5325235235,
            name: "Jelena Propadalo",
            total: 11500,
            stato: "Incompleto"
        },
        {
            id: 3121326654,
            name: "Famiglia Friedmann",
            total: 20000,
            stato: "Incompleto"
        },
        {
            id: 438924234823,
            name: "Arlinda Pontoreiro",
            total: 6600,
            stato: "Completo"
        }

    ];
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
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell className='tableCell'>{row.id}</TableCell>
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