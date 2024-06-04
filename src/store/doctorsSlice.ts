import { APIconfig } from "@/constants/api";
import { Doctor } from "@/models/doctor_model";
import { PatientMyProviders } from "@/models/favorite_doctors_model";
import { Login, UserData } from "@/models/users_model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IDoctorsState {
  doctorsList: Doctor[] | null;
  showToast: "add" | "remove" | null
}

const initialState: IDoctorsState = {
  doctorsList: null,
  showToast: null
};

export const getDoctors = createAsyncThunk(
  "doctors/get",
  async (url: string, { dispatch, rejectWithValue }) => {
    try {
      const doctorsRsponse = await axios.post(url, null, APIconfig) // api
      console.log(doctorsRsponse, doctorsRsponse.data,);
      if (doctorsRsponse.data && doctorsRsponse.data.data) {
        dispatch(setDoctorsList(doctorsRsponse.data.data))
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addDoctors = createAsyncThunk(
  "doctors/add",
  async (body: PatientMyProviders, { dispatch, rejectWithValue }) => {
    try {
      const doctorsRsponse = await axios.post("https://uae-saas-api.instapract.ae/web/api/patient/add-my-providers", { "PatientMyProviders": body }, APIconfig) // api
      console.log(doctorsRsponse, doctorsRsponse.data,);
      if (doctorsRsponse.data && doctorsRsponse.data.data) {
        dispatch(addToFavorite(body.doctor_user_id!));
        dispatch(showToast());
        setTimeout(() => {
          dispatch(nullToast());
        }, 5000);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeDoctors = createAsyncThunk(
  "doctors/remove",
  async (body: PatientMyProviders, { dispatch, rejectWithValue }) => {
    try {
      const doctorsRsponse = await axios.post("https://uae-saas-api.instapract.ae/web/api/patient/add-my-providers", { "PatientMyProviders": body }, APIconfig) // api
      console.log(doctorsRsponse, doctorsRsponse.data,);
      if (doctorsRsponse.data && doctorsRsponse.data.success) {
        dispatch(removeFromFavorite(body.doctor_user_id!));
        dispatch(removeToast());
        setTimeout(() => {
          dispatch(nullToast());
        }, 5000);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctorsList: (state, action: PayloadAction<Doctor[]>) => {
      state.doctorsList = action.payload;
    },
    addToFavorite: (state, action: PayloadAction<string>) => {
      const index = state.doctorsList?.findIndex((ele) => ele.id === action.payload);
      state.doctorsList![index!].isFav = true;
      state.doctorsList = state.doctorsList;
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      console.log(state.doctorsList!,'state.doctorsList!111');
      const index = state.doctorsList?.findIndex((ele) => ele.id === action.payload);
      state.doctorsList![index!].isFav = false;
      console.log(state.doctorsList!,'state.doctorsList!');
      
      state.doctorsList = state.doctorsList;
    },
    showToast: (state) => {
      state.showToast = "add"
    },
    nullToast: (state) => {
      state.showToast = null
    },
    removeToast: (state) => {
      state.showToast = "remove"
    }
  },
});

export const { setDoctorsList, addToFavorite, removeFromFavorite, showToast, nullToast, removeToast } = doctorsSlice.actions;
export const doctorsReducer = doctorsSlice.reducer;
