import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../api/api";
import axios from "axios";

// import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Define the initial state of the property slice
const initialState = {
  properties: [],
  loading: false,
  successMessage: "",
  errorMessage: "",
};

// Define async thunk for creating a property
export const createProperty = createAsyncThunk(
  "property/createProperty",
  async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log("formdata", formData);
      // console.log("aaaaaaaaaaa", api); // Check if api is correctly imported
      const { data } = await api.post("/properties", formData);
      return fulfillWithValue(data);
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/properties/get-properties");
      console.log("get data", data);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

// Create the property slice
const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProperty.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.properties.push(action.payload);
        state.successMessage = "Property added successfully";
      })
      .addCase(createProperty.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload
          ? action.payload.message
          : "An error occurred";
      });
  },
});

export const { clearMessages } = propertySlice.actions;

export default propertySlice.reducer;
