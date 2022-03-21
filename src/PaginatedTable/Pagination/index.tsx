import React, { useMemo, useState } from 'react';
import { Styled } from '../styled';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  rowCount
}) => {
  const [inputValue, setInputValue] = useState(rowsPerPage);

  const pageCount = Math.ceil(rowCount / rowsPerPage);

  const pageNumbers = useMemo(() => {
    const arr: number[] = [];
    let lower;
    let higher;

    if (pageCount < 4) {
      lower = 1;
      higher = pageCount;
    } else {
      switch (currentPage) {
        case 1:
          lower = 1;
          higher = 3;
          break;

        case pageCount:
          lower = pageCount - 2;
          higher = pageCount;
          break;

        default:
          lower = Math.max(currentPage - 1, 1);
          higher = Math.min(currentPage + 1, pageCount);
      }
    }

    for (let i = lower; i <= higher; i++) {
      arr.push(i);
    }
    return arr;
  }, [pageCount, currentPage]);

  const setToFirstPage = () => setCurrentPage(1);

  const setToPreviousPage = () => {
    if (currentPage > 1) return setCurrentPage(currentPage - 1);
    return setToFirstPage();
  };

  const setToLastPage = () => setCurrentPage(pageCount);

  const setToNextPage = () => {
    if (currentPage < pageCount) return setCurrentPage(currentPage + 1);
    return setToLastPage();
  };

  return (
    <Styled>
      <input
        type="number"
        id="rows per page"
        placeholder="rows/page"
        value={inputValue}
        min={1}
        max={pageCount}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            const input = event.target as HTMLInputElement;
            setRowsPerPage(input.value);
            input.blur();
          }
        }}
      />
      <ul>
        <li>
          <button type="button" onClick={setToPreviousPage}>
            Previous
          </button>
        </li>
        {/* <li><button type="button" onClick={setToFirstPage}>First</button></li> */}
        {}
        {pageNumbers.map((i) => {
          return (
            <li key={i}>
              <button
                type="button"
                className={i === currentPage ? 'selected' : ''}
                onClick={() => setCurrentPage(i)}>
                {i}
              </button>
            </li>
          );
        })}
        {/* <li><button type="button" onClick={setToLastPage}>Last</button></li> */}
        <li>
          <button type="button" onClick={setToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </Styled>
  );
};
