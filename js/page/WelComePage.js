import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import NavigationUtil from '../navigator/NavigatorUtil'
export default class welComePage extends Component{
    componentDidMount(){
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation
            })
        }, 2000);
    }
    componentWillMount(){
        this.timer && clearTimeout(this.timer)
    }
    render(){
        return (
            <View style={styles.content}>
                <Text>
                    welComePage
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})