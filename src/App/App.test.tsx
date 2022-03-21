import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginatedTable } from '../PaginatedTable';
import data from '../accounts-ui.json';

beforeEach(() => {
  render(
    <PaginatedTable
      data={data}
      filterKeys={['firstName', 'lastName', 'country', 'mfa']}
      sortingConfig={{ amount: 'number', createdAt: 'date' }}
      rowsPerPage={20}
    />
  );
});

test('initial content of the table', async () => {
  expect(screen.queryAllByRole('row')).toHaveLength(21);
  expect(screen.getByText('Sydnie')).toBeInTheDocument();
});

test('sorting', async () => {
  fireEvent.click(screen.getByText('amount'));
  expect(screen.getByText('Johnpaul')).toBeInTheDocument();
});

test('filtering', async () => {
  const input = screen.getByPlaceholderText('firstName');
  fireEvent.change(input, { target: { value: 'Sydnie' } });
  expect(screen.queryAllByRole('row')).toHaveLength(2);
});

test('pagination', async () => {
  fireEvent.click(screen.getByText('2'));
  expect(screen.getByText('Gregoria')).toBeInTheDocument();
});
