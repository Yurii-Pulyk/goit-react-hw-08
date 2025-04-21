// src/components/Filter/Filter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/filters/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Filter contacts"
      />
    </div>
  );
};

export default Filter;
