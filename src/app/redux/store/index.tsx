import { configureStore } from "@reduxjs/toolkit";
import { codeAPI } from "../api/codeAPI";

export const store = configureStore({
    reducer : {
        // items: itemReducer,
    }
}
)