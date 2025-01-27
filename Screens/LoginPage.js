
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert , TouchableOpacity} from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return;
    }

    // Implement login logic here (e.g., API call)
    console.log('Logging in with:', email, password);
    // navigation.navigate('AdminDashboard');
    navigation.navigate('HomePage');
    // Navigate to Home on successful login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
  
      />
       <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <View style={styles.registerContainer}>
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate('Register')}
        >
          Don't have an account? Register
        </Text>
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
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
  },
  buttonContainer: {
    marginBottom: 20  // Adds spacing between buttons

  },
  registerContainer: {
    marginTop: 20,  // Adds some space above the register text
  },
  registerText: {
    color: 'blue',  // Change color to blue for the underline effect
    textDecorationLine: 'underline',  // Underline the text
    textAlign: 'center',  // Center align the text
    fontSize: 16,  // Optional: Adjust font size for better readability
  },

  forgotPasswordContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'blue',
  textDecorationLine: 'underline',
    fontSize: 16,
  },
  
 
});

export default LoginPage;
