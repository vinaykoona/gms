// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Accounts =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Accounts </Text>
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
// export default Accounts;



// import React, { useState } from "react";
// import { View, Text, StyleSheet, Button, FlatList, Alert, TextInput } from "react-native";

// // Example data for the accounts
// const initialInvoices = [
//   { id: '1', customer: 'John Doe', amount: 120, status: 'Paid', date: '2025-01-10' },
//   { id: '2', customer: 'Jane Smith', amount: 200, status: 'Pending', date: '2025-01-15' },
//   { id: '3', customer: 'Alice Brown', amount: 150, status: 'Paid', date: '2025-01-12' },
// ];

// const Accounts = () => {
//   const [invoices, setInvoices] = useState(initialInvoices);
//   const [expense, setExpense] = useState(0);
//   const [newInvoice, setNewInvoice] = useState({ customer: '', amount: '', status: 'Pending' });

//   // Total revenue calculation
//   const totalRevenue = invoices.reduce((total, invoice) => total + invoice.amount, 0);
//   const totalPaid = invoices.filter(invoice => invoice.status === 'Paid').reduce((total, invoice) => total + invoice.amount, 0);
//   const totalPending = invoices.filter(invoice => invoice.status === 'Pending').reduce((total, invoice) => total + invoice.amount, 0);

//   // Function to handle adding a new invoice
//   const handleAddInvoice = () => {
//     if (!newInvoice.customer || !newInvoice.amount) {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }
//     const newInvoiceData = { 
//       id: (invoices.length + 1).toString(), 
//       customer: newInvoice.customer, 
//       amount: parseFloat(newInvoice.amount), 
//       status: newInvoice.status, 
//       date: new Date().toISOString().split('T')[0] 
//     };
//     setInvoices([...invoices, newInvoiceData]);
//     setNewInvoice({ customer: '', amount: '', status: 'Pending' });  // Reset form
//     Alert.alert("Success", "Invoice added successfully!");
//   };

//   // Function to handle adding an expense
//   const handleAddExpense = () => {
//     Alert.prompt(
//       'Add Expense',
//       'Enter the expense amount:',
//       [
//         { text: 'Cancel' },
//         { text: 'OK', onPress: (expenseAmount) => setExpense(parseFloat(expenseAmount) || 0) }
//       ],
//       'plain-text'
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Garage Accounts</Text>

//       {/* Revenue Summary */}
//       <View style={styles.summary}>
//         <Text>Total Revenue: ${totalRevenue}</Text>
//         <Text>Paid: ${totalPaid}</Text>
//         <Text>Pending: ${totalPending}</Text>
//         <Text>Expenses: ${expense}</Text>
//       </View>

//       {/* Invoice List */}
//       <Text style={styles.subHeader}>Invoices</Text>
//       <FlatList
//         data={invoices}
//         renderItem={({ item }) => (
//           <View style={styles.invoiceItem}>
//             <Text>Customer: {item.customer}</Text>
//             <Text>Amount: ${item.amount}</Text>
//             <Text>Status: {item.status}</Text>
//             <Text>Date: {item.date}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />

//       {/* Buttons to Add Invoice and Expense */}
//       <View style={styles.buttonContainer}>
//         <Button title="Add Invoice" onPress={() => {
//           Alert.prompt(
//             'Add Invoice',
//             'Enter customer name and amount:',
//             [
//               { text: 'Cancel' },
//               { text: 'OK', onPress: (customerAmount) => {
//                 const [customer, amount] = customerAmount.split(',');
//                 setNewInvoice({ ...newInvoice, customer, amount });
//                 handleAddInvoice();
//               }}
//             ],
//             'plain-text'
//           );
//         }} />

//         <Button title="Add Expense" onPress={handleAddExpense} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   subHeader: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginVertical: 10,
//   },
//   summary: {
//     marginBottom: 20,
//   },
//   invoiceItem: {
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   }
// });

// export default Accounts;
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Alert, TextInput } from "react-native";

const initialInvoices = [
  { id: '1', customer: 'John Doe', amount: 120, status: 'Paid', date: '2025-01-10' },
  { id: '2', customer: 'Jane Smith', amount: 200, status: 'Pending', date: '2025-01-15' },
  { id: '3', customer: 'Alice Brown', amount: 150, status: 'Paid', date: '2025-01-12' },
];

const Accounts = ({ navigation }) => {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [expense, setExpense] = useState(0);
  const [newInvoice, setNewInvoice] = useState({ customer: '', amount: '', status: 'Pending' });

  const totalRevenue = invoices.reduce((total, invoice) => total + invoice.amount, 0);
  const totalPaid = invoices.filter(invoice => invoice.status === 'Paid').reduce((total, invoice) => total + invoice.amount, 0);
  const totalPending = invoices.filter(invoice => invoice.status === 'Pending').reduce((total, invoice) => total + invoice.amount, 0);

  const handleAddInvoice = () => {
    if (!newInvoice.customer || !newInvoice.amount) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    const newInvoiceData = { 
      id: (invoices.length + 1).toString(), 
      customer: newInvoice.customer, 
      amount: parseFloat(newInvoice.amount), 
      status: newInvoice.status, 
      date: new Date().toISOString().split('T')[0] 
    };
    setInvoices([...invoices, newInvoiceData]);
    setNewInvoice({ customer: '', amount: '', status: 'Pending' });
    Alert.alert("Success", "Invoice added successfully!");
    navigation.navigate('Addinvoice'); // Navigate to Invoice Page after adding the invoice
  };

  const handleAddExpense = () => {
    Alert.prompt(
      'Add Expense',
      'Enter the expense amount:',
      [
        { text: 'Cancel' },
        { text: 'OK', onPress: (expenseAmount) => {
          setExpense(parseFloat(expenseAmount) || 0);
          navigation.navigate('AddExpensive'); // Navigate to Expense Page after adding the expense
        }}
      ],
      'plain-text'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Garage Accounts</Text>

      {/* Revenue Summary */}
      <View style={styles.summary}>
        <Text>Total Revenue: ${totalRevenue}</Text>
        <Text>Paid: ${totalPaid}</Text>
        <Text>Pending: ${totalPending}</Text>
        <Text>Expenses: ${expense}</Text>
      </View>

      {/* Invoice List */}
      <Text style={styles.subHeader}>Invoices</Text>
      <FlatList
        data={invoices}
        renderItem={({ item }) => (
          <View style={styles.invoiceItem}>
            <Text>Customer: {item.customer}</Text>
            <Text>Amount: ${item.amount}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Buttons to Add Invoice and Expense */}
      <View style={styles.buttonContainer}>
        <Button title="AddInvoice" onPress={() => handleAddInvoice()} />
        <Button title="AddExpensive" onPress={handleAddExpense} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  summary: {
    marginBottom: 20,
  },
  invoiceItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    marginTop: 20,
  }
});

export default Accounts;
