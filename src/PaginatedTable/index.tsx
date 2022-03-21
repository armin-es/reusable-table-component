import React, { useState, useMemo } from 'react';
import { Table } from './Table';
import { Pagination } from './Pagination';

export const PaginatedTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const pageData = useMemo(
    () => data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage),
    [data, currentPage, rowsPerPage]
  );
  return (
    <>
      <div style={{ maxHeight: '90vh', overflow: 'auto' }}>
        <Table
          data={pageData}
          filterKeys={['firstName', 'lastName', 'country', 'mfa']}
          sortingConfig={{ amount: 'number', createdAt: 'date' }}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowCount={data.length}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </>
  );
};
