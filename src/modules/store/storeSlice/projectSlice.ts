import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface tallyreportState {
    title: string,
}

const initialState: tallyreportState = {
    title: 'Tally-report',
}

export const tallySlice = createSlice({
    name:'tallyreport',
    initialState,
    reducers:{
        updateTitle:(state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
       
    }
});
export const {updateTitle} = tallySlice.actions;
export default tallySlice.reducer;