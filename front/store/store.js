import { configureStore } from "@reduxjs/toolkit";
import {notoriousSlice} from "@store/play/notoriousSlice";
export const store = configureStore({
    reducer: {
        notorious: notoriousSlice.reducer,
    }
})