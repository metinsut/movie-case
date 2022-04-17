import { useFetchMovieByImbdIdQuery } from 'store/movie-api-slice';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useFetchMovieByImbdIdQuery({ id });
  return (
    <div className="grid justify-start gap-8 p-8">
      <Link
        to="/"
        className={clsx(
          'inline-block',
          'w-fit',
          'rounded',
          'bg-blue-600',
          'px-6',
          'py-2.5',
          'text-xs',
          'font-medium',
          'uppercase',
          'leading-tight',
          'text-white',
          'shadow-md',
          'transition',
          'duration-150',
          'ease-in-out',
          'hover:bg-blue-700',
          'hover:shadow-lg',
          'focus:bg-blue-700',
          'focus:shadow-lg',
          'focus:outline-none',
          'focus:ring-0',
          'active:bg-blue-800',
          'active:shadow-lg',
        )}
      >
        Go Back
      </Link>
      <div
        className="grid justify-start gap-8"
        style={{ gridTemplateColumns: 'auto auto' }}
      >
        {isFetching ? (
          <p>Loading</p>
        ) : (
          <>
            <img src={data?.Poster} alt={data.Title} />
            <div className="grid content-start gap-4">
              <h2>{data?.Title}</h2>
              <p>Time: {data?.Runtime}</p>
              <p>Genre: {data?.Genre}</p>
              <p>Director: {data?.Director}</p>
              <p>Actors: {data?.Actors}</p>
              <p>Imdb Rating: {data?.imdbRating}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
