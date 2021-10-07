// src/store.ts
import { reduxBatch } from '@manaflair/redux-batch';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import {  name as counterN, reducer as counterR } from './counter.slice';
import { name as recordsN, reducer as recordsR } from './records.slice';

// const logger = createLogger({
//   // ...options
// });

const store = configureStore({
  reducer: {
    [counterN]: counterR,
    [recordsN]: recordsR
  },
  enhancers: [reduxBatch],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware: [thunk, logger],
});

export default store;