import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Resetpassword = ({ route, navigation }) => {
  const { token } = route.params;  // The token passed via deep link or navigation
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordReset = async () => {
    if (!newPassword) {
      Alert.alert('Error', 'Please enter a new password.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:9191/registration/reset-password/${token}`, { newPassword });

      if (response.status === 200) {
        Alert.alert('Password Reset', 'Your password has been reset successfully.');
        navigation.navigate('Login'); // Navigate to login after success
      } else {
        Alert.alert('Error', response.data.message || 'An error occurred while resetting the password.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handlePasswordReset} />
      </View>
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
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default Resetpassword;
