import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const ContainerStyled = styled('div')({
  position: 'relative',
  // display: 'flex',
  // flexDirection: 'row',
  // maxWidth: '100vw',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
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
  backgroundColor: 'rgba(240, 240, 240, 0.5)',
  padding: '6px',
  zIndex: '11',
  borderRadius: '12px',
});

export const FullWidthTextFieldStyled = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-input': {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

export const PostContainerStyled = styled('div')({
  position: 'relative',
  width: '60%',
  overflow: 'hidden',
});

export const AiContainerStyled = styled('div')({
  backgroundColor: 'rgba(240, 240, 240, 0.5)',
  width: '40%',
  padding: '0',
  zIndex: '10',
  overflow: 'hidden',
  borderRadius: '12px',
  position: 'fixed',
  right: 0,
  top: 75,
});
