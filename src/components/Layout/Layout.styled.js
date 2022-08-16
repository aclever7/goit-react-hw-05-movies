import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #f9f9f9;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 15px 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #8f8f8f;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;
  &.active {
    color: #ef0c0c;
  }
  &:hover,
  &:focus {
    color: #e04a15;
  }
`;
