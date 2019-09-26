import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Layout from '../constants/Layout'

export default function QuestCard0() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            style={styles.welcomeImage}
            source={require('../assets/images/bridges.jpg')}
          />
          <Text style={styles.getStartedText}>Квест Питерские мосты</Text>
          <Image
            style={styles.welcomeImage}
            source={require('../assets/images/piter.jpg')}
          />
          <Text style={styles.getStartedText}>Квест исаакиевский собор</Text>
          <Image
            style={styles.welcomeImage}
            source={require('../assets/images/spas.jpg')}
          />
          <Text style={styles.getStartedText}>Квест Питерские каналы</Text>
        </View>
        {/* <View style={styles.helpContainer}>
          <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Тачабл опасити?</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  welcomeContainer: {
    alignItems: 'center'
  },
  welcomeImage: {
    width: Layout.window.width,
    height: 250,
    resizeMode: 'cover'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  }
})
