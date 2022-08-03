import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreens = () => {
    const {trylocalSignIn } = useContext(AuthContext)
    useEffect(() => {
        trylocalSignIn() 
    }, [])

    return null
}

export default ResolveAuthScreens