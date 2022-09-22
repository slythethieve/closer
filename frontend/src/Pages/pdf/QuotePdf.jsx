import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';




import Header from './pdfComponents/Header';
import ClientDetailsColumn from './pdfComponents/ClientDetailsColumn';
import DateComponent from './pdfComponents/DateComponent';
import PDFTable from './pdfComponents/PDFTable';

// Create styles
const styles = StyleSheet.create({

  page: {
    fontFamily: 'Courier',
    fontSize: 13,
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
export const QuotePdf = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <DateComponent />
      <ClientDetailsColumn />
      <PDFTable />
    </Page>
  </Document>

)

export default QuotePdf