import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';

import Header from './pdfComponents/Header';
import ClientDetailsColumn from './pdfComponents/ClientDetailsColumn';
import DateComponent from './pdfComponents/DateComponent';
import PDFTable from './pdfComponents/PDFTable';
import { Font } from '@react-pdf/renderer';
import font from '../../font.ttf'
// Create styles
Font.register({
  family: "Nunito",
  format: "truetype",
  src: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
});
const styles = StyleSheet.create({

  page: {
    fontFamily: 'Courier',
    fontSize: 11,
    paddingTop: 40,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:40,
    lineHeight: 1.5,
    flexDirection: 'column',
    
  }, 
  
  section: { color: 'black', textAlign: 'center', margin: 20 }
});

// Create Document Component
export const QuotePdf = ({quote}) => (
    <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <DateComponent />
      <ClientDetailsColumn quote={quote}/>
      <PDFTable quote={quote}/>
    </Page>
  </Document>

)

export default QuotePdf