import React, { useState } from 'react';
import { Table } from './Table';
import { Pagination } from './Pagination';
// import {useGetAllPosts} from './useGetAllPosts';
import {pagination} from './helper';

export const PaginatedTable = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;
  // const {loading, allPosts} = useGetAllPosts('https://jsonplaceholder.typicode.com/posts');
  const {currentPosts, pageCount} = pagination(data, postsPerPage, currentPage);

  return (
    // loading ? <p>Loading...</p> :
      <>
      <div style={{maxHeight: '90vh', 
        overflow: 'auto'}}>
        <Table data={currentPosts} />
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount} />
      {/* // </> */}
      </>
  );
};
