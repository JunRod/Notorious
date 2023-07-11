import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    word: [],
    wordEnglish: "",
    wordsSimilar: "",
    cutWord: "",
    indexWord: 0,
    wordUse: "",
    idea: null,
    isLoading: null,
    isDisabled: true,
    buttonText: "Generar palabra similar"
}

export const notoriousSlice = createSlice({
    name: "notorious",
    initialState,
    reducers: {
        setWordEnglish: (state, {payload}) => {
            state.wordEnglish = payload
        },
        setWordsSimilar: (state, {payload}) => {
            state.wordsSimilar = payload
        },
        setCutWord: (state, {payload}) => {
            state.cutWord = payload
        },
        setIndexWord: (state, {payload}) => {
            state.indexWord = payload
        },
        setWordUse: (state, {payload}) => {
            state.wordUse = payload
        },
        setIdea: (state, {payload}) => {
            state.cutWord = payload
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload
        },
        setIsDisabled: (state, {payload}) => {
            state.isDisabled = payload
        },
        setButtonText: (state, {payload}) => {
            state.buttonText = payload
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setWordEnglish,
    setWordsSimilar,
    setCutWord,
    setIndexWord,
    setWordUse,
    setIdea,
    setIsLoading,
    setIsDisabled,
    setButtonText
} = notoriousSlice.actions;