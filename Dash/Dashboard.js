

import React from "react";
import { View ,Button, StyleSheet } from 'react-native';
 const Dashboard =({navigation})=>{
  return(
    <View style={StyleSheet.container}>
      <Button title="Receive Payment" onPress={() => navigation.navigate('ReceivePayment')} />
      <Button title="Add Expense" onPress={() => navigation.navigate('AddExpense')} />
      <Button title="New Estimate" onPress={() => navigation.navigate('NewEstimate')} />
      <Button title="New Appointment" onPress={() => navigation.navigate('NewAppointment')} />
      <Button title="Counter Sale" onPress={() => navigation.navigate('CounterSale')} />
      <Button title="Quick Invoice" onPress={() => navigation.navigate('QuickInvoice')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default Dashboard;

