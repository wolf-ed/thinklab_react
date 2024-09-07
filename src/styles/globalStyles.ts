import styled from '@emotion/styled';

export enum App_Colors {
  primary = '#004ba0',
  secondary = '#0084c9',
  contrastOne = '#e0f7fa',
  dark = '#333',
  text = '#000000',
  contrastColor = '#fff',
  mainColor = '#181818',
  secondColor = '#08fdd8',
  backgroundColor = 'black',
  contactBackgroundColor = 'blue',
  thirdColor = '#2288ee',
  thirdColor2 = '#2270ee',
  textBackground = '#dae8fc',
  lightGray = 'lightGray',
}

export const WhiteColorTextStyled = styled.div`
  & * {
    color: ${App_Colors.contrastColor};
  }
`;

export enum Values_Breakpoints {
  XL = '1500px',
  L = '1100px',
  M = '850px',
  S = '600px',
}

export const Breakpoints_Screen = {
  XL: {
    UP: `@media (min-width: ${Values_Breakpoints.XL})`,
    DOWN: `@media (max-width: ${Values_Breakpoints.XL})`,
  },
  L: {
    UP: `@media (min-width: ${Values_Breakpoints.L})`,
    DOWN: `@media (max-width: ${Values_Breakpoints.L})`,
  },
  M: {
    UP: `@media (min-width: ${Values_Breakpoints.M})`,
    DOWN: `@media (max-width: ${Values_Breakpoints.M})`,
  },
  S: {
    UP: `@media (min-width: ${Values_Breakpoints.S})`,
    DOWN: `@media (max-width: ${Values_Breakpoints.S})`,
  },
};
