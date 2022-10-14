import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';

import PDFTableHeader from './PDFTableHeader';
import PDFTableItem from './PDFTableItem';
import PDFTableFooter from './PDFTableFooter';

const styles = StyleSheet.create({
   
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        
    },
  });

  const PDFTable = ({quote}) => (
    <View style = {styles.tableContainer} >
        <PDFTableHeader />
        <PDFTableItem quote={quote}/>
        <PDFTableFooter />
    </View>
    );
  
  export default PDFTable