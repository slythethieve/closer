import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import CompanyDetailsRow from './CompanyDetailsRow';
import Logo from './Logo';

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
  const Header = () => (
    <View style = {styles.container}>
        <CompanyDetailsRow />
        <Logo />

    </View>
    );
  
  export default Header