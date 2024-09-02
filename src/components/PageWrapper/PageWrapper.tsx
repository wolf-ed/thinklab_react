import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Breakpoints_Screen } from '../../styles/globalStyles';

interface PageWrapperPropsInterface {
  children: ReactNode;
}

const StyledPageWrapper = styled.div`
  max-width: 90%;
  margin: 1rem auto 3rem;
  width: 100%;
  ${Breakpoints_Screen.L.DOWN} {
    max-width: 95%;
  }
`;

export const PageWrapper = ({ children }: PageWrapperPropsInterface) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};
