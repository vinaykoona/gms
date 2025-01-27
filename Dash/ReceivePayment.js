// Dash/ReceivePayment.js (example screen)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReceivePayment = () => {
  return (
    <View style={styles.container}>
      <Text>Receive Payment Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default ReceivePayment;
