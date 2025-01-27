import React from "react";
import {View,Text,StyleSheet} from "react-native";
const NewAppointment=()=>{
    return(
        <View style={styles.container}>
<Text> NewAppointment</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
export default NewAppointment;