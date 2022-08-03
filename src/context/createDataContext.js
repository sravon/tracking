import { View, Text } from 'react-native'
import React,{createContext, useReducer} from 'react'

export default function createDataContext(reducer,actions, defaultvalue) {
    const Context = createContext();
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultvalue);
        const boundActions = {};
        for (const key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider };
}