import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import WelComePage from '../page/WelComePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'
const InitNavagator = createStackNavigator({
    WelComePage:{
        screen: WelComePage,
        navigationOptions:{
            header:null,//隐藏header
        }
    }
})
const MainNavigator = createStackNavigator({
        HomePage:{
            screen: HomePage,
            navigationOptions:{
                header:null
            }
        },
        DetailPage:{
            screen:DetailPage,
        }
})
export default createAppContainer(createSwitchNavigator({
    Init:InitNavagator,
    Main:MainNavigator
},{
    navigationOptions:{
        header:null
    }
}))