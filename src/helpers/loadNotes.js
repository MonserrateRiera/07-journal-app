import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";



export const loadNotes = async( uid = '' ) =>{
    if( !uid ) throw new Error('El uid no existe');

    const colectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs( colectionRef );
    const notes = [];
    docs.forEach( doc => {
        notes.push({id: doc.id, ...doc.data() });
    })
    
    return notes;

}