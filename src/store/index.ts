import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// ...

const store = configureStore({
  reducer: rootReducer,
});
export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
