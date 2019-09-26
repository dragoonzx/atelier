import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Logging from '../components/Logging'
// import { ExpoConfigView } from '@expo/samples'

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logging />
      </View>
    )
  }
}

AccountScreen.navigationOptions = {
  title: 'Личный кабинет'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
// /**
//    * Go ahead and delete ExpoConfigView and replace it with your content;
//    * we just wanted to give you a quick view of your config.
//    */
//   return <ExpoConfigView />
