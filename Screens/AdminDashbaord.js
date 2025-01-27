// import React from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet ,Button} from 'react-native';
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import Icon from 'react-native-vector-icons/Ionicons';  // Use this for icons

// const AdminDashboard = ({navigation}) => {
//   const menuItems = [
//     { name: 'Dashboard', icon: 'home' },
//     { name: 'Inventory', icon: 'cube' },
//     { name: 'Users', icon: 'people' },
//     { name: 'Vehicles', icon: 'car' },
//     { name: 'Services', icon: 'construct' },
//     { name: 'Quotation', icon: 'document-text' },
//     { name: 'Invoices', icon: 'receipt' },
//     { name: 'Job Card', icon: 'clipboard' },
//     { name: 'Accounts & Tax', icon: 'calculator' },
//     { name: 'Sales', icon: 'stats-chart' },
//     { name: 'Compliances', icon: 'checkmark-circle' },
//     { name: 'Reports', icon: 'bar-chart' },
//     { name: 'Remainders', icon: 'calendar' },
//   ];

//   return (
//     <View style={styles.container}>
//               <Button title="Inventory" onPress={() => navigation.navigate('Inventory')} />
//               <Button title="Users" onPress={() => navigation.navigate('Users')} />
//               <Button title="Vehicles" onPress={() => navigation.navigate('Vehicles')} />
//               <Button title="Services" onPress={() => navigation.navigate('Services')} />
//               <Button title="Quotations" onPress={() => navigation.navigate('Quotations')} />
//               <Button title="Job Card" onPress={() => navigation.navigate('JobCard')} />
        
//       <ScrollView>
//         <Text style={styles.header}>GARAGE MANAGEMENT SYSTEM</Text>
//         {menuItems.map((item, index) => (
//           <TouchableOpacity key={index} style={styles.menuItem}>
//             <Icon name={item.icon} size={24} color="#fff" />
//             <Text style={styles.menuText}>{item.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#0000ff',
//     backgroundColor:"white",
//     padding: 10,
//   },
//   header: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#fff',
//   },
//   menuText: {
//     color: '#fff',
//     fontSize: 16,
//     marginLeft: 15,
//   },
// });

// export default AdminDashboard;

// import React from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Ionicons for icons

// const AdminDashboard = ({ navigation }) => {
//   const menuItems = [
//     // { name: 'Dashboard', icon: 'home-outline', route: 'Dashboard' },
//     { name: 'Inventory', icon: 'cube-outline', route: 'Inventory' },
//     { name: 'Users', icon: 'people-outline', route: 'Users' },
//     { name: 'Vehicles', icon: 'car-outline', route: 'Vehicles' },
//     { name: 'Services', icon: 'construct-outline', route: 'Services' },
//     { name: 'Quotations', icon: 'document-text-outline', route: 'Quotations' },
//     { name: 'Invoices', icon: 'receipt-outline', route: 'Invoices' },
//     { name: 'Job Card', icon: 'clipboard-outline', route: 'JobCard' },
//     { name: 'Accounts', icon: 'calculator-outline', route: 'Accounts' },
//     { name: 'Sales', icon: 'stats-chart-outline', route: 'Sales' },
//     { name: 'Comp', icon: 'checkmark-circle-outline', route: 'Comp' },
//     { name: 'Reports', icon: 'bar-chart-outline', route: 'Reports' },
//     { name: 'Remainders', icon: 'calendar-outline', route: 'Remainders' },
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text style={styles.header}>GARAGE MANAGEMENT SYSTEM</Text>
//         {menuItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.menuItem}
//             onPress={() => navigation.navigate(item.route)} // Navigate to the specified route
//           >
//             <Icon name={item.icon} size={24} color="#000" /> {/* Add the icon */}
//             <Text style={styles.menuText}>{item.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'light blue',
//     padding: 10,
//   },
//   header: {
//     color: '#000',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   menuText: {
//     color: '#000',
//     fontSize: 16,
//     marginLeft: 15,
//   },
// });

// export default AdminDashboard;

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const AdminDashboard = ({ navigation }) => {
  const menuItems = [
    { name: 'Inventory', icon: 'cube-outline', route: 'Inventory' },
    { name: 'Users', icon: 'people-outline', route: 'Users' },
    { name: 'Vehicles', icon: 'car-outline', route: 'Vehicles' },
    { name: 'Services', icon: 'construct-outline', route: 'Services' },
    { name: 'Quotations', icon: 'document-text-outline', route: 'Quotations' },
    { name: 'Invoices', icon: 'receipt-outline', route: 'Invoices' },
    { name: 'Job Card', icon: 'clipboard-outline', route: 'JobCard' },
    { name: 'Accounts', icon: 'calculator-outline', route: 'Accounts' },
    { name: 'Sales', icon: 'stats-chart-outline', route: 'Sales' },
    { name: 'Comp', icon: 'checkmark-circle-outline', route: 'Comp' },
    { name: 'Reports', icon: 'bar-chart-outline', route: 'Reports' },
    { name: 'Remainders', icon: 'calendar-outline', route: 'Remainders' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>GARAGE MANAGEMENT SYSTEM</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.route)} // Navigate to the specified route
          >
            <Icon name={item.icon} size={24} color="#000" /> {/* Add the icon */}
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White ', // Corrected color value
    padding: 10,
  },
  header: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 15,
  },
});

export default AdminDashboard;
