import React from 'react';
import { PDFViewer } from '@react-pdf/renderer'
import QuotePdf from './QuotePdf'
import { useLocation } from 'react-router-dom';



// Create Document Component
const Pdf = () => {

	const location = useLocation() 
	const quote = location.state.quote
	return (
		<PDFViewer width = "100%" height ="850" className='pdf'>
		<QuotePdf quote ={quote}/>
		</PDFViewer>
	)
}

export default Pdf