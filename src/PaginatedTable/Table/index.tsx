import React from 'react';
import { StyledTable } from './styled';

type SortingOrder = 'asc' | 'desc' | undefined;

const getSortingOrderLabel = (order: SortingOrder) => {
  if (order === 'desc') return '▼';
  if (order === 'asc') return '▲';
  return '';
};

export function Table({
  data,
  keys,
  filterKeys,
  sortingConfig,
  handleFilter,
  handleSorting,
  sortingState
}) {
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
        {data.map((item, index) => (
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
