import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import fetchGamesReducer from './reducers/fetchGames';
import currentGameReducer from './reducers/currentGame';
import newBetReducer from './reducers/newBet';
import authReducer from './reducers/auth';
import savedBetsReducer from './reducers/savedBets';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchGames: fetchGamesReducer,
    currentGame: currentGameReducer,
    newBet: newBetReducer,
    savedBets: savedBetsReducer
  },
  middleware: [thunk]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;