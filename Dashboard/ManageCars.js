import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ManageCars = ({ route }) => {
  const [cars, setCars] = useState([]);

  // If new car data is passed via route params, add it to the car list
  useEffect(() => {
    if (route.params?.carName && route.params?.carModel) {
      setCars((prevCars) => [
        ...prevCars,
        { carName: route.params.carName, carModel: route.params.carModel },
      ]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Cars</Text>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Text>{item.carName} - {item.carModel}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 5,
  },
});

export default ManageCars;
