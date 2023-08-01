import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    word: "",
    wordEnglish: "",
    wordsSimilar: "",
    cutWord: "",
    indexWord: 0,
    wordUse: "",
    idea: null,
    isLoading: null,
    isDisabled: true,
    buttonText: "Generar palabra similar",
    b64_json: "",
    flagWordSimilar: false,
    flagIdea: false,
    flagImage: false,
    saveAssociation: false
}

export const notoriousSlice = createSlice({
    name: "notorious",
    initialState,
    reducers: {
        setWord: (state, {payload}) => {
            state.word = payload
        },
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
            state.idea = payload
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload
        },
        setIsDisabled: (state, {payload}) => {
            state.isDisabled = payload
        },
        setButtonText: (state, {payload}) => {
            state.buttonText = payload
        }
        ,setB64_json: (state, {payload}) => {
            state.b64_json = payload
        }
        ,setFlagWordsSimilar: (state, {payload}) => {
            state.flagWordSimilar = payload
        }
        ,setFlagIdea: (state, {payload}) => {
            state.flagIdea = payload
        }
        ,setFlagImage: (state, {payload}) => {
            state.flagImage = payload
        },
        setSaveAssociation: (state, {payload}) => {
            state.saveAssociation = payload
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    setWord,
    setWordEnglish,
    setWordsSimilar,
    setCutWord,
    setIndexWord,
    setWordUse,
    setIdea,
    setIsLoading,
    setIsDisabled,
    setButtonText,
    setB64_json,
    setFlagWordsSimilar,
    setFlagIdea,
    setFlagImage,
    setSaveAssociation
} = notoriousSlice.actions;