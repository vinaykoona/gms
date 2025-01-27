// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Sales=()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Sales</Text>
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
// export default Sales;

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

const Sales = () => {
  const [salesData, setSalesData] = useState([
    {
      id: 1,
      item: "Oil Change Service",
      amount: 30.0,
      date: "2025-01-10",
    },
    {
      id: 2,
      item: "Tire Replacement",
      amount: 100.0,
      date: "2025-01-12",
    },
    {
      id: 3,
      item: "Brake Inspection",
      amount: 50.0,
      date: "2025-01-15",
    },
    {
      id: 4,
      item: "Car Wash",
      amount: 15.0,
      date: "2025-01-16",
    },
    {
        id:5,
        item:"Oil change ",
        amount:450,
        date:"2025-01-17",

    },
    {
        id:6,
        item:"seat cover  ",
        amount:250,
        date:"2025-01-17",

    }
    
  ]);

  const totalSales = salesData.reduce((acc, sale) => acc + sale.amount, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sales Overview</Text>

      {/* Sales List */}
      {salesData.map((sale) => (
        <View key={sale.id} style={styles.saleItem}>
          <Text style={styles.saleTitle}>{sale.item}</Text>
          <Text style={styles.saleDetails}>Amount: ${sale.amount}</Text>
          <Text style={styles.saleDetails}>Date: {sale.date}</Text>
        </View>
      ))}

      {/* Total Sales */}
      <View style={styles.totalSalesContainer}>
        <Text style={styles.totalSalesText}>Total Sales: ${totalSales.toFixed(2)}</Text>
      </View>

      {/* Button to add new sale (for future implementation) */}
      <Button title="Add New Sale" onPress={() => alert("Add sale functionality")}/>
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
  saleItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  saleTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  saleDetails: {
    fontSize: 14,
    color: "#555",
  },
  totalSalesContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  totalSalesText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Sales;
