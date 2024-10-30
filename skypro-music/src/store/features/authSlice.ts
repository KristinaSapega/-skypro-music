import { getTokens, RegisterUserType, signinUser, signupUser } from "@/api/apiAuth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export type AuthStateType =  {
  authState: boolean;
  email: string | undefined;
  password: string | null;
  confirmPassword: string;
  username: string | undefined;
  errorMessage: string | undefined;
  tokens: TokensType;
  
};

export const initialState: AuthStateType = {
  authState: false,
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  errorMessage: '',
  tokens: {
    access: '',
    refresh: '',
  }
};

type TokensType = {
  access: string;
  refresh: string;
}

export const newUser = createAsyncThunk (
  "User/register",
  async({ email, password }:RegisterUserType) => {
    return await signupUser({email, password})
  }
);

export const loginUser = createAsyncThunk (
  "User/login",
  async({email, password}:RegisterUserType) => {
    return await signinUser({email, password})
  }
);

export const tokenUser = createAsyncThunk (
  "User/token",
  async({email, password}:RegisterUserType) => {
    return await getTokens({email, password})
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
  },

extraReducers: (builder) => {
  // Обрабатываем экшены, связанные с асинхронным thunk
  builder
  .addCase(newUser.fulfilled, state => {
    state.authState = true; 
  })
  .addCase(newUser.rejected, (state, action) => {
    state.errorMessage = action.error.message
  });

  builder 
  .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthStateType>) => {
    state.authState = true
    state.username = action.payload.username
    state.email = action.payload.email
  })
  .addCase(loginUser.rejected, (state, action) => {
    state.errorMessage = action.error.message;
  });

  builder
  .addCase(tokenUser.fulfilled, (state, action: PayloadAction<TokensType>) => {
    state.tokens.access = action.payload.access
    state.tokens.refresh = action.payload.refresh
  })
  
}
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
