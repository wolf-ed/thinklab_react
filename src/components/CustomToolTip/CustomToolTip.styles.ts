import styled from '@emotion/styled';
import { Breakpoints_Screen } from '../../styles/globalStyles';

export const ToolTipTitleStyled = styled('div')`
  background: transparent;
  font-size: 1.4rem;
  ${Breakpoints_Screen.M.UP} {
    font-size: 2rem;
  }
  ${Breakpoints_Screen.S.UP} {
    font-size: 1.6rem;
  }
`;
