import { StyleSheet, Button, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {
  const {state, signin, clearErrorMessage, trylocalSignIn } = useContext(AuthContext)

  useEffect(() => {
    navigation.addListener('focus', clearErrorMessage )
  }, [navigation]) 

  
  

  return (
    <View style={tw`mx-2`}>
      <AuthForm 
        headerText="Sign In For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        buttonText ="Sign In"
      />
      <NavLink 
        routeName="SignUp"
        text="Don't have account? sign in instead!"
      />
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({})
