import { createSlice } from "@reduxjs/toolkit";


export const journalSlice = createSlice({
    name: 'journal',
    inicialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null

        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: '03092024',
        //     imageURLs: []
        // }
    },
    reducers:{

        addNewEmptyNote: ( state, action ) => {

        },
        setActiveNote: ( state, action ) => {

        },
        setNotes: ( state, action ) =>{

        },
        setSaving: ( state, action ) =>{

        },
        updateNote: ( state, action ) =>{

        },
        deleteNoteById: ( state, action ) =>{

        },

    },
});


export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;