import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Appointment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Scheduled" onPress={() => navigation.navigate('Scheduled')} />
      <Button title="Reminder" onPress={() => navigation.navigate('Reminder')} />
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

export default Appointment;
