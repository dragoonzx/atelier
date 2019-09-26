import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Layout from '../constants/Layout'
import QuestCard0 from '../components/QuestCard0'
import QuestCard from '../components/QuestCard'
import { MonoText } from '../components/StyledText'
import Constants from 'expo-constants'

export default function QuestScreen() {
  return (
    <ScrollView style={styles.container}>
      <QuestCard
        title="Quest card #1"
        image={require('../assets/images/piter.jpg')}
        description="Some short description about quest number one. Some short description about
        quest number one"
        time="20 minutes"
      />
      <QuestCard />
      <QuestCard />
      <QuestCard />
    </ScrollView>
  )
}

QuestScreen.navigationOptions = {
  header: null
}

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     )

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     )
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     )
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   )
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   )
// }

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  }
})
