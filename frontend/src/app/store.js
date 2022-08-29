import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'

// Testing stuff out
import testReducer from '../features/test/testSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    clients: testReducer
  },
});
