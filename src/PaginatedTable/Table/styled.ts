import styled from 'styled-components';

export const StyledTable = styled.table`
  margin: 1rem;
  border-collapse: collapse;
  line-height: 2rem;
  text-align: center;

  tr:hover {
    background-color: rgb(245, 245, 245);
  }
  td {
    border-bottom: 0.1rem solid rgb(210, 210, 210);
    padding: 0 1rem;
    overflow: scroll;
  }
  th {
    padding: 0 1rem;
    background-color: rgb(235, 235, 235);
    border-bottom: 0.1rem solid #888;
  }
`;
