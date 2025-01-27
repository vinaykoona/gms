// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Invoices =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Invoices</Text>
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
// export default Invoices;

import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Invoices = () => {
  const invoicesData = [
    { id: "1", number: "INV-001", customer: "Vinay", amount: "$200", status: "Paid" },
    { id: "2", number: "INV-002", customer: "Vyshnavi", amount: "$350", status: "Pending" },
    { id: "3", number: "INV-003", customer: "priyaa", amount: "$120", status: "Overdue" },
    { id: "4", number: "INV-003", customer: "Swamy", amount: "$120", status: "Overdue" },
  ];

  const renderInvoiceItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.invoiceNumber}>Invoice: {item.number}</Text>
      <Text style={styles.invoiceCustomer}>Customer: {item.customer}</Text>
      <Text style={styles.invoiceAmount}>Amount: {item.amount}</Text>
      <Text style={[styles.invoiceStatus, item.status === "Paid" ? styles.paid : styles.unpaid]}>
        Status: {item.status}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invoices</Text>
      <FlatList
        data={invoicesData}
        renderItem={renderInvoiceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  invoiceNumber: {
    fontSize: 18,
    fontWeight: "600",
  },
  invoiceCustomer: {
    fontSize: 16,
    color: "#555",
  },
  invoiceAmount: {
    fontSize: 16,
    marginTop: 4,
  },
  invoiceStatus: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: "bold",
  },
  paid: {
    color: "green",
  },
  unpaid: {
    color: "red",
  },
});

export default Invoices;
