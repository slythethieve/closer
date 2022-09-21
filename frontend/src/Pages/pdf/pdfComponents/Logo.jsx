import logo from '../../../logo.png'

import React from 'react';
import {Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    logo:  {
        width: 90,
        height: 90,
        
              
    },
  });

  // For now I'm just going to hardcode some of it.
  // Later I will make these contact fields dynamic
  // But for that I need to adjust my db model again 
  // slightly. 
  const Logo = () => (
    <View >
        <Image style={styles.logo} src = {logo}/>
    </View>
  );
  
  export default Logo