import { createSlice } from "@reduxjs/toolkit";

const nameTrainer = createSlice({
    name: 'nameTrainer',
    initialState: '',
    reducers: {
        setNameTrainer: (_state, action) => action.payload
    }
})

export const { setNameTrainer } = nameTrainer.actions

export default nameTrainer.reducer