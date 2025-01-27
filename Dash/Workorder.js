import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const WorkorderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Estimate" onPress={() => navigation.navigate('Estimate')} />
      <Button title="Approved" onPress={() => navigation.navigate('Approved')} />
      <Button title="In Progress" onPress={() => navigation.navigate('InProgress')} />
      <Button title="Completed" onPress={() => navigation.navigate('Completed')} />
      <Button title="Billing" onPress={() => navigation.navigate('Billing')} />
      <Button title="Delivered" onPress={() => navigation.navigate('Delivered')} />
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

export default WorkorderScreen;
