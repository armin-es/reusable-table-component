import React, { useState, useMemo } from 'react';
import { Table } from './Table';
import { Pagination } from './Pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsCount, setRowsCount] = useState(rowsPerPage);
  const pageData = useMemo(
    () => data.slice((currentPage - 1) * rowsCount, currentPage * rowsCount),
    [data, currentPage, rowsCount]
  );
  return (
    <>
      <div style={{ maxHeight: '90vh', overflow: 'auto' }}>
        <Table data={pageData} filterKeys={filterKeys} sortingConfig={sortingConfig} />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowCount={data.length}
        rowsPerPage={rowsCount}
        setRowsPerPage={setRowsCount}
      />
    </>
  );
};
