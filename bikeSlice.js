import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetch('https://670bee967e5a228ec1cf16ca.mockapi.io/products');
  const data = await response.json();
  return data;
});

export const addBike = createAsyncThunk('bikes/addBike', async (newBike) => {
  const response = await fetch('https://670bee967e5a228ec1cf16ca.mockapi.io/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBike),
  });
  const data = await response.json();
  return data;
});

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => { state.loading = true; })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
      
  },
});

export default bikeSlice.reducer;