import AsyncStorage from '@react-native-async-storage/async-storage';
import tracker from "../api/tracker";
import { navigate } from '../navigationRef';
import createDataContext from "./createDataContext";


const authReducer = (state, action ) =>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return {errorMessage:'', token: action.payload}
        case 'signin':
            return {errorMessage:'', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage:''}
        case 'signout':
            return {errorMessage:'', token:null}
        default:
            return state;
    }
}

const trylocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if(token){
        dispatch({type: 'signin', payload: token})
        navigate('Mainflow');
    }
    else{
        navigate('SignIn')
    }  
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) =>{
    return async ({email, password}) => {
        
        try {
            const response = await tracker.post('/signup',{email, password} )
            console.log(response.data)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            console.log("this work from sign")
            navigate('Mainflow');
        } catch (error) {
            dispatch({
                type: 'add_error', payload: 'Something went wrong with sign up'
            });
        }
    }
}

const signin = dispatch =>  async ({email, password}) => {
        try {
            const response = await tracker.post('/signin',{email, password} )
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            console.log("this work from signIn")
            navigate('Mainflow');
        } catch (error) {
            dispatch({
                type: 'add_error', payload: 'Something went wrong with sign in'
            });
        }
    }


const signout = (dispatch) => async () =>{
    const token = await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' });
    console.log(token)
    console.log("signoput")
    navigate('SignIn')
}

export const {Provider, Context } = createDataContext(
    authReducer,{ signin, signout, signup, clearErrorMessage, trylocalSignIn},
    {token:null, errorMessage:''}
);