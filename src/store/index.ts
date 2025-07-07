import store from './store';
import type { RootState, AppDispatch } from './store';
import { setAuth } from './features/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import authReducer from './features/auth.slice';
import toastReducer from './features/toast.slice';
import { setLoading, setToast } from './features/toast.slice';

export { store, setAuth, useDispatch, useSelector, authReducer, setLoading, setToast, toastReducer };
export type { RootState, AppDispatch };