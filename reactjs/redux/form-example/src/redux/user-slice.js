import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "Herlon",
    initialState: {
        name: "",
        isLogged: false
    },
    reducers: {
        changeUser(state, {payload}) {
            return { ...state, isLogged: true, name: payload };
        },
        logout(state) {
            return { ...state, isLogged: false, name: "" }
        }
    }
})

export const { changeUser, logout } = slice.actions
export const selectUser = state => state.user
export default slice.reducer