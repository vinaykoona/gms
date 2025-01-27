// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Quotations =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Quotations</Text>
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
// export default Quotations;

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from "react-native";

const Quotations = () => {
  const [quotations, setQuotations] = useState([
    {
      id: 1,
      customerName: "Vinay",
      service: "Oil Change",
      estimatedCost: 40.0,
      date: "2025-01-10",
    },
    {
      id: 2,
      customerName: "Vyshnavi",
      service: "Tire Replacement",
      estimatedCost: 120.0,
      date: "2025-01-12",
    },
    {
      id: 3,
      customerName: "Priyaa",
      service: "Brake Inspection",
      estimatedCost: 60.0,
      date: "2025-01-15",
    },
  ]);

  const [newQuotation, setNewQuotation] = useState({
    customerName: "",
    service: "",
    estimatedCost: "",
    date: "",
  });

  const handleAddQuotation = () => {
    if (!newQuotation.customerName || !newQuotation.service || !newQuotation.estimatedCost || !newQuotation.date) {
      alert("Please fill out all fields");
      return;
    }

    const newId = quotations.length + 1;
    setQuotations([...quotations, { id: newId, ...newQuotation }]);
    setNewQuotation({ customerName: "", service: "", estimatedCost: "", date: "" });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Quotations</Text>

      {/* Existing Quotations */}
      {quotations.map((quotation) => (
        <View key={quotation.id} style={styles.quotationItem}>
          <Text style={styles.quotationTitle}>Customer: {quotation.customerName}</Text>
          <Text style={styles.quotationDetails}>Service: {quotation.service}</Text>
          <Text style={styles.quotationDetails}>Estimated Cost: ${quotation.estimatedCost}</Text>
          <Text style={styles.quotationDetails}>Date: {quotation.date}</Text>
        </View>
      ))}

      {/* Add New Quotation Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Create New Quotation</Text>
        <TextInput
          style={styles.input}
          placeholder="Customer Name"
          value={newQuotation.customerName}
          onChangeText={(text) => setNewQuotation({ ...newQuotation, customerName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Service"
          value={newQuotation.service}
          onChangeText={(text) => setNewQuotation({ ...newQuotation, service: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Estimated Cost"
          keyboardType="numeric"
          value={newQuotation.estimatedCost}
          onChangeText={(text) => setNewQuotation({ ...newQuotation, estimatedCost: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={newQuotation.date}
          onChangeText={(text) => setNewQuotation({ ...newQuotation, date: text })}
        />
        <Button title="Add Quotation" onPress={handleAddQuotation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  quotationItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  quotationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quotationDetails: {
    fontSize: 14,
    color: "#555",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  formHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default Quotations;
