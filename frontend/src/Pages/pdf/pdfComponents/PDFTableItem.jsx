import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';





const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        //textAlign:'left',
        alignItems:'center',
        height: 43,
        fontStyle: 'bold',
        flexGrow:1
    },
    description: {
        width: '60%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
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


const PDFTableItem = ({items}) => {
    const rows = items.map( item => 
        <View style={styles.row} key={item.sno.toString()} wrap={false}>
            <Text style={styles.description}>new{"\n"} testing</Text>
            <Text style={styles.currency}>{item.currency}{"\n"}</Text>
            <Text style={styles.amount}>{item.rate.toFixed(2)}{"\n"}</Text>
        </View>
        
        
    )
    return (
        <Fragment>{rows}</Fragment>
    )
};
  
export default PDFTableItem