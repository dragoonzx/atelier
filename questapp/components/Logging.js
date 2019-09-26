import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { Madoka } from 'react-native-textinput-effects'
import Layout from '../constants/Layout'
import { AuthSession } from 'expo'
import API from '../constants/API'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'
import Axios from 'axios'

class Logging extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      userID: null
    }
  }

  componentDidMount() {
    this.props.getData()
  }

  registrationOnClick = async () => {
    try {
      let response = await API.post('/users', {
        email: this.state.login,
        password: this.state.password
      })
      await console.log('returned value: ' + response.data)
      await this.setState({ userID: response.data.id })
    } catch (e) {
      console.log('Axios request failed with error: ' + e)
    }
  }
  authorizeOnClick = async () => {
    try {
      let authorization = await API.post('/auth/', {
        email: this.state.login,
        password: this.state.password
      })
      await console.log(
        'authorization successful:' + JSON.stringify(authorization.data)
      )
    } catch (e) {
      console.log('authorization error: ' + e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Madoka
          label={'Логин'}
          // this is used as active and passive border color
          borderColor={'lightblue'}
          inputPadding={16}
          labelHeight={24}
          labelStyle={{ color: '#2e78b0' }}
          inputStyle={{ color: 'black' }}
          onChangeText={login => this.setState({ login })}
        />
        <Madoka
          label={'Пароль'}
          // this is used as active and passive border color
          borderColor={'lightblue'}
          inputPadding={16}
          labelHeight={24}
          labelStyle={{ color: '#2e78b0' }}
          inputStyle={{ color: 'black' }}
          onChangeText={password => this.setState({ password })}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Вход"
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              borderStyle: 'solid',
              borderWidth: 2,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              width: Layout.window.width / 2
            }}
            onPress={() => this.authorizeOnClick()}
            accessibilityLabel="Press to send your information"
          />
          <Button
            title="Регистрация"
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              borderWidth: 2,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              width: Layout.window.width / 2
            }}
            onPress={() => this.registrationOnClick()}
            accessibilityLabel="Press to send your information"
          />
        </View>
        <Text>{this.props.data}</Text>
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.dataReducer.data
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logging)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50
  }
})
