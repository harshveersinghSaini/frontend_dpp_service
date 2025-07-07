import type { AuthState } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
    message: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state: AuthState, action: PayloadAction<AuthState>) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.user = action.payload.user
            state.token = action.payload.token
            state.loading = action.payload.loading
            state.error = action.payload.error
            state.success = action.payload.success
            state.message = action.payload.message
        }
    }
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;