import React from "react";
import { Text,View,StyleSheet } from "react-native";
const ReceivePayment=()=>{
    return(
        <View style={styles.container}>
        <Text>Receive Payment Screen</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default ReceivePayment;
  