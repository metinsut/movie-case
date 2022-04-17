import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '56c0af8c';

export interface Movie {
  Poster: 'string';
  Title: 'string';
  Type: 'string';
  Year: 'string';
  imdbID: 'string';
}

export interface MovieDetail {
  Title: 'string';
  Year: 'string';
  Rated: 'string';
  Released: 'string';
  Runtime: 'string';
  Genre: 'string';
  Director: 'string';
  Writer: 'string';
  Actors: 'string';
  Plot: 'string';
  Language: 'string';
  Country: 'string';
  Awards: 'string';
  Poster: 'string';
  Ratings: [
    {
      Source: 'string';
      Value: 'string';
    },
  ];
  Metascore: 'string';
  imdbRating: 'string';
  imdbVotes: 'string';
  imdbID: 'string';
  Type: 'string';
  DVD: 'string';
  BoxOffice: 'string';
  Production: 'string';
  Website: 'string';
  Response: 'string';
}

export interface ResponseBody {
  Response: string;
  Search: Movie[];
  totalResults: string;
  Error?: string;
}

export const movieApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/`,
  }),
  endpoints(builder) {
    return {
      fetchMovieBySearch: builder.query<
        ResponseBody,
        { search?: string; page?: number; type?: string; year?: string }
      >({
        query({ search = 'Pokemon', page = 1, type, year }) {
          return `?apikey=${API_KEY}&s=${search}&page=${page}${
            type ? '&type=' + type : ''
          }${year ? '&y=' + year : ''}`;
        },
      }),
      fetchMovieByImbdId: builder.query<MovieDetail, { id?: string }>({
        query({ id = '' }) {
          return `?apikey=${API_KEY}&i=${id}`;
        },
      }),
    };
  },
});

export const { useFetchMovieBySearchQuery, useFetchMovieByImbdIdQuery } =
  movieApiSlice;
