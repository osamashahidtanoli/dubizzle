// store/reducers.js
import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

// Define your slices here using createSlice
const gistUserData = createSlice({
  name: 'gistUserData',
  initialState: {
    gistUsers: [],
    error: '',
    isLoading: true,
  },
  reducers: {
    getGistUser: (state) => {
      state.isLoading = true;
    },
    getGistUserSuccess: (state, action) => {
      state.gistUsers = action.payload;
      state.isLoading = false;
    },
    getGistUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getSearchList: (state, action) => {
      state.isLoading = true;
    }
  },
});

// Add more slices as needed

// Combine all your slices into a root reducer
const rootReducer = combineReducers({
  gistUsers: gistUserData.reducer,
  // Add more slices here
});

export const { 
  getGistUser,
  getGistUserSuccess, 
  getGistUserFailure,
  getSearchList,
} 
  = gistUserData.actions;

export default rootReducer;
