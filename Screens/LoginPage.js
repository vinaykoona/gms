
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert , TouchableOpacity} from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleLogin = () => {
//     if (!validateEmail(email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       Alert.alert(
//         'Invalid Password',
//         'Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
//       );
//       return;
//     }

//     // Implement login logic here (e.g., API call)
//     console.log('Logging in with:', email, password);
//     navigation.navigate('Home'); // Navigate to Home on successful login
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
  
//       />
//        <View style={styles.buttonContainer}>
//         <Button title="Login" onPress={handleLogin} />
//       </View>

//       <View style={styles.registerContainer}>
//         <Text
//           style={styles.registerText}
//           onPress={() => navigation.navigate('Register')}
//         >
//           Don't have an account? Register
//         </Text>
//       </View>
//       <View style={styles.forgotPasswordContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        
//         </TouchableOpacity>
//       </View>

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
//     fontSize: 30,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
//   buttonContainer: {
//     marginBottom: 20  // Adds spacing between buttons

//   },
//   registerContainer: {
//     marginTop: 20,  // Adds some space above the register text
//   },
//   registerText: {
//     color: 'blue',  // Change color to blue for the underline effect
//     textDecorationLine: 'underline',  // Underline the text
//     textAlign: 'center',  // Center align the text
//     fontSize: 16,  // Optional: Adjust font size for better readability
//   },

//   forgotPasswordContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   forgotPasswordText: {
//     color: 'blue',
//   textDecorationLine: 'underline',
//     fontSize: 16,
//   },
  
 
// });

// export default LoginScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleLogin = async () => {
//     if (!validateEmail(email)) {
//       Alert.alert('Invalid Email', 'Please enter a valid email address.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       Alert.alert(
//         'Invalid Password',
//         'Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
//       );
//       return;
//     }

//     // Send a POST request to your API for login
//     try {
//       const response = await fetch('http://localhost:9191/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       // Check if the response is OK (200 status code)
//       if (response.ok) {
//         const data = await response.json();

//         // Handle the response data (e.g., token, user info)
//         console.log('Login success:', data);

//         // Navigate to the Home screen on successful login
//         navigation.navigate('Home');
//       } else {
//         const errorData = await response.json();
//         Alert.alert('Login Failed', errorData.message || 'An error occurred during login');
//       }
//     } catch (error) {
//       // Handle network or server errors
//       console.error('Login error:', error);
//       Alert.alert('Error', 'Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="Login" onPress={handleLogin} />
//       </View>

//       <View style={styles.registerContainer}>
//         <Text
//           style={styles.registerText}
//           onPress={() => navigation.navigate('Register')}
//         >
//           Don't have an account? Register
//         </Text>
//       </View>
//       <View style={styles.forgotPasswordContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>
//       </View>
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
//     fontSize: 30,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
//   buttonContainer: {
//     marginBottom: 20,
//   },
//   registerContainer: {
//     marginTop: 20,
//   },
//   registerText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   forgotPasswordContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   forgotPasswordText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//     fontSize: 16,
//   },
// });

// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios'; // Import axios

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:9191/login', {
        email,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'You have successfully logged in.');
        // Navigate to the home screen or another screen upon success
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleLogin} />
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
});

export default LoginPage;
