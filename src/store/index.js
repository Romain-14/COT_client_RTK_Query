// import { configureStore } from "@reduxjs/toolkit";
// import teaReducer from "./slice/tea";

// const store = configureStore({
//     reducer: {
//         tea: teaReducer,
//     },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { teaApi } from "./slice/service/teaAPI";

export const store = configureStore({
    reducer: {
        [teaApi.reducerPath]: teaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(teaApi.middleware),
});
