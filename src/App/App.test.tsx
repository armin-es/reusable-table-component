import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginatedTable } from '../PaginatedTable';
import data from '../accounts-ui.json';
// test('renders learn react link', () => {
//   render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
// });

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test('displays the first row', async () => {
  render(<PaginatedTable data={data} />);

  // fireEvent.click(screen.getByText('Load Greeting'))

  // await screen.findByRole('heading')
  // console.log(screen.queryAllByRole('row'))
  expect(screen.queryAllByRole('row')).toHaveLength(21);
  // .toHaveTextContent('Marguerite')
  // screen.getByText('Sydnie');
  expect(screen.getByText('Sydnie')).toBeInTheDocument();

  const input = screen.getByPlaceholderText('firstName');
  fireEvent.change(input, { target: { value: 'Sydnie' } });
  expect(screen.queryAllByRole('row')).toHaveLength(2);
});

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500))
//     }),
//   )

//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await screen.findByRole('alert')

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })

// jest.mock('./services/LoginService');

// describe('Login component tests', () => {

//     let container: HTMLDivElement
//     const loginServiceSpy = jest.spyOn(LoginService.prototype, 'login');

//     beforeEach(() => {
//         container = document.createElement('div');
//         document.body.appendChild(container);
//         ReactDOM.render(<Login />, container);
//     })

//     afterEach(() => {
//         document.body.removeChild(container);
//         container.remove();
//     })
