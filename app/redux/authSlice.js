import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,  // ✅ Correct authentication state
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      storage.removeItem("persist:root"); // Clear persisted state on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

