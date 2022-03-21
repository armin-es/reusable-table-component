import React, { useCallback, useState } from 'react';
import { StyledTable } from './styled';

type SortingOrder = 'asc' | 'desc' | undefined;

const getNextSortingOrder = (order: SortingOrder) => {
  if (order === 'desc') return 'asc';
  if (order === 'asc') return undefined;
  return 'desc';
};

const getSortingOrderLabel = (order: SortingOrder) => {
  if (order === 'desc') return '▼';
  if (order === 'asc') return '▲';
  return '';
};

export function Table({ data, filterKeys, sortingConfig }) {
  const [sortingState, setSortingState] = useState<{
    key: string;
    type: string;
    order: SortingOrder;
  }>({ key: '', type: '', order: undefined });
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

  const handleSorting = (key) => () => {
    if (Object.hasOwn(sortingConfig, key)) {
      setSortingState({
        key,
        type: sortingConfig[key],
        order: sortingState.key === key ? getNextSortingOrder(sortingState.order) : 'desc'
      });
    }
  };

  const sort = (data) => {
    const { key, type, order } = sortingState;
    if (type === 'number') {
      if (order === 'desc') return [...data].sort((a, b) => b[key] - a[key]);
      if (order === 'asc') return [...data].sort((a, b) => a[key] - b[key]);
    }
    if (type === 'date') {
      if (order === 'desc')
        return [...data].sort((a, b) => Date.parse(b[key]) - Date.parse(a[key]));
      if (order === 'asc') return [...data].sort((a, b) => Date.parse(a[key]) - Date.parse(b[key]));
    }
    return data;
  };

  const filter = useCallback(
    (data) => {
      const filterKeys = Object.keys(filterState);
      return data.filter((item) => {
        return filterKeys.every((key) => {
          return item[key]?.toLowerCase().includes(filterState[key]?.toLowerCase());
        });
      });
    },
    [data, filterState]
  );

  const keys = Object.keys(data[0]);

  return (
    <StyledTable>
      <thead>
        <tr>
          {keys.map((key) => (
            <th
              key={key}
              style={{ cursor: `${Object.hasOwn(sortingConfig, key) ? 'pointer' : 'auto'}` }}
              onClick={handleSorting(key)}>
              {`${key} ${sortingState.key === key ? getSortingOrderLabel(sortingState.order) : ''}`}
              {filterKeys.includes(key) && (
                <input type="text" id="filter" placeholder={key} onChange={handleFilter(key)} />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filter(sort(data)).map((item, index) => (
          <tr key={index}>
            {keys.map((key, i) => (
              <td key={i}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
