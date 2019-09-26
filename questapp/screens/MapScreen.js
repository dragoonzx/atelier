import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
// import { ExpoLinksView } from '@expo/samples'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { Ionicons } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

import Geofence from 'react-native-expo-geofence'
import { thisTypeAnnotation } from '@babel/types'

class MapScreen extends React.Component {
  state = {
    region: {
      latitude: 59.939095,
      longitude: 30.315868,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    markerz: [
      {
        key: 1,
        latitude: 57.125996,
        longitude: 65.550075,
        title: 'Home'
      },
      {
        key: 2,
        latitude: 57.117564,
        longitude: 65.548404,
        title: 'Crystall'
      }
    ],
    marginBottom: 1,
    location: {},
    errorMessage: null,
    loading: true,
    pos: {}
  }
  componentWillMount() {
    this._getLocationAsync()
  }
  componentDidMount() {
    this._getLocationUpdate()
  }
  // componentDidUpdate() {
  //   this.getByProximity()
  // }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      })
    }

    let location = await Location.getCurrentPositionAsync({})
    this.setState({
      location,
      loading: false
    })
  }

  _getLocationUpdate = async () => {
    let currentLocation = await Location.watchPositionAsync(
      {
        timeInterval: 10
      },
      data => {
        this.setState({ location: data })
      }
    )
  }

  getByProximity() {
    let maxDistanceInKM = 8000 // 500m distance
    // startPoint - center of perimeter
    // points - array of points
    // maxDistanceInKM - max point distance from startPoint in KM's
    // result - array of points inside the max distance
    let result = Geofence.filterByProximity(
      this.state.location.coords,
      this.state.markerz,
      maxDistanceInKM
    )

    // You can access distance of this object in distanceInKM property
    let distanceToHome = result[0].distanceInKM
    let distanceToShop = result[1].distanceInKM
    return distanceToHome
  }

  _onMapReady = () => this.setState({ marginBottom: 0 })
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#03A9F4" />
        </View>
      )
    } else {
      return (
        <MapView
          initialRegion={this.state.region}
          style={{ flex: 1, marginBottom: this.state.marginBottom }}
          showsUserLocation={true}
          provider="google"
          showsMyLocationButton={true}
          onMapReady={this._onMapReady}
        >
          {this.getByProximity() < 0.3 ? (
            <Marker coordinate={this.state.markerz[0]} />
          ) : (
            <Marker coordinate={this.state.markerz[1]} />
          )}
        </MapView>
      )
    }
  }
}

function mapStateToProps(state, props) {
  return {
    x: state.geoReducer.x
  }
}

MapScreen.navigationOptions = {
  header: null
}

export default connect(mapStateToProps)(MapScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  myLocationButton: {
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 15,
    elevation: 3,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderRadius: 50
  }
})
