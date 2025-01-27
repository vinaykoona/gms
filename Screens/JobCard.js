// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const JobCard =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>JobCard</Text>
//         </View>
//     )
// }
// const styles=StyleSheet.create({
//     conatiner:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })
// export default JobCard;

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const JobCard = () => {
  const [customerName, setCustomerName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [jobStatus, setJobStatus] = useState('Pending');
  const [estimatedCost, setEstimatedCost] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!customerName || !vehicleModel || !licensePlate || !serviceDescription || !estimatedCost) {
      Alert.alert('Error', 'Please fill out all the fields.');
      return;
    }

    // Show confirmation message
    Alert.alert('Job Card Created', 'The job card has been successfully created!');

    // Clear the form after submission
    setCustomerName('');
    setVehicleModel('');
    setLicensePlate('');
    setServiceDescription('');
    setEstimatedCost('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create Job Card</Text>

      {/* Customer Name Input */}
      <View style={styles.inputContainer}>
        <Text>Customer Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter customer name"
          value={customerName}
          onChangeText={setCustomerName}
        />
      </View>

      {/* Vehicle Model Input */}
      <View style={styles.inputContainer}>
        <Text>Vehicle Model:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter vehicle model"
          value={vehicleModel}
          onChangeText={setVehicleModel}
        />
      </View>

      {/* License Plate Input */}
      <View style={styles.inputContainer}>
        <Text>License Plate Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter license plate number"
          value={licensePlate}
          onChangeText={setLicensePlate}
        />
      </View>

      {/* Service Description Input */}
      <View style={styles.inputContainer}>
        <Text>Service Description:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter service description"
          value={serviceDescription}
          onChangeText={setServiceDescription}
          multiline
        />
      </View>

      {/* Job Status Picker */}
      <View style={styles.inputContainer}>
        <Text>Job Status:</Text>
        <Picker
          selectedValue={jobStatus}
          style={styles.picker}
          onValueChange={(itemValue) => setJobStatus(itemValue)}
        >
          <Picker.Item label="Pending" value="Pending" />
          <Picker.Item label="In Progress" value="In Progress" />
          <Picker.Item label="Completed" value="Completed" />
        </Picker>
      </View>

      {/* Estimated Cost Input */}
      <View style={styles.inputContainer}>
        <Text>Estimated Cost ($):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter estimated cost"
          keyboardType="numeric"
          value={estimatedCost}
          onChangeText={setEstimatedCost}
        />
      </View>

      {/* Submit Button */}
      <Button title="Create Job Card" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
  textArea: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    height: 100,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default JobCard;
