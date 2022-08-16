import { Suspense } from 'react';
import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { Nav, MenuList, MenuItem, Link } from './Layout.styled';
import { LoadingOutlined } from '@ant-design/icons';

export const Layout = () => {
  return (
    <>
      <Nav>
        <Container>
          <MenuList>
            <MenuItem className="nav__item">
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem className="nav__item">
              <Link to="/movies">Movie</Link>
            </MenuItem>
          </MenuList>
        </Container>
      </Nav>
      <Suspense
        fallback={
          <LoadingOutlined
            style={{ fontSize: 36, display: 'flex', justifyContent: 'center' }}
            spin
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
