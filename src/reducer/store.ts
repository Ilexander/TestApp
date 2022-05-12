import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import modalSlice from "./modalSlice";
import dataSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    modal: modalSlice,
    data: dataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
