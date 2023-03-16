import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    name: "",
    email: "",
    photoUrl: "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photoUrl = action.payload.photoUrl;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
      state.photoUrl = "";
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

console.log(userSlice);

export default userSlice.reducer;
