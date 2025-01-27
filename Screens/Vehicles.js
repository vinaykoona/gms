// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Vehicles =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Vehicles</Text>
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
// export default Vehicles;

import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const Vehicles = () => {
  const vehiclesData = [
    { id: "1", owner: "Vinay", model: "Toyota Corolla", license: "ABC-1234" },
    { id: "2", owner: "Vyshanvi", model: "Honda Civic", license: "XYZ-5678" },
    { id: "3", owner: "priyaa", model: "Ford Mustang", license: "LMN-9101" },
    { id: "4", owner: "Swamy", model: "Chevrolet Camaro", license: "PQR-2345" },
  ];

  const renderVehicleItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.vehicleOwner}>Owner: {item.owner}</Text>
      <Text style={styles.vehicleModel}>Model: {item.model}</Text>
      <Text style={styles.vehicleLicense}>License Plate: {item.license}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vehicles</Text>
      <FlatList
        data={vehiclesData}
        renderItem={renderVehicleItem}
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
  vehicleOwner: {
    fontSize: 18,
    fontWeight: "600",
  },
  vehicleModel: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  vehicleLicense: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
});

export default Vehicles;
