import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import unique_key from '../../../utils/unique_key';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        //textAlign:'left',
        alignItems:'center',
        //height: 63,
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


const PDFTableItem = ({quote}) => {

    // TODO:
    // An easy way to make this better already would be to put all these functions and therefore values in the higher order 
    // components, instead of having duplication scattered on these lower levels.
    //
    const productStringsArray = []

    
    for (let i = 0; i < Object.values(quote[0].products.euroMoebelProducts.products).length; i++) {
        let string = ""
        string = string + Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i])[0].productName + "\n"
        for (let j = 0; j < Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i]).length; j++) {
            string = string + "  - " + Object.values(Object.values(quote[0].products.euroMoebelProducts.products)[i])[j].placeholder + ": " + "\n"
        }
        productStringsArray.push(string)

    }
    console.log(productStringsArray)
     const rows = productStringsArray.map( item => 
         <View style={styles.row} key={unique_key()} wrap={false}>
             <Text style={styles.description}>{item}</Text>
             <Text style={styles.currency}>CHF</Text>
             <Text style={styles.amount}>100</Text>
         </View>
        
     )
    
    return (
        <Fragment>{rows}</Fragment>
    )
};
  
export default PDFTableItem