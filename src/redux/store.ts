import { configureStore } from "@reduxjs/toolkit";

import cityReducer from "./state"

const store = configureStore({
    reducer: {
        city: cityReducer
    }
})

export default store