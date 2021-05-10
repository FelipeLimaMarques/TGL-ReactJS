import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import gamesReducer from './reducers/games';
import authReducer from './reducers/auth';
import betsReducer from './reducers/bets';
import updateUserReducer from './reducers/updateUser';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    games: gamesReducer,
    bets: betsReducer,
    updateUser: updateUserReducer
  },
  middleware: [thunk]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;