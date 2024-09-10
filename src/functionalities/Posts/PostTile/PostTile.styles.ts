import styled from '@emotion/styled';

// LOCAL
import { Breakpoints_Screen } from '../../../styles/globalStyles';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostTitleStyled = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  ${Breakpoints_Screen.M.DOWN} {
    font-size: 3rem;
    justify-content: center;
  }
  ${Breakpoints_Screen.S.DOWN} {
    font-size: 2rem;
  }
`;
