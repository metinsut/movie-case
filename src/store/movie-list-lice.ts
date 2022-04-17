import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface MovieListSlice {
  searchText: string;
  activePage: number;
  activeYear?: string;
  activeType?: string;
}

const initialState: MovieListSlice = {
  activePage: 1,
  searchText: 'Pokemon',
};

export const movieListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    searchTextUpdated: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    activePageUpdated: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
    activeYearUpdated: (state, action: PayloadAction<string>) => {
      state.activeYear = action.payload;
    },
    activeTypeUpdated: (state, action: PayloadAction<string>) => {
      state.activeType = action.payload;
    },
  },
});

export const getSearchText = (state: RootState) => state.movieList.searchText;
export const getActivePage = (state: RootState) => state.movieList.activePage;
export const getActiveYear = (state: RootState) => state.movieList.activeYear;
export const getActiveType = (state: RootState) => state.movieList.activeType;

export const {
  searchTextUpdated,
  activePageUpdated,
  activeYearUpdated,
  activeTypeUpdated,
} = movieListSlice.actions;

export default movieListSlice.reducer;
