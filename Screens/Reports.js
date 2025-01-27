
// import {View,Text,StyleSheet} from "react-native";
// const Reports =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Reports</Text>
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
// export default Reports;


import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Reports = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Reports</Text>

      {/* Placeholder for Report Data */}
      <View style={styles.reportItem}>
        <Text style={styles.reportTitle}>Completed Jobs</Text>
        <Text style={styles.reportDetails}>Total: 25 jobs completed</Text>
      </View>

      <View style={styles.reportItem}>
        <Text style={styles.reportTitle}>Pending Jobs</Text>
        <Text style={styles.reportDetails}>Total: 10 jobs pending</Text>
      </View>

      <View style={styles.reportItem}>
        <Text style={styles.reportTitle}>Total Earnings</Text>
        <Text style={styles.reportDetails}>Total: $1500</Text>
      </View>

      {/* You can add more reports like: */}
      {/* - Overdue Jobs */}
      {/* - Customer Feedback */}
      {/* - Workshop Efficiency */}
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
  reportItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  reportDetails: {
    fontSize: 14,
    color: "#555",
  },
});

export default Reports;
