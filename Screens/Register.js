// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const Register= () => {
//   // State hooks for form data
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  
//   // State for validation errors
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form submission
//   const handleSignUp = () => {
//     // Basic validation checks
//     if (!name || !email || !password || !confirmPassword) {
//       setErrorMessage('All fields are required');
//       return;
//     }
    
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     // Clear error message
//     setErrorMessage('')
//     // Handle actual sign-up logic here (e.g., API call)
//     Alert.alert('Success', `Welcome, ${name}!`);

//     // You can use this to send the data to ur backend
//     // signUp({ name, email, password });
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Register</Text>
      
//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />
      
//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />
      
//       {/* Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
      
//       {/* Confirm Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm your password"
//         value={confirmPassword}
//         onChangeText={(text) => setConfirmPassword(text)}
//         secureTextEntry
//       />

//       {/* Error Message */}
//       {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Styles for the sign-up page
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginVertical: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 12,
//     width: '100%',
//     marginTop: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//     fontSize: 14,
//   },
// });

// export default Register;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import axios

const Register = () => {
  // State hooks for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // State for validation errors
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSignUp = async () => {
    // Basic validation checks
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Clear error message
    setErrorMessage('');
    
    try {
      // Make API request to the backend to register the user
      const response = await axios.post('http://localhost:9191/registration/register', {
        name,
        email,
        password,
      });

      // Handle success
      if (response.status === 200) {
        Alert.alert('Success', `Welcome, ${name}! You have successfully registered.`);
        // Navigate to the login screen (or home screen)
      }

    } catch (error) {
      // Handle error
      console.error('Error during registration:', error);
      setErrorMessage('Registration failed. Please try again.');
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      
      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      
      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      {/* Error Message */}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
});

export default Register;
