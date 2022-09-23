import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

import PDFTableHeader from './PDFTableHeader';
import PDFTableItem from './PDFTableItem';
import PDFTableFooter from './PDFTableFooter';
// Theoretically I can get away with 29 table rows according to 
// the invoices I was making in excel. I will test with the values. 

const tableRowsCount = 29


const items = [
    {
      sno: 1,
      desc: "ad sunt culpa occaecat qui",
      qty: 5,
      rate: 405.89,
      currency: "CHF",
    },
    {
      sno: 2,
      desc: "cillum quis sunt qui aute",
      qty: 5,
      rate: 373.11,
      currency: "CHF",
    },
    {
      sno: 3,
      desc: "ea commodo labore culpa irure",
      qty: 5,
      rate: 458.61,
      currency: "CHF",
    },
    {
      sno: 4,
      desc: "nisi consequat et adipisicing dolor",
      qty: 10,
      rate: 725.24,
      currency: "CHF",
    },
    {
      sno: 5,
      desc: "proident cillum anim elit esse",
      qty: 4,
      rate: 141.02,
      currency: "CHF",
    },
    {
        sno: 6,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 7,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 8,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 9,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 10,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 11,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 12,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 13,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 14,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 15,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 16,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 17,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 18,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 19,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 20,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 21,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 22,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 23,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 24,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 25,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 26,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 27,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 28,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 29,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
      {
        sno: 30,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },

      {
        sno: 31,
        desc: "proident cillum anim elit esse",
        qty: 4,
        rate: 141.02,
        currency: "CHF",
      },
  ]
const styles = StyleSheet.create({
   
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        
        
        
        
    },
  });


  // Again some hardcoded data to test out the layout
  const PDFTable = () => (
    <View style = {styles.tableContainer} >
        <PDFTableHeader />
        <PDFTableItem items={items}/>
        <PDFTableFooter />
    </View>
    );
  
  export default PDFTable