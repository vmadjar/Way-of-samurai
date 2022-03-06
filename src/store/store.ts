import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/users/usersApi";

export const store = configureStore(
    {
    reducer: {[usersApi.reducerPath]: usersApi.reducer},
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware)}
    })


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
