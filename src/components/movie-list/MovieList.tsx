import { useTypedSelector } from 'hooks';
import { useState } from 'react';
import { useFetchMovieBySearchQuery } from 'store/movie-api-slice';
import {
  getActivePage,
  getActiveType,
  getActiveYear,
  getSearchText,
} from 'store/movie-list-lice';
import { RootState } from 'store/store';
import Header from './Header';
import List from './List';
import Pagination from './Pagination';

function MovieList() {
  const searchText = useTypedSelector(getSearchText);
  const activePage = useTypedSelector(getActivePage);
  const activeYear = useTypedSelector(getActiveYear);
  const activeType = useTypedSelector(getActiveType);
  const { data, isFetching } = useFetchMovieBySearchQuery({
    search: searchText,
    page: activePage,
    year: activeYear ? new Date(activeYear).getFullYear().toString() : null,
    type: activeType,
  });

  return (
    <div
      className="grid h-[calc(100vh_-_3rem)] content-start gap-4 p-4"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <Header search={searchText} />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <>
          <List data={data} />
          <Pagination
            totalResults={data?.totalResults}
            activePage={activePage}
          />
        </>
      )}
    </div>
  );
}

export default MovieList;
