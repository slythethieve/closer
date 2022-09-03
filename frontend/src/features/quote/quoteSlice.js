import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quoteService from './quoteService'

const initialState = {
    quote: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create a new quote
export const createQuote = createAsyncThunk('quotes/create',
    async (quoteData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await quoteService.createQuote(quoteData, token)
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

    export const quoteSlice = createSlice({
        name: 'quote',
        initialState,
        reducers: {
          reset: (state) => initialState,
        },
        extraReducers: (builder) => {
          builder
            .addCase(createQuote.pending, (state) => {
              state.isLoading = true
            })
            .addCase(createQuote.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.clients.push(action.payload)
            })
            .addCase(createQuote.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.message = action.payload
            })
        }
    })
    export default quoteSlice.reducer
    export const {reset} = quoteSlice.actions