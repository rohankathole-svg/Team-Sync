import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../app/config/axiosInstance";

export const loginEmployee = createAsyncThunk('auth/login',
   async (credentials,thunkApi)=>{
    try {
        let res =await axiosInstance.post("/auth/login",credentials);
        console.log(res);
        return res.data.data;
        
    } catch (error) {

      console.error("❌ LOGIN ERROR:", error);
      console.error("❌ ERROR MESSAGE:", error.message);
      console.error("❌ SERVER RESPONSE:", error.response?.data);
      console.error("❌ STATUS:", error.response?.status);

      return thunkApi.rejectWithValue(
        error.response?.data?.message ||
        error.message ||
        "Unable to login"
      );
    }

}
);


export let currentLoggedEmployee = createAsyncThunk('auth/me',
  async (_,thunkApi)=>{
    try {
        let res =await axiosInstance.get("/auth/me");
        console.log(res);
        return res.data.user;
    } catch (error) {

      return thunkApi.rejectWithValue(error);
    }
  }
);