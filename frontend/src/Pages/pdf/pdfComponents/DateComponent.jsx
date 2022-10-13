import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
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
  const DateComponent = () => {
    const date = new Date()
    const localDate = date.toLocaleDateString()
    return(
    <View style = {styles.container}>
        <Text style={styles.text}>Aarburg, {localDate}</Text>
        
    </View>
    )
  }
  
  export default DateComponent