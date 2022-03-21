import { graphql } from 'msw';
import accountsData from './../accounts-ui.json';

export const handlers = [
  graphql.query('GetUserAccounts', (req, res, ctx) => {
    return res(
      ctx.data({
        users: accountsData
      })
    );
  })
];
