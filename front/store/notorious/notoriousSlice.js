import { createSlice } from "@reduxjs/toolkit";

export const notoriousSlice = createSlice({
    name: "notorious",
    initialState: {
        word: "",
    },
    reducers: {
        wordSave: (state, action, {payload}) => {
            state.word = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    wordSave
} = notoriousSlice.actions;