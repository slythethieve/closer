import logo from '../../../euroLogo.png'
import React from 'react';
import {View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    logo:  {
        width: 75,
        height: 75,       
    },
});
 
const Logo = () => (
    <View >
        <Image style={styles.logo} src = {logo}/>
    </View>
);
export default Logo