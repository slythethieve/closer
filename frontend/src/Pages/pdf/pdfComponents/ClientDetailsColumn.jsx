import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import CompanyDetailsComp from './CompanyDetailsComp';
import Logo from './Logo';
import { style } from '@mui/system';

const styles = StyleSheet.create({
   
    
    
    container: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    text:{
        color: 'black',
        letterSpacing: 1,
        fontSize: 11,
        textAlign: 'left',
        textTransform: 'uppercase',
    }
  });


  // Again some hardcoded data to test out the layout
  const ClientDetailsColumn = () => (
    <View style = {styles.container}>
        <Text style={styles.text}>Sig. Paolo Rossi</Text>
        <Text style={styles.text}>Stationstrasse 17</Text>
        <Text style={styles.text}>8003 Zürich</Text>
    </View>
    );
  
  export default ClientDetailsColumn