import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native'
import React, {useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import {  } from 'react-native-safe-area-context'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView>
      <Text style={{ fontSize:48}}>AccountScreen</Text>
      <Button 
        title="sign out"
        onPress={signout}
      />
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})
