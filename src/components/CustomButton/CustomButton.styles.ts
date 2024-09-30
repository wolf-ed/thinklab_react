import styled from '@emotion/styled';

export const ContainerStyled = styled('div')({
  position: 'relative',
});

export const ButtonsContainerStyled = styled('div')<{
  externalButtonsPosition?: boolean;
  positionFixedOrAbsolute?: 'fixed' | 'absolute';
}>(({ positionFixedOrAbsolute }) => ({
  position: positionFixedOrAbsolute,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  bottom: '1rem',
  right: '1rem',
}));
