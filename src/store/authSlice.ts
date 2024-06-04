import { APIconfig } from "@/constants/api";
import { Login, UserData } from "@/models/users_model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { cookies } from "next/headers";

export interface IAuthState {
  userData: UserData | null;
}

const initialState: IAuthState = {
  userData: null,
};

export const LoginThunk = createAsyncThunk(
  "auth/login",
  async (body: Login, { getState, dispatch, rejectWithValue}) => {
    try {
      const loginResponse = await axios.post(
        "https://uae-saas-api.instapract.ae/web/api/default/login",
        body,
        APIconfig
      ); 
      if (loginResponse.data && loginResponse.data.data) {
        const data = new UserData(loginResponse.data.data)
        dispatch(setAuthUserData(data));
        setCookie("accessToken",data.access_token!)
        window.location.href = window.location.origin+"/home";
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const { setAuthUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;

function setCookie(name:string, value:string, days?:number) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}