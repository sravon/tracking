import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const NavLink = ({text, routeName}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={tw`text-blue-400 mx-2`}>{ text }</Text>
        </TouchableOpacity>
    )
}

export default NavLink