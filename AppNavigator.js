// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import DashBoard from '.Dash/DashBoard';
// import Workorder from './Dash/Workorder';
// import Appoinment from './Dash/Appointment';
// import Estimate from './Dash/Estimate';
// import Schdule from './Dash/Schdule';



// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Dashboard">
//         <Stack.Screen name="Dashboard" component={DashBoard} />
//         <Stack.Screen name="WorkOrder" component={Workorder} />
//         <Stack.Screen name="Appointments" component={Appoinment} />
//         <Stack.Screen name="Estimate" component={Estimate} />
//         <Stack.Screen name="Scheduled" component={Schdule} />
      
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import Dashboard from './Dash/Dashboard';      // Make sure this path is correct
import Workorder from './Dash/Workorder';      // Make sure this path is correct
import Appointment from './Dash/Appointment';  // Make sure this path is correct
import Estimate from './Dash/Estimate';        // Make sure this path is correct
import Schdule from './Dash/Schdule';        // Make sure this path is correct

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="WorkOrder" component={Workorder} />
        <Stack.Screen name="Appointments" component={Appointment} />
        <Stack.Screen name="Estimate" component={Estimate} />
        <Stack.Screen name="Scheduled" component={Schdule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
