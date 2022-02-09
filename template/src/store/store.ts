import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { userReducer, modeReducer } from './reducers';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    mode: persistReducer(persistConfig, modeReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
export const persistor = persistStore(appStore);
