// propertySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Define async thunk for fetching properties
export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/properties/get-properties");
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

// Define async thunk for creating a property
export const createProperty = createAsyncThunk(
  "property/createProperty",
  async (formData, { rejectWithValue, fulfillWithValue }) => {
    try {
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

// Define async thunk for adding a highlight point
export const addHighlightPoint = createAsyncThunk(
  "property/addHighlightPoint",
  async ({ id, highlightspoint }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/properties/highlight/${id}`, {
        highlightspoint,
      });
      console.log("object", id);
      console.log("object,", highlightspoint);
      console.log("Highlight point added to property with id:", id);
      return data;
    } catch (error) {
      console.error("Error adding highlight point:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
export const addlocationadvantagepoint = createAsyncThunk(
  "property/addlocationadvantagepoint",
  async ({ id, locationadvantagepoint }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/properties/locationadvantage/${id}`, {
        locationadvantagepoint,
      });
      console.log("object", id);
      console.log("object,", locationadvantagepoint);
      console.log("Highlight point added to property with id:", id);
      return data;
    } catch (error) {
      console.error("Error adding highlight point:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);
export const addQuestionans = createAsyncThunk(
  "property/addQuestionans",
  async ({ id, que, ans }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/properties/question/${id}`, {
        que,
        ans,
      });

      console.log("Highlight point added to property with id:", id);
      return data;
    } catch (error) {
      console.error("Error adding highlight point:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);

export const addAboutDeveloper = createAsyncThunk(
  "property/addAboutDeveloper",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/properties/aboutdeveloper/${formData.get("id")}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define the initial state of the property slice
const initialState = {
  properties: [],
  loading: false,
  successMessage: "",
  errorMessage: "",
};

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
      })
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload
          ? action.payload.message
          : "An error occurred";
      })
      .addCase(addHighlightPoint.pending, (state) => {
        state.loading = true;
      })
      .addCase(addHighlightPoint.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.properties.findIndex(
          (property) => property._id === action.payload._id
        );
        if (index !== -1) {
          state.properties[index] = action.payload;
        }
        state.successMessage = "Highlight point added successfully";
      })
      .addCase(addHighlightPoint.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload
          ? action.payload.message
          : "An error occurred";
      })
      .addCase(addlocationadvantagepoint.pending, (state) => {
        state.loading = true;
      })
      .addCase(addlocationadvantagepoint.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.properties.findIndex(
          (property) => property._id === action.payload._id
        );
        if (index !== -1) {
          state.properties[index] = action.payload;
        }
        state.successMessage =
          "Locationadvantagepoint point added successfully";
      })
      .addCase(addlocationadvantagepoint.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload
          ? action.payload.message
          : "An error occurred";
      })
      .addCase(addQuestionans.pending, (state) => {
        state.loading = true;
      })
      .addCase(addQuestionans.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.properties.findIndex(
          (property) => property._id === action.payload._id
        );
        if (index !== -1) {
          state.properties[index] = action.payload;
        }
        state.successMessage = "Questions and Answers added successfully";
      })
      .addCase(addQuestionans.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload
          ? action.payload.message
          : "An error occurred";
      })
      .addCase(addAboutDeveloper.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAboutDeveloper.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "About Developer added successfully";
        const updatedProperty = action.payload;
        state.properties = state.properties.map((property) =>
          property._id === updatedProperty._id ? updatedProperty : property
        );
      })
      .addCase(addAboutDeveloper.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.message;
      });
  },
});

export const { clearMessages } = propertySlice.actions;

export default propertySlice.reducer;
