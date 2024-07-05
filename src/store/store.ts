import {configureStore, combineReducers, Action, ThunkAction} from "@reduxjs/toolkit";
import productReducer, { ProductState } from "../store/product.slice.ts";

// Define RootState type
export interface RootState {
    product: ProductState;
}

// Define root reducer
const rootReducer = combineReducers({
    product: productReducer,
});

// Configure store with rootReducer and RootState
export const store = configureStore({
    reducer: rootReducer
});

// Define types for Redux actions (optional)
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

