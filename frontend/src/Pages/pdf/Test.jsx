import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import Pdf from '../pdf/Pdf'

// Create styles
const styles = StyleSheet.create({

  page: { backgroundColor: 'tomato'},
  section: { color: 'white', textAlign: 'center', margin: 20 }
});

// Create Document Component
const Test = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
)

export default Test