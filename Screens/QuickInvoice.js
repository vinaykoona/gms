import React from "react";
import {View,Text,StyleSheet} from "react-native";
const QuickInvoice=()=>{
    return(
        <View style={styles.container}>
            <Text>QuickInvoice</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default QuickInvoice;