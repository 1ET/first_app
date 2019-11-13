import React,{Component} from 'react'
import {StyleSheet} from 'react-native'
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
import NavigatorUtil from '../navigator/NavigatorUtil'
export default class HomePage extends Component{
    render(){
        NavigatorUtil.navigation = this.props.navigation;
        return (
            <DynamicTabNavigator/>
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