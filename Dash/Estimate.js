import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Estimate = () => {
  return (
    <View style={styles.container}>
      <Text>Estimate Details</Text>
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

export default Estimate;
