import { Link } from 'react-router-dom';
import { ResponseBody } from 'store/movie-api-slice';

type Props = {
  data?: ResponseBody;
};

function List(props: Props) {
  const { data } = props;

  return (
    <div className="grid grid-cols-5 gap-4">
      {data.Error && <p>{data.Error}</p>}
      {data?.Search?.map((movie, key) => (
        <Link
          to={`movie/${movie.imdbID}`}
          className="grid max-h-[300px] cursor-pointer content-between rounded-md bg-white p-2 hover:shadow-xl"
          key={movie.imdbID + key}
        >
          <img
            className="h-content justify-self-center object-cover"
            style={{ height: '80px' }}
            src={movie.Poster}
            alt={movie.Title}
          />
          <div>
            <p className="text-sm text-slate-800">{movie.Title}</p>
            <p className="text-xs">Release Date: {movie.Year}</p>
            <p className="text-xs">IMDB Id: {movie.imdbID}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default List;
