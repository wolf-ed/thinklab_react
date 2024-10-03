import styled from '@emotion/styled';

// LOCAL
import { Breakpoints_Screen } from '../../../../styles/globalStyles';

export const TitleContainerStyled = styled.div`
  width: 100%;
`;

export const EditButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const EditButtonStyled = styled.div`
  display: flex;
  width: fit-content;
  margin-right: 0;
  margin-left: auto;
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
