import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "myData",
    initialState,
    reducers: {
        logData: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        
     } 
})

export const {logData} = authSlice.actions;

export default authSlice.reducer;