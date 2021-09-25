import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/criptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});