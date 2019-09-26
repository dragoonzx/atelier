import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import QuestScreen from '../screens/QuestScreen'
import MapScreen from '../screens/MapScreen'
import AccountScreen from '../screens/AccountScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const QuestStack = createStackNavigator(
  {
    Quest: QuestScreen
  },
  config
)

//Dont forget u can do like this:
//`ios-information-circle${focused ? '' : '-outline'}`
//'md-information-circle'

QuestStack.navigationOptions = {
  tabBarLabel: 'Квесты',
  tabBarOptions: {
    activeTintColor: '#03A9F4',
    inactiveTintColor: '#ccc'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-trophy` : 'md-trophy'}
    />
  )
}

QuestStack.path = ''

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  config
)

MapStack.navigationOptions = {
  tabBarLabel: 'Карта',
  tabBarOptions: {
    activeTintColor: '#03A9F4',
    inactiveTintColor: '#ccc'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-navigate' : 'md-navigate'}
    />
  )
}

MapStack.path = ''

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  config
)

AccountStack.navigationOptions = {
  tabBarLabel: 'Профиль',
  tabBarOptions: {
    activeTintColor: '#03A9F4',
    inactiveTintColor: '#ccc'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  )
}

AccountStack.path = ''

const tabNavigator = createBottomTabNavigator({
  QuestStack,
  MapStack,
  AccountStack
})

tabNavigator.path = ''

export default tabNavigator
