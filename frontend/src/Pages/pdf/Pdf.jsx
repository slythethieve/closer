import React from 'react';
import { PDFViewer } from '@react-pdf/renderer'
import QuotePdf from './QuotePdf'



// Create Document Component
const Pdf = () => (
    <PDFViewer width = "100%" height ="850" className='pdf'>
      <QuotePdf />
    </PDFViewer>
)

export default Pdf