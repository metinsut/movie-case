import { Pagination as Pag } from '@mantine/core';
import { useTypedDispatch } from 'hooks';
import { activePageUpdated } from 'store/movie-list-lice';

type Props = {
  totalResults: string;
  activePage: number;
};

function Pagination(props: Props) {
  const { totalResults, activePage } = props;
  const dispatch = useTypedDispatch();

  const setPage = (activePage: number) => {
    dispatch(activePageUpdated(activePage));
  };

  return (
    <div>
      <Pag
        total={Math.round(parseInt(totalResults) / 10)}
        onChange={setPage}
        boundaries={2}
        page={activePage}
        initialPage={1}
      />
    </div>
  );
}

export default Pagination;
