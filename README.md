# Table Component with Filtering, Sorting and Pagination
## Description

This is a project that is centred around a reusable and configurable table component written in React, that is capable of filtering, sorting and pagination.

The table can be customized by passing config values to determine which columns can have filtering or sorting and also how it is paginated, i.e. number of rows per page.

The input data does not have any constraint on the number of total rows or columns, only needs to follow the same data structure as the mock data (`accounts-ui.json`).

The following technologies are used in creating this application:

1. [Create React App](https://github.com/facebook/create-react-app)
2. TypeScript
3. styled-components for styling in React
4. Apollo Client for GraphQL query
5. Mock Service Worker (msw) for mocking the GraphQL response in absence of a GraphQL server in the development phase
6. Storybook: for documentation and for testing the UI component out of the context of the application
7. Docker for containerization of the application, used for deployment
8. Nginx as the web server inside the Docker container
9. React Testing Library for testing React components

## How to install the project

The client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). After cloning the application you need to install the npm dependencies by executing `yarn` inside the root of project.


## How to test the application

You can test the application locally using `yarn start` and then accessing it at `localhost:3000`.
The application will run in development mode. The GraphQL query is mocked with the test data. In production the query will be using the server running at `/api`, which is not developed yet.

You can also run `yarn storybook` and go to browser at port 6006, then navigate to Table section. You can test the application UI and also change controls to run the table using a different configuration.

Unit test are also found under `src/App/App.test.tsx`

## How to build the project

You can generate a static build by executing `yarn build`. OR you can run the application in Docker with a Nginx web server by running `docker-compose up --build` which will expose the application at port 80.

