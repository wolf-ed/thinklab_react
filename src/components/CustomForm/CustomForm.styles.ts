import styled from '@emotion/styled';
import { App_Colors, Breakpoints_Screen } from '../../styles/globalStyles';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 95%;
  margin: auto;
`;

export const CustomFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50rem;
  margin: auto;
  max-width: 95%;
  padding: 7rem;
  box-sizing: border-box;
  background-color: ${App_Colors.contrastColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${Breakpoints_Screen.M.DOWN} {
    padding: 1rem;
  }
`;
