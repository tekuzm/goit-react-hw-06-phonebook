import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

// ========== styles ==========

import { FilterWrap, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // Handle filter input change
  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  // Return layout
  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <FilterInput
        type="text"
        name="filter"
        onChange={handleFilter}
        value={filter}
      />
    </FilterWrap>
  );
};

export default Filter;
