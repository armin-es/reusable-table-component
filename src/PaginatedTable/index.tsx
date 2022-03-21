import React, { useState, useMemo } from 'react';
import { Table } from './Table';
import { Pagination } from './Pagination';
import { useSorting } from './hooks/useSorting';
import { useFiltering } from './hooks/useFiltering';

interface PaginatedTableProps {
  /**
   * Table data
   */
  data: Array<Record<string, string | number | null>>;
  /**
   * List of data columns that you can search on
   */
  filterKeys?: Array<string>;
  /**
   * List of data columns that you can apply sorting and the column data types
   */
  sortingConfig?: Record<string, string>;
  /**
   * Number of data rows in each page
   */
  rowsPerPage?: number;
}

export const PaginatedTable = ({
  data,
  filterKeys = [],
  sortingConfig = {},
  rowsPerPage = 20
}: PaginatedTableProps) => {
  const keys = Object.keys(data[0]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsCount, setRowsCount] = useState(rowsPerPage);

  const { sort, handleSorting, sortingState } = useSorting(sortingConfig);
  const { filter, handleFilter, filterState } = useFiltering();

  const tableData = useMemo(() => filter(sort(data)), [filterState, sortingState]);

  const pageData = tableData.slice((currentPage - 1) * rowsCount, currentPage * rowsCount);

  return (
    <>
      <div style={{ maxHeight: '90vh', overflow: 'auto' }}>
        <Table
          data={pageData}
          keys={keys}
          filterKeys={filterKeys}
          sortingConfig={sortingConfig}
          handleFilter={handleFilter}
          handleSorting={handleSorting}
          sortingState={sortingState}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowCount={tableData.length}
        rowsPerPage={rowsCount}
        setRowsPerPage={setRowsCount}
      />
    </>
  );
};
