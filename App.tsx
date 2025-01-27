// **
//   *Sample React Native App
//   *https://github.com/facebook/react-native

//  @format
 

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import LoginPage from './LoginScreen';  // Import the LoginPage
// // import SignUpPage from './Register';
// // import HomePage from './HomeScreen';    // Import the HomePage
// import LoginPage from './Screens/LoginPage';
// import HomePage from './Screens/HomePage';
// import Register from './Screens/Register';
// import ForgotPassword from './Screens/ForgotPassword';
// import Dashboard from './Screens/Dashboard';
// // import ResetPassword from './Screens/ResetPassword';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Home" component={HomePage}/>
//         <Stack.Screen name="ForgotScreen" component={ForgotPassword}/>
//         <Stack.Screen name="Dashboard"  component={Dashboard} />
//         {/* <Stack.Screen name="ResetPassword" component={ResetPassword}/> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import your screens
// import LoginPage from './Screens/LoginPage';
// import HomePage from './Screens/HomePage';
// import Register from './Screens/Register';
// import ReceivePayment from './Screens/ReceivePayment';
// import ForgotPassword from './Screens/ForgotPassword';

// import Dashboard from './Screens/Dashboard';
// import AddExpense from './Screens/AddExpense';
// import NewEstimate from './Screens/NewEstimate';
// import NewAppointment from './Screens/NewAppoinment';
// import CounterSale from './Screens/CounterSale';
// import QuickInvoice from './Screens/QuickInvoice';

// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="Register" component={Register} />
//         <Stack.Screen name="Home" component={HomePage} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
       
//         <Stack.Screen name="Dashboard" component={Dashboard}/>
//         <Stack.Screen name="ReceivePayment" component={ReceivePayment}/>
//         <Stack.Screen name="AddExpense" component={AddExpense} />
//         <Stack.Screen name="NewEstimate" component={NewEstimate} />
//         <Stack.Screen name="NewAppointment" component={NewAppointment} />
//         <Stack.Screen name="CounterSale" component={CounterSale} />
//         <Stack.Screen name="QuickInvoice" component={QuickInvoice} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// // import Dashboard from "./Dashboard/Dashboard";
// const App=()=>{
//   return(
//     <div>
//       <Dashboard></Dashboard>
//     </div>
//   )
// }
// export default App;

// 

// DASHBOARD 111 first we have developed it 
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Homepage from './Dashboard/Homepage';
// import AddCar from './Dashboard/AddCar';
// import ManageServices from './Dashboard/ManageService';
// import ManageCars from './Dashboard/ManageCars';
// import Cars from './Dashboard/Cars';
// import CustomerFeedback from  './Dashboard/CustomerFeedback';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomePage">
//         <Stack.Screen name="HomePage" component={Homepage} />
//         <Stack.Screen name="AddCar" component={AddCar} />
//         <Stack.Screen name="ManageServices" component={ManageServices} />
//         <Stack.Screen name="Cars" component={Cars} />
//         <Stack.Screen name="ManageCars" component={ManageCars}/>
//         <Stack.Screen name="CustomerFeedback" component={CustomerFeedback} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
   
// App.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AddCar from './Dashboard/AddCar'; // Import the AddCar screen
// import ManageCars from './Dashboard/ManageCars';// Import the ManageCars screen

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="AddCar">
//         <Stack.Screen name="AddCar" component={AddCar} />
//         <Stack.Screen name="ManageCars" component={ManageCars} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// DASHBOARD 222 for app navigator 
// App.js
// import React from 'react';
// import AppNavigator from './AppNavigator';  // Import your navigator

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;
//  dashboard for all the dah floder 
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Dashboard from './Dash/Dashboard';
// import Appointment from './Dash/Appointment';
// import Estimate from './Dash/Estimate';
// import  ReceivePayment from './Dash/ReceivePayment';
// import Workorder from './Dash/Workorder';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Dashboard">

//       <Stack.Screen name="Dashboard" component={Dashboard} />
//         <Stack.Screen name="Estimate" component={Estimate} />
//         <Stack.Screen name="Appointment" component={Appointment} />
//         <Stack.Screen name="RecivePayment" component={ReceivePayment} />
//         <Stack.Screen name="Workorder" component={Workorder} />
//      </Stack.Navigator>
//    </NavigationContainer>
//   );
// };

// export default App;


//ADMINDASHBOARD FOR ICONS 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';
import Register from './Screens/Register';
import ForgotPassword from './Screens/ForgotPassword';
import Inventory from './Screens/Inventory';
import Users from './Screens/Users';
import Comp from './Screens/Comp';
import Services from './Screens/Service';
import Sales from './Screens/Sales';
import JobCard from './Screens/JobCard';
import Quotations from './Screens/Quotations';
import Invoices from './Screens/Invoices';
import Vehicles from './Screens/Vehicles';
import Remainders from './Screens/Remainders';
import Reports from './Screens/Reports';
import Accounts from './Screens/Accounts';
import AdminDashboard from './Screens/AdminDashbaord'; // Corrected file name typo
import AddExpensive from './Screens/AddExpensive';
import AddInvoice from './Screens/AddInvoice';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Comp" component={Comp} />
        <Stack.Screen name="Accounts" component={Accounts} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="JobCard" component={JobCard} />
        <Stack.Screen name="Invoices" component={Invoices} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Remainders" component={Remainders} />
        <Stack.Screen name="Vehicles" component={Vehicles} />
        <Stack.Screen name="Quotations" component={Quotations} />
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AddExpensive" component={AddExpensive} />
        <Stack.Screen name="AddInvoice" component={AddInvoice}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
