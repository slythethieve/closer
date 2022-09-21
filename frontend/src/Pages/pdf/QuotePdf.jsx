import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({

  page: { backgroundColor: 'tomato'},
  section: { color: 'white', textAlign: 'center', margin: 20 }
});

// Create Document Component
export const QuotePdf = () => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>

)

export default QuotePdf