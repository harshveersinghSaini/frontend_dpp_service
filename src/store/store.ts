import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth.slice';
import toastReducer from './features/toast.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const appDispatch = store.dispatch;

export default store;
