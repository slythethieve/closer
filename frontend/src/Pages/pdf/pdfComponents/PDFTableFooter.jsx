import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#8EA9DB',
        alignItems: 'center',
        
        textAlign: 'left',
        borderColor: 'black',
        borderWidth: 1,
        fontStyle: 'bold',
        flexGrow: 1,
        fontSize : 11
    },
    description: {
        width: '75%',
        borderRightColor: 'black',
        borderRightWidth: 1,
        textAlign: 'left',
        paddingLeft: 10,
        
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

const PDFTableFooter = ({quote}) => {

    let total = 0

    // TODO: Goodlinee part still missing. 
    for (let i = 0; i < Object.values(quote[0].products.euroMoebelProducts.products).length; i++) {
        
        total = total + (Number(Object.values(quote[0].products.euroMoebelProducts.products)[i].price.value) || 0)
    }
    
    return (
        <View style = {styles.container}>
            <Text style={styles.description}>Totale</Text>
            <Text style={styles.currency}>CHF</Text>
            <Text style={styles.amount}>{total}</Text>
        </View>
    )
}
  
export default PDFTableFooter