import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

const ManageServices = ({ navigation }) => {
  // Sample data of active services in the garage
  const [services, setServices] = useState([
    { id: '1', carName: 'Toyota Corolla', serviceType: 'Oil Change', status: 'In Progress' },
    { id: '2', carName: 'Honda Civic', serviceType: 'Tire Change', status: 'Completed' },
    { id: '3', carName: 'Ford Mustang', serviceType: 'Engine Diagnostics', status: 'Pending' },
   
    
  ]);

  const handleServiceClick = (serviceId) => {
    // Handle service details or update
    alert(`Manage Service: ${serviceId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Active Services</Text>
      
      {/* Active Services List */}
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.serviceCard} onPress={() => handleServiceClick(item.id)}>
            <Text style={styles.serviceCarName}>{item.carName}</Text>
            <Text>Service: {item.serviceType}</Text>
            <Text>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      
      {/* Add New Service Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add New Service"
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
  serviceCard: {
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
  serviceCarName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ManageServices;
