// import React from "react";
// import {View,Text,StyleSheet} from "react-native";
// const Compliances =()=>{
//     return(
//         <View style={styles.conatiner}>
//             <Text>Compliances</Text>
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
// export default Compliances;

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

// Dummy data for compliance items
const complianceData = [
  { id: '1', title: 'Vehicle Inspection', dueDate: '2025-01-30', status: 'Pending' },
  { id: '2', title: 'Mechanic Certification', dueDate: '2025-02-15', status: 'Valid' },
  { id: '3', title: 'Environmental Safety Check', dueDate: '2025-03-10', status: 'Pending' },
  { id: '4', title: 'Insurance Renewal', dueDate: '2025-04-01', status: 'Valid' },
  {id:'5', title:'BIKE REPAIR ', dueDate:'2025-20-01',status:'pending'}
];

const Comp = () => {
  const [complianceList, setComplianceList] = useState(complianceData);

  const handleMarkAsCompleted = (id) => {
    setComplianceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, status: 'Completed' } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Compliance Overview</Text>
      
      <FlatList
        data={complianceList}
        renderItem={({ item }) => (
          <View style={styles.complianceItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDetails}>Due: {item.dueDate}</Text>
            <Text style={styles.itemStatus}>Status: {item.status}</Text>
            {item.status !== 'Completed' && (
              <Button
                title="Mark as Completed"
                onPress={() => handleMarkAsCompleted(item.id)}
              />
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  complianceItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#555',
  },
  itemStatus: {
    fontSize: 14,
    marginVertical: 5,
    color: '#888',
  },
});

export default Comp;
