// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const HomePage = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Welcome to the Home Page!</Text>
//       {/* <Button title="Go to Login" onPress={() => navigation.navigate('Login')} /> */}
//       <Button tittle="Go to the dashbaord " onPress={() =>navigation.navigate('Dashboard')} />
//     </View>
//   );
// };

// export default HomePage;
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to the Home Page!</Text>
      {/* Button to navigate to the Dashboard */}
      <Button title="Go to the Dashboard" onPress={() => navigation.navigate('AdminDashboard')} />
    </View>
  );
};

export default HomePage;

