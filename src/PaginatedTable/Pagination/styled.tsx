import styled from 'styled-components';

export const Styled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-top: 0.1rem solid #888;
  padding: 0.5em 0;
  margin-left: 1rem;
  background-color: #eee;
  button {
    appearance: none;
    border-radius: 4px;
    border-color: #aaa;
    border-style: none;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px 1px, rgb(0 0 0 / 34%) 0px 4px 10px 0px;
    &.selected {
      background-color: rgb(204, 242, 249);
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style-type: none;
    margin: 0 0.1rem;
  }
`;
