import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface tallyreportState {
    title: string,
    token: string,
    userRole: string,
}

const initialState: tallyreportState = {
    title: 'Tally-report',
    token: '',
    userRole: '',
}

export const tallySlice = createSlice({
    name:'tallyreport',
    initialState,
    reducers:{
        updateTitle:(state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        updateToken:(state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        updateUserRole:(state, action: PayloadAction<string>) => {
            state.userRole = action.payload
        },
    }
});
export const {updateTitle, updateToken, updateUserRole} = tallySlice.actions;
export default tallySlice.reducer;