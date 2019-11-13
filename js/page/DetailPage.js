import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
export default class DetailPage extends Component{
    render(){
        return (
            <View style={styles.contant}>
                <Text style={styles.welcome}>详情页</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contant:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFE'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
})