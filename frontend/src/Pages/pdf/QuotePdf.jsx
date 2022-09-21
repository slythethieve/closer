import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


import CompanyDetailsComp from './pdfComponents/CompanyDetailsComp';

import CompanyDetailsRow from './pdfComponents/CompanyDetailsRow';


// Create styles
const styles = StyleSheet.create({

  page: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    paddingTop: 30,
    paddingLeft:30,
    paddingRight:60,
    lineHeight: 1.5,
    flexDirection: 'column',
  }, 
  
  section: { color: 'black', textAlign: 'center', margin: 20 }
});

// Create Document Component
export const QuotePdf = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <CompanyDetailsRow />
    </Page>
  </Document>

)

export default QuotePdf