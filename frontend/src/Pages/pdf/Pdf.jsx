import React from 'react';

import { PDFViewer } from '@react-pdf/renderer'
import Test from './Test'



// Create Document Component
const Pdf = () => (
    <PDFViewer>
    <Test />
  </PDFViewer>
)

export default Pdf