import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddInvoice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invoice Page</Text>
      <Text>Here you can view and manage invoices.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default AddInvoice;
