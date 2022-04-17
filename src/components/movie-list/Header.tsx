import { Input, Select } from '@mantine/core';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  activeTypeUpdated,
  activeYearUpdated,
  getActiveType,
  getActiveYear,
  searchTextUpdated,
} from 'store/movie-list-lice';

type Props = {
  search: string;
};

function Header(props: Props) {
  const { search } = props;
  const dispatch = useTypedDispatch();
  const activeYear = useTypedSelector(getActiveYear);
  const activeType = useTypedSelector(getActiveType);

  const handleChange = (e: any) => {
    dispatch(searchTextUpdated(e.target.value));
  };

  const handleDateChange = (date: Date) => {
    dispatch(activeYearUpdated(date.toISOString()));
  };

  const handleTypeChange = (type: string) => {
    dispatch(activeTypeUpdated(type));
  };

  return (
    <div className="grid grid-flow-col items-center justify-start gap-8">
      <Input
        className="h-[36px] w-[300px]"
        placeholder="Please enter something for search"
        onChange={handleChange}
        value={search}
      />
      <DatePicker
        selected={activeYear ? new Date(activeYear) : null}
        onChange={(date) => handleDateChange(date)}
        showYearPicker
        placeholderText="Select Year"
        dateFormat="yyyy"
        className="h-[34px] rounded-sm px-2"
      />
      <Select
        value={activeType}
        onChange={handleTypeChange}
        placeholder="Select movie type"
        data={[
          { value: 'movie', label: 'Movie' },
          { value: 'series', label: 'Series' },
          { value: 'episode', label: 'Episode' },
        ]}
      />
    </div>
  );
}

export default Header;
