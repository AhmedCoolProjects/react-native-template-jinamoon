import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  photoURL: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  photoURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },
    logoutAction: state => {
      state.name = '';
      state.email = '';
      state.photoURL = '';
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export const userReducer = userSlice.reducer;
