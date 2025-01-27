// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Services =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Services</Text>
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
// export default Services;

import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Services = () => {
  const servicesData = [
    { id: "1", name: "Oil Change", price: "$50" },
    { id: "2", name: "Brake Repair", price: "$120" },
    { id: "3", name: "Tire Replacement", price: "$80" },
    { id: "4", name: "Car Wash", price: "$30" },
    { id: "5", name: "Car Wash", price: "$880" },
  ];

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Services</Text>
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
  itemName: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: 16,
    color: "#777",
    marginTop: 4,
  },
});

export default Services;
