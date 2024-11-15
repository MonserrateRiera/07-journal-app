import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,

        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: '03092024',
        //     imageURLs: []
        // }
    },
    reducers:{
        savingNewNote: ( state ) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload
            state.messageSaved = '';
        },
        setNotes: ( state, action ) =>{
            state.notes =  action.payload ; 
        },
        setSaving: ( state ) =>{
            state.isSaving = true;
            state.messageSaved = '';
            //TODO: mensaje de error...
        },
        updateNote: ( state, action ) =>{
            state.isSaving = false;
            state.notes = state.notes.map( note =>{

                if( note.id === action.payload.id ){
                return action.payload; 
            }

            return note;
            });
            state.messageSaved = `${action.payload.title} actualizado correctamente`
            //hauria de posar saving true?
        },
        setPhotosToActiveNote: ( state, action ) =>{
            
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload ]
            state.isSaving = false;
        }, 

        clearNotesLogout: ( state ) =>{
            state.isSaving = false,
            state.messageSaved = '',
            state.notes = [],
            state.active = null
        }, 
        deleteNoteById: ( state, action ) =>{

            
            state.notes = state.notes.filter( (note) => note.id !== action.payload )
            state.active = null;
            console.log(state.notes)

        },

    },
});


export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions;
