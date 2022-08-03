import { StyleSheet, Button, Text, SafeAreaView, PermissionsAndroid } from 'react-native'
import React,{useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import RNLocation from 'react-native-location'

const TrackCreateScreen = ({ navigation }) => {

  const startWatching = async () => {
    try {
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      //   {
      //     'title': 'Example App',
      //     'message': 'Example App access to your location '
      //   }
      // )
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   console.log("You can use the location")
      //   alert("You can use the location");
      // } else {
      //   console.log("location permission denied")
      //   alert("Location permission denied");
      // }
      RNLocation.requestPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'coarse', // or 'fine'
          rationale: {
            title: "We need to access your location",
            message: "We use your location to show where you are on the map",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      });
    RNLocation.getLatestLocation({ timeout: 600 })
  .then(latestLocation => {
    console.log(latestLocation)
  })
    } catch (err) {
      console.warn(err)
    }
  }
  useEffect( () => {
    startWatching();
  }, [])
  
  
  
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={tw`text-xl`}>Create a Track</Text>
      <Map/>
      <Button
        title="Go to TrackList"
        onPress={() => navigation.navigate('List')}
      />
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
