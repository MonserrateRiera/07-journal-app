import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

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
    //     dispatch
    //     dispatch(startNewNote)
    //     dispatch(activar note)
    }

}