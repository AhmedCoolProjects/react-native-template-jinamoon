import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers';

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
