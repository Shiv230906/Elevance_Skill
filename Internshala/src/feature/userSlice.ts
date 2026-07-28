import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: {
    name: string;
    email: string;
    photo?: string;
  } | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectuser = (state: { user: UserState }) => state.user.user;

export default userSlice.reducer;
