import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CityState {
    city: string
}

const initialState: CityState = {
    city: "London"
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        updateCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        }
    }
})

export default citySlice.reducer

export const {updateCity} = citySlice.actions

