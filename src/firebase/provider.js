import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try{
        const result = await signInWithPopup ( FirebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    }catch( error ) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    
        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerWithUserEmailPassword = async({ email, password, displayName }) =>{
    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = response.user;
        console.log(response)
        
        await updateProfile( FirebaseAuth.currentUser, {displayName})
        
        return {
            ok:true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }
}