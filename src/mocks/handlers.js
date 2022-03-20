import { graphql } from 'msw';
import accountsData from './../accounts-ui.json';

export const handlers = [
    // Handles a "GetUserInfo" query
    graphql.query('GetUserAccounts', (req, res, ctx) => {
        // When authenticated, respond with a query payload
        return res(
          ctx.data({
            users: accountsData,
          }),
        )
      }),
  ]