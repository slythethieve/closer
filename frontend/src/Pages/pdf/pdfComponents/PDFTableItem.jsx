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

    // So let's think this through. The first thing I need here is take the product description outside of the quote object
    // One immediate problem is that I do not have the name of the products anymore. Another problem is how to put everything in
    // one field (I might already have a vague idea for this one)

    // const renderProducts = () => {

    //     let finalValues = []
    //     if (quote[0].products.euroMoebelProducts.products) {
    //       let valuesEM = Object.entries(Object.values(quote[0].products.euroMoebelProducts.products)[0])
    //       for(let i = 0; i < valuesEM.length; i++) {
    //         finalValues.push(
    //           <div key= {unique_key()}>
    //             <span>{valuesEM[i][0]}: </span>
    //             <span>{valuesEM[i][1]}</span>
    //           </div>
    //         )
    //       }
    //     }
    //     if (quote[0].products.goodlineeProducts.products) {
    //       let valuesGood = Object.entries(Object.values(quote[0].products.goodlineeProducts.products)[0])
    //       for(let i = 0; i < valuesGood.length; i++) {
    //         finalValues.push(
    //           <div key= {unique_key()}>
    //             <span>{valuesGood[i][0]}: </span>
    //             <span>{valuesGood[i][1]}</span>
    //           </div>
    //         )
    //       }
    //     }
    //     return finalValues
        
    //   }
    // const rows = quote[0].map( item => 
    //     <View style={styles.row} key={item.sno.toString()} wrap={false}>
    //         <Text style={styles.description}>new{"\n"} testing</Text>
    //         <Text style={styles.currency}>{item.currency}{"\n"}</Text>
    //         <Text style={styles.amount}>{item.rate.toFixed(2)}{"\n"}</Text>
    //     </View>
        
        
    // )
    console.log(quote[0])
    return (
        <Fragment>{}</Fragment>
    )
};
  
export default PDFTableItem