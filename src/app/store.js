import { configureStore } from '@reduxjs/toolkit'
import currentQueryReducer from "../feature/currentQuerySlice.js";
import {kinopoiskApi} from "../services/kinopoiskApi.js";

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
        currentQuery: currentQueryReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(kinopoiskApi.middleware),
});