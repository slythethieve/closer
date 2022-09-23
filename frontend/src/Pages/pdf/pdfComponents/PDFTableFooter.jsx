import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';


//const borderColor = 'blue'
const styles = StyleSheet.create({
   
    
    
    container: {
        flexDirection: 'row',
        backgroundColor: '#8EA9DB',
        alignItems: 'center',
        height: 23,
        textAlign: 'left',
        borderColor: 'black',
        borderWidth: 1,
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '60%',
        borderRightColor: 'black',
        borderRightWidth: 1,
        textAlign: 'left',
        paddingLeft: 10
    },
    currency: {
        width: '10%',
        borderRightColor: 'black',
        borderRightWidth: 1,
        paddingLeft: 10
    },
    amount: {
        width: '15%',
        paddingLeft: 10,
        
    },
  });


  // Again some hardcoded data to test out the layout
  const PDFTableFooter = () => (
    <View style = {styles.container}>
        <Text style={styles.description}>Totale</Text>
        <Text style={styles.currency}>CHF</Text>
        <Text style={styles.amount}>Totale</Text>
    </View>
    );
  
  export default PDFTableFooter