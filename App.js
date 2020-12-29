/*
Client ID
F6sbvmC2-v4cEcK-JkQTLQ

API Key
EcuYPOS7_xQztQoxid9f6H-eq3zJAyROEa-dNDH8yj_BPGYPQYo7mm6i7q1Cr2gIjT9B-TzTu7sfSc4Jj8tcgYTEFfJB8j2C-um9a2R5NM70TS1Qp24W7D7nZc_qX3Yx
*/

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator);
