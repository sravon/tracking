import { StyleSheet, useEffect, View, } from 'react-native'
import React,{useState, useContext} from 'react'
import tw from 'tailwind-react-native-classnames'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
  const [disabled, setDisabled] = useState(false);
  
  const {state, signup, clearErrorMessage } = useContext(AuthContext)
  
  useEffect(() => {
    navigation.addListener('focus', clearErrorMessage )
  }, [navigation])

  return (
    <View style={tw`mx-2`}>
      <AuthForm 
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        buttonText ="Sign Up"
      />
      <NavLink 
        routeName="SignIn"
        text="Already have account? sign in instead!"
      />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})
