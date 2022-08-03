import { StyleSheet, Button, Text, View } from 'react-native'
import React from 'react'

const TrackCreateScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{ fontSize:10}}>CreateScreen  js</Text>
      <Button
        title="Go to TrackList"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
