import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import unique_key from '../../../utils/unique_key';
import { useState } from 'react';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth:1,
        alignItems:'center',
        fontSize: 11,
        fontStyle: 'bold',
        flexGrow:1
    },
    description: {
        width: '75%',
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


const PDFTableItem = ({quote}) => {

    // TODO:
    // An easy way to make this better already would be to put all these functions and therefore values in the higher order 
    // components, instead of having duplication scattered on these lower levels.
    //
    const productStringsArray = []
    let descriptionString
    let currencyString
    let priceString


    // TODO: Goodlinee part still missing. 
    for (let i = 0; i < Object.values(quote[0].products.euroMoebelProducts.products).length; i++) {
        descriptionString = ""
        priceString = ""
        currencyString = ""
        descriptionString = descriptionString + Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i])[0].productName + "\n"
        priceString = priceString + Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i])[Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i]).length-1].value
        currencyString = "CHF" + "\n"
        priceString = priceString + "\n"
        for (let j = 0; j < Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i]).length-1; j++) {
            descriptionString = descriptionString + "  - " + Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i])[j].placeholder + ": " +
            Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i])[j].value + "\n"
            currencyString = currencyString + "\n"
            priceString = priceString + "\n"
        }
        productStringsArray.push(descriptionString)

    }

     const rows = productStringsArray.map( item => 
         <View style={styles.row} key={unique_key()} wrap={false}>
             <Text style={styles.description}>{item}</Text>
             <Text style={styles.currency}>{currencyString}</Text>
             <Text style={styles.amount}>{priceString}</Text>
         </View>
        
     )
    
    return (
        <Fragment>{rows}</Fragment>
    )
};
  
export default PDFTableItem