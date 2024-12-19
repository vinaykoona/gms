import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddCar = () => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleSubmit = () => {
    alert(`Car Added: ${carName} - ${carModel}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Car</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car Name"
        value={carName}
        onChangeText={setCarName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Car Model"
        value={carModel}
        onChangeText={setCarModel}
      />
      <Button title="Add Car" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default AddCar;
