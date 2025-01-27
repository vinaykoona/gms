import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Schdule = () => {
  return (
    <View style={styles.container}>
      <Text>Scheduled Appointments</Text>
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

export default Schdule;
