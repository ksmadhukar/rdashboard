import { createReducer } from "configureStore";

const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    userData: {},
};
export const AppReducer = createReducer({

}, { ...initialState });
