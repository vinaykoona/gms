import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddExpensive = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expense Page</Text>
      <Text>Here you can view and manage expenses.</Text>
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

export default AddExpensive;
