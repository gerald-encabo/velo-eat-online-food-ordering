import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/redux/user-credential/authService';
import { TypeAuthSlice } from '@/types/ListTypes';

const user = JSON.parse(localStorage.getItem('user') as string);

const initialState: TypeAuthSlice = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const signin = createAsyncThunk('auth/signin', async ( 
    user: { 
      email: string, 
      password: string
    }, thunkAPI
  ) => {

    try {
      return await authService.signin(user);
    } catch (error) {
      const message =
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const signup = createAsyncThunk('auth/signup', async (
    user: { 
      name: string,
      email: string, 
      password: string,
      password2: string
    }, thunkAPI
  ) => {

    try {
      return await authService.signup(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const signout = createAsyncThunk('auth/signout', async () => {
    await authService.signout();
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      reset: (state) => {
          state.isLoading = false
          state.isSuccess = false
          state.isError = false
          state.message = ''
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(signup.pending, (state) => {
            state.isLoading = true
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(signup.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(signin.pending, (state) => {
            state.isLoading = true
        })
        .addCase(signin.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(signin.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(signout.fulfilled, (state) => {
            state.user = null
        })
    },
})
  
export const { reset } = authSlice.actions;
export default authSlice.reducer;