import { useState } from 'react';

export const useFiltering = () => {
  const [filterState, setFilterState] = useState<Record<string, string | never>>({});

  const handleFilter = (key) => (event) => {
    if (event.target.value === '') {
      const newFilterState = { ...filterState };
      delete newFilterState[key];
      setFilterState(newFilterState);
    } else {
      setFilterState({ ...filterState, [key]: event.target.value });
    }
  };

  const filter = (data) => {
    const keys = Object.keys(filterState);
    return data.filter((item) => {
      return keys.every((key) => {
        return item[key]?.toLowerCase().includes(filterState[key]?.toLowerCase());
      });
    });
  };
  return { filter, handleFilter, filterState };
};
