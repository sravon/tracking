import React, {useEffect, useContext} from 'react'
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { navigationRef, setNavigator } from './src/navigationRef';
import ResolveAuthScreens from './src/screens/ResolveAuthScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context as AuthContext } from './src/context/AuthContext'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MainflowScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Create" component={TrackCreateScreen} />
      <Tab.Screen name="List" component={TrackListScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}


  



const App = () => {
  const {trylocalSignIn } = useContext(AuthContext) 
  let token
  useEffect( () => {
    token = AsyncStorage.getItem('token')
    if(token){
      trylocalSignIn() 
    }
    console.log(token) 
  }, [])   

  return (
    
      token === undefined ? (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SigninScreen} />
            <Stack.Screen name="SignUp" component={SignupScreen} />
            <Stack.Screen name="Mainflow" component={MainflowScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
      ):(
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Mainflow" component={MainflowScreen} />
            <Stack.Screen name="SignIn" component={SigninScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      ) 
  );
}

export default () =>{
  
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
} 





