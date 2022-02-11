import React from 'react';

import { createContext, useReducer } from 'react';
import { AuthReducer, IAuthState } from '../authreducer/AuthReducer';
import { IUser } from '../Interfaces/UserInterface';


//1- Definir en un type los props que va a tener el context
export type AuthContextProps = {
    user: IUser | null,
    errorMessage: string,
    token: string | null,
    status: "checking" | "authenticated" | "not-authenticated",
    signInUp: ( a: string, b: IUser ) => void,
    addError: ( a: string ) => void,
    remoteError: () => void,
    badToken: ( ) => void,
    logOut: () => void,
}

//2- declarar el estado inicial de nuestra aplicacion
const authInitialState: IAuthState = {
    status: 'checking',
    user: null,
    errorMessage: '',
    token: null
}
//3-lo usuaremos para decirle a react como luce y que expone hacia fuera mi context

//4- crear el contexto que este debe ser de tipo a la interface que expone hacia fuera al context
export const AuthContext = createContext( {} as AuthContextProps );



//5- crear componente proveedor del estado a la aplicacion donde se devuelve el componente hijo que va a heredar todo

export const AuthState = ({children}: any) => {

    const [ state, dispatch ] = useReducer( AuthReducer, authInitialState );

    const signInUp = ( token: string, user: IUser ) => {
        dispatch({ type: 'SignIn-Up', payload: { token, user } })
    }

    const logOut = () => {
        console.log("LogOut");
        dispatch({ type: 'logOut' });
    }

    const remoteError = () => {
        console.log("RemoteError");
        dispatch({ type: 'removeError' });
    }

    const addError = ( errorMessage: string )  => {
        dispatch({ type: 'AddError', payload: errorMessage });
    }

    const badToken = () => {
        console.log("badToken");
        dispatch({ type: 'badToken' });
    }

    return (
        <AuthContext.Provider
            value={{ 
                ...state,
                signInUp,
                logOut,
                addError,
                badToken,
                remoteError
             }}
        >
            {children}
        </AuthContext.Provider>
    )
}