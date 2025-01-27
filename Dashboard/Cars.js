import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

const Cars = ({ navigation }) => {
  // Sample data for cars in the garage
  const [cars, setCars] = useState([
    { id: '1', carName: 'Toyota Corolla', model: '2020', status: 'In Service' },
    { id: '2', carName: 'Honda Civic', model: '2018', status: 'Parked' },
    { id: '3', carName: 'Ford Mustang', model: '2022', status: 'In Service'
     },
     
  ]);

  const handleCarClick = (carId) => {
    // Navigate to a screen to manage the selected car's service or details
    alert(`Manage Cars: ${carId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars in Garage</Text>
      
      {/* Cars List */}
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.carCard} onPress={() => handleCarClick(item.id)}>
            <Text style={styles.carName}>{item.carName} ({item.model})</Text>
            <Text>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      
      {/* Add New Car Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add New Car"
          onPress={() => navigation.navigate('AddCar')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carCard: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Cars;
