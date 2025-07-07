import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    error: false,
    loading: false
}

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setLoading: ((state, action) => {
            state.loading = action.payload
        }),
        setToast: ((state, action) => {
            state.message = action.payload.message
            state.error = action.payload.error

            console.log("state", state)
        }),
    }
})

export const { setLoading, setToast } = toastSlice.actions;
export default toastSlice.reducer;