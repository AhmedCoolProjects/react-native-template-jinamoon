import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModeState {
  appMode: 'dark' | 'light';
}

const initialState: ModeState = {
  appMode: 'dark',
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeModeAction: (state, action: PayloadAction<ModeState>) => {
      state.appMode = action.payload.appMode;
    },
  },
});

export const { changeModeAction } = modeSlice.actions;
// selector
export const modeReducer = modeSlice.reducer;
