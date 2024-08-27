import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {

    return async ( dispatch, getState ) =>{

        dispatch(savingNewNote() );
        const { uid } = getState().auth;
        //uid usuario
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${ uid }/journal/notes` ));

        const response = await setDoc(newDoc, newNote);
        console.log(response);
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote(newNote ) );
    }
}

export const startLoadingNotes = () =>{
    return async ( dispatch, getState ) =>{
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid no existe');
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }
}