import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'

import quoteReducer from '../features/quote/quoteSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    quotes: quoteReducer
  },
});
