import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import CompanyDetailsRow from './CompanyDetailsRow';
import Logo from './Logo';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    }
});

const Header = () => (
	<View style = {styles.container}>
		<CompanyDetailsRow />
		<Logo />	
	</View>
);
  
export default Header