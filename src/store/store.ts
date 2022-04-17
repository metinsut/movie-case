import { configureStore } from '@reduxjs/toolkit';
import { movieApiSlice } from './movie-api-slice';
import movieListSlice from './movie-list-lice';

export const store = configureStore({
  reducer: {
    movieList: movieListSlice,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(movieApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
