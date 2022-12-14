import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'column',
        marginTop: 12,
        fontSize:11

        
        
    },
    reportTitle:{
        color: 'black',
        letterSpacing: 1,
        fontSize: 11,
        textAlign: 'left',
        textTransform: 'uppercase',
        
    }
});

const CompanyDetailsRow = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>Euro Möbel New Line GmbH</Text>
        <Text style={styles.reportTitle}>De Sabato Cosiano</Text>
        <Text style={styles.reportTitle}>Letziweg 9</Text>
        <Text style={styles.reportTitle}>4663 Aarburg</Text>
        <Text style={styles.reportTitle}>CHE-114.608.208</Text>
    </View>
);
  
export default CompanyDetailsRow