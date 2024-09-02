import { Outlet } from 'react-router-dom';
import { TopNavBar } from '../TopNavBar/TopNavBar';

import styled from '@emotion/styled';

export const ContainerStyled = styled('div')({
  margin: 'auto',
  minWidth: '90%',
  maxWidth: '90%',
  width: '90%',
  marginTop: '1rem',
  marginBottom: '2rem',
});

export const ButtonsContainer = styled('div')({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  gap: '10px',
});

/**
 * it will display the content of src/app/routes/routes.tsx
 * @returns
 */
export const RootLayout = () => {
  return (
    <>
      <TopNavBar />
      <Outlet />
    </>
  );
};
