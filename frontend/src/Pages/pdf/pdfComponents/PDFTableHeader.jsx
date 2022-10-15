import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#8EA9DB',
        alignItems: 'center',
        fontSize: 11,
        textAlign: 'left',
        borderColor: 'black',
        borderWidth: 1,
        flexGrow: 1,
    },
    description: {
        width: '75%',
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


const PDFTableHeader = () => (
    <View style = {styles.container}>
        <Text style={styles.description}>Descrizione</Text>
        <Text style={styles.currency}>CHF</Text>
        <Text style={styles.amount}>Totale</Text>
    </View>
);
  
export default PDFTableHeader