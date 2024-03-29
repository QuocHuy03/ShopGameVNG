import rootReducer from "../reducers/index";

declare global {
  type AppState = ReturnType<typeof rootReducer>;
}


export interface RootState {
  auth: {
    isAuthenticated: boolean;
    user: null | any; // replace 'any' with the actual type of your user object
    loading: boolean;
    accessToken: null | any; // replace 'any' with the actual type of your access token
    refreshToken: null | any; // replace 'any' with the actual type of your refresh token
    error: null | any; // replace 'any' with the actual type of your error
  };
  // Add other reducers and their state types as needed
}

// Add this line at the beginning of your rootReducer file
export type RootAction = AnyAction;

