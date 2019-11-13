import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import NavigatorUtil from '../navigator/NavigatorUtil'
export default class popularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'IOS', 'React', 'React Native', 'PHP', 'JavaScript']
    }
    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item} />,
                navigationOptions: {
                    title: item
                }
            }
        });
        return tabs;
    }
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(this._genTabs(), {
            tabBarOptions: {
                tabStyle: styles.tabStyle,
                upperCaseLabel: false,
                scrollEnabled: true,
                style: {
                    backgroundColor: "#a67"
                },
                indicatorStyle: {
                    height: 2,
                    backgroundColor: styles.indicatorStyle,
                },
                labelStyle: styles.labelStyle

            }
        }))
        return (
            <View style={styles.contant}>
                <TabNavigator />
            </View>
        )
    }
}
class PopularTab extends Component {
    render() {
        return (
            <View style={styles.contant}>
                <Text style={styles.welcome}>PopularTab</Text>
                <Text onPress={
                    ()=>{
                        NavigatorUtil.goPage({},'DetailPage')
                    }
                }>跳转详情页</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contant: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: "white"
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
})