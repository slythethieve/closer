import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import CompanyDetailsComp from './CompanyDetailsComp';
import Logo from './Logo';
import { style } from '@mui/system';

const styles = StyleSheet.create({
   
    
    
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    }
  });

  // For now I'm just going to hardcode some of it.
  // Later I will make these contact fields dynamic
  // But for that I need to adjust my db model again 
  // slightly. 
  const CompanyDetailsColumn = () => (
    <View style = {styles.container}>
        <CompanyDetailsComp />
        <Logo />

    </View>
    );
  
  export default CompanyDetailsColumn