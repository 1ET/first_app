/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import WelComePage from './js/page/WelComePage';
import {name as appName} from './app.json';
import AppNavigators from './js/navigator/AppNavigators'

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => AppNavigators);
