import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    id: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser (state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        deleteUser(state) {
            state.email = null;
            state.id = null;
            state.token = null;
        }
    },
})

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;