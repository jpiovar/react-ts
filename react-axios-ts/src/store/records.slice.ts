import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItemDelay } from '../services/records.api';
import { RecordsState } from '../types/records.type';

const initialState: RecordsState = {
  value: [''],
  loading: false,
  error: null
};

export const name = 'records';


export const addItemAsync = createAsyncThunk(
  'counter/getItemDelay/addItemAsync',
  async (item: string) => {
    try {
      const response = await getItemDelay(item);
      return response.data;
    }
    catch (error) {
      return error;
    }

  }
);

export const removeItemAsync = createAsyncThunk(
  'counter/getCountDelay/decrementAsync',
  async () => {
    try {
      const response = await getItemDelay();
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
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    remove: (state) => {
      state.value.shift();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.value.push(action.payload);
      })
      .addCase(addItemAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      })
      
      .addCase(removeItemAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItemAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.value.shift();
      })
      .addCase(removeItemAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      })

  }
});

export const { actions, reducer } = slice;