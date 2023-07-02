import { configureStore } from "@reduxjs/toolkit";
import {notoriousSlice} from "@store/notorious/notoriousSlice";
export const store = configureStore({
    reducer: {
        notorious: notoriousSlice.reducer,
    }
})