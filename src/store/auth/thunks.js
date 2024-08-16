import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerWithUserEmailPassword, signInWithGoogle } from "../../firebase/provider";
import {  chekingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( email, password ) => {

    
    return async( dispatch ) =>{
        dispatch( chekingCredentials() );
    }
}

export const startGoogleSignIn = ( ) => {
    return async( dispatch ) =>{
        dispatch( chekingCredentials() );
        const result = await signInWithGoogle();
        if( !result.ok ) {return dispatch(logout( result.errorMessage ));}

        dispatch( login( result ))
        
    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {

    //  console.log("som a nes thunk");

    return async( dispatch ) =>{
        dispatch( chekingCredentials() );

        const {ok, uid, photoURL, errorMessage } = await registerWithUserEmailPassword({ email, password, displayName });

        console.log(ok, errorMessage)
        if(!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }) =>{
   return async( dispatch ) => {
    dispatch( chekingCredentials() );
    const {ok, uid, displayName, photoURL, errorMessage } = await startLoginWithEmailAndPassword( { email, password } );
    if(!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }))
   }


}

