// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const AddCar = ({ navigation, route }) => {
//   const [carName, setCarName] = useState('');
//   const [carModel, setCarModel] = useState('');

//   const handleSubmit = () => {
//     // Passing carName and carModel to the ManageCars screen
//     navigation.navigate('ManageCars', { carName, carModel });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add New Car</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Car Name"
//         value={carName}
//         onChangeText={setCarName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Car Model"
//         value={carModel}
//         onChangeText={setCarModel}
//       />
//       <Button title="Add Car" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// });

// export default AddCar;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const AddCar = ({ navigation }) => {
//   const [carName, setCarName] = useState('');
//   const [carModel, setCarModel] = useState('');

//   const handleSubmit = () => {
//     // Passing carName and carModel to the ManageCars screen
//     navigation.navigate('ManageCars', { carName, carModel });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add New Car</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Car Name"
//         value={carName}
//         onChangeText={setCarName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Car Model"
//         value={carModel}
//         onChangeText={setCarModel}
//       />
//       <Button title="Add Car" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// });

// export default AddCar;

// AddCar.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddCar = ({ navigation }) => {
  const [carDetails, setCarDetails] = useState({
    model: '',
    year: '',
    licensePlate: ''
  });

  const [serviceCount, setServiceCount] = useState(0);

  const handleInputChange = (field, value) => {
    setCarDetails({ ...carDetails, [field]: value });
  };

  const handleAddCar = () => {
    console.log('Car Added:', carDetails);
    // Increment the service count
    const newCount = serviceCount + 1;
    setServiceCount(newCount);
    
    // Pass the updated service count back to the Homepage screen
    navigation.setParams({ serviceCount: newCount });
    
    // Optionally, navigate back to the Homepage after adding the car
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Car</Text>
      <TextInput
        placeholder="Car Model"
        value={carDetails.model}
        onChangeText={(text) => handleInputChange('model', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Car Year"
        value={carDetails.year}
        onChangeText={(text) => handleInputChange('year', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="License Plate"
        value={carDetails.licensePlate}
        onChangeText={(text) => handleInputChange('licensePlate', text)}
        style={styles.input}
      />
      <Button title="Add Car" onPress={handleAddCar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8
  }
});

export default AddCar;

