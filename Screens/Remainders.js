// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Remainders =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Remainders</Text>
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
// export default Remainders;

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Remainders = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Remainders</Text>

      {/* Placeholder for Reminders Data */}
      <View style={styles.reminderItem}>
        <Text style={styles.reminderTitle}>Oil Change</Text>
        <Text style={styles.reminderDetails}>Reminder: Change oil in vehicle ABC123 by next week.</Text>
      </View>

      <View style={styles.reminderItem}>
        <Text style={styles.reminderTitle}>Tire Rotation</Text>
        <Text style={styles.reminderDetails}>Reminder: Rotate tires for vehicle XYZ789 in 3 days.</Text>
      </View>

      <View style={styles.reminderItem}>
        <Text style={styles.reminderTitle}>Brake Inspection</Text>
        <Text style={styles.reminderDetails}>Reminder: Inspect brakes for vehicle DEF456 in 2 days.</Text>
      </View>

      {/* You can add more reminders like: */}
      {/* - Vehicle Maintenance */}
      {/* - Upcoming Appointments */}
      {/* - Expiring Parts */}
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
  reminderItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  reminderDetails: {
    fontSize: 14,
    color: "#555",
  },
});

export default Remainders;
