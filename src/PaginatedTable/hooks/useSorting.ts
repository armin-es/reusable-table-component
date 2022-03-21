import { useState } from 'react';

type SortingOrder = 'asc' | 'desc' | undefined;

export const useSorting = (sortingConfig) => {
  const [sortingState, setSortingState] = useState<{
    key: string;
    type: string;
    order: SortingOrder;
  }>({ key: '', type: '', order: undefined });

  const getNextSortingOrder = (order: SortingOrder) => {
    if (order === 'desc') return 'asc';
    if (order === 'asc') return undefined;
    return 'desc';
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

  return { sort, handleSorting, sortingState };
};
