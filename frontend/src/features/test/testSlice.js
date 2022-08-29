import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import testService from './testService'

const initialState = {
    clients: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create a new client
export const createClient = createAsyncThunk('clients/create',
    async (clientData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await testService.createClient(clientData, token)
          } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    })

    export const testSlice = createSlice({
        name: 'client',
        initialState,
        reducers: {
          reset: (state) => initialState,
        },
        extraReducers: (builder) => {
          builder
            .addCase(createClient.pending, (state) => {
              state.isLoading = true
            })
            .addCase(createClient.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.clients.push(action.payload)
            })
            .addCase(createClient.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
            })
        }
    })
    export default testSlice.reducer
    export const {reset} = testSlice.actions