// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import {  name as counterN, reducer as counterR } from './slice.counter';
import { name as recordsN, reducer as recordsR } from './slice.records';

const store = configureStore({
  reducer: {
    [counterN]: counterR,
    [recordsN]: recordsR
  },
});

export default store;