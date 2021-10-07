import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCountDelay } from '../services/counter.api';
import { CounterState } from '../types/counter.type';

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: null
};

export const name = 'counter';

export const incrementAsync = createAsyncThunk(
  'counter/getCountDelay/incrementAsync',
  async (amount: number) => {
    try {
      const response = await getCountDelay(amount);
      return response.data;
    }
    catch (error) {
      return error;
    }

  }
);

export const decrementAsync = createAsyncThunk(
  'counter/getCountDelay/decrementAsync',
  async (amount: number) => {
    try {
      const response = await getCountDelay(amount);
      return response.data;
    }
    catch (error) {
      return error;
    }

  }
);

const slice = createSlice({
  name,
  initialState,
  // The `reducers` field allows us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      
      .addCase(decrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.value -= action.payload;
      })
      .addCase(decrementAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      })
  }
});

export const { actions, reducer } = slice;