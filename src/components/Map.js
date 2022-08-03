import { View, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Polyline } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + i * 0.001,
      longitude: -122.03121 + i * 0.001
    });
  }

  return <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.33233,
      longitude: -122.03121,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
    <Polyline coordinates={points}/>
  </MapView>
    
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map