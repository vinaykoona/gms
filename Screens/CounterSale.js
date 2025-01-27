import React from "react";
import {View,Text,StyleSheet} from "react-native";
const CounterSale =()=>{
    return(
        <View style={styles.conatiner}>
            <Text>CounterSale</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    conatiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default CounterSale;