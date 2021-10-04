import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: [''],
};

export const name = 'records';

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
});

export const { actions, reducer } = slice;