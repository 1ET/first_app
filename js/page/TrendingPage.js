import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import {connect} from 'react-redux'
import actions from '../action'
class TrendingPage extends Component{
    render(){
        const {navigation} = this.props
        return (
            <View style={styles.contant}>
                <Text style={styles.welcome}>PopularPage</Text>
                <Button
                    title={'修改主题'}
                    onPress={() => this.props.onThemeChange('#021')}
                />
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
const mapDispatchToProps = dispatch => ({
    onThemeChange:theme=>dispatch(actions.onThemeChange(theme))
})
export default connect(null,mapDispatchToProps)(TrendingPage);