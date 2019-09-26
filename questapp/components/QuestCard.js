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
import { Card, Button, Icon } from 'react-native-elements'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'

class QuestCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card
        title={this.props.title ? this.props.title : 'Unknown Quest'}
        image={
          this.props.image
            ? this.props.image
            : require('../assets/images/bridges.jpg')
        }
      >
        <Text style={{ marginBottom: 2, color: 'gray' }}>
          Estimating time: {this.props.time ? this.props.time : '30 minutes'}
        </Text>
        <Text style={{ marginBottom: 2, color: 'gray' }}>
          Price: {this.props.price ? this.props.price : 'free'}
        </Text>
        <Text style={{ marginBottom: 10 }}>
          {this.props.description
            ? this.props.description
            : `Some short description about this quest. Some short description about this quest`}
        </Text>

        <Button
          // icon={<Icon name="" color="#ffffff" />}
          onPress={() => this.props.updateMap()}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="GO NOW"
        />
      </Card>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(QuestCard)

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
