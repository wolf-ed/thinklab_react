import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const ContainerStyled = styled('div')({
  position: 'relative',
  // display: 'flex',
  // flexDirection: 'row',
  // maxWidth: '100vw',
  overflow: 'hidden',
});

export const SubContainerStyled = styled('div')({
  // maxWidth: '50%',
});

export const ButtonsContainerStyled = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
});

export const FullWidthTextFieldStyled = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-input': {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});
