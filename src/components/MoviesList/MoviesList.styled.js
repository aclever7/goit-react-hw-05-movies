import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: -32px;
    margin-top: -32px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: -16px;
  }
`;
