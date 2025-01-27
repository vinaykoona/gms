// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Inventory =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Inventory</Text>
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
// export default Inventory;
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Inventory = () => {
  const inventoryData = [
    { id: "1", name: "Brake Pads", quantity: 20 },
    { id: "2", name: "Engine Oil", quantity: 15 },
    { id: "3", name: "Air Filters", quantity: 10 },
    { id: "4", name: "Tires", quantity: 8 },
  ];

  const renderInventoryItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inventory</Text>
      <FlatList
        data={inventoryData}
        renderItem={renderInventoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
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
  itemQuantity: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
});

export default Inventory;
