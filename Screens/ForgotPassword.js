import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  

  const handlePasswordReset = () => {
    // In a real application, you'll send an email reset request to your backend
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    // Fake password reset logic
    Alert.alert('Password Reset', `A password reset link has been sent to ${email}`);
    navigation.navigate('Login'); // Navigate back to login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to reset your password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.buttonContainer}>
        <Button title="Reset Password" onPress={handlePasswordReset} />
      </View>

      <Text
        style={styles.backToLoginText}
        onPress={() => navigation.navigate('Login')}
      >
        Back to Login
      </Text>
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
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
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
  backToLoginText: {
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default ForgotPassword;
