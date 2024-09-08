import styled from '@emotion/styled';

// LOCAL
import { Breakpoints_Screen } from '../../styles/globalStyles';
export const MainContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 60vh;
  min-height: 30rem;
  flex-direction: column;
  ${Breakpoints_Screen.M.DOWN} {
    flex-direction: column;
  }
`;
