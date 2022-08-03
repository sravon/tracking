import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    return (
        <View>
            <Text style={tw`text-center text-2xl text-black font-extrabold mb-10 mt-5 mx-5 border-2 p-3`}>{headerText}</Text>
            <View style={tw`mx-5`}>
                <Text style={tw`text-black text-xl px-2`}>Email</Text>
                <TextInput style={tw`border`} placeholder="Type here Email!"
                autoCapitalize='none' autoCorrect={false}
                value={email}
                onChangeText={newEmail => setemail(newEmail)}
                />
            </View>
            <View style={tw`mx-5 my-2`}>
                <Text style={tw`text-black text-xl px-2`}>Password</Text>
                <TextInput style={tw`border`} placeholder="Type here password!"
                autoCapitalize='none' autoCorrect={false}
                value={password} secureTextEntry
                onChangeText={newPassword => setpassword(newPassword)}
                />
            </View>
            {errorMessage?<Text style={tw`text-red-800 m-2`}>{errorMessage}</Text>:null}
            <Button
                title={buttonText}
                color="#841584"
                onPress={() => {
                    onSubmit({email, password})
                }}
            />
        </View>
    )
}

export default AuthForm