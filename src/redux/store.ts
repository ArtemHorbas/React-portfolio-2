import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import  filter from './filter/slice';
import  data from './data/slice';
import like from './like/slice';
import  fullItem from './fullItem/slice';
import  auth from './auth/slice';

export const store = configureStore({
  reducer: {
	filter,
	data,
	like,
	fullItem,
	auth
  },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

