import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';


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

  const ClientDetailsColumn = ({quote}) => (
    <View style = {styles.container}>
        <Text style={styles.text}>{quote[0].clientInfo.name}</Text>
        <Text style={styles.text}>{quote[0].clientInfo.address}</Text>
        <Text style={styles.text}>{quote[0].clientInfo.city}</Text>
    </View>
    );
  
  export default ClientDetailsColumn