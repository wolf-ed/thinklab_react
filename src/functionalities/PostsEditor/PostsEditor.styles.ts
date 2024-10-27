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

export const PostContainerStyled = styled('div')<{ showAiContainer: boolean }>(
  (props) => ({
    position: 'relative',
    width: props.showAiContainer ? '60%' : '100%',
    overflow: 'hidden',
    transition: 'width 0.3s ease',
  })
);

export const AiContainerStyled = styled('div')<{ showAiContainer: boolean }>(
  (props) => ({
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    width: '40%',
    padding: '0',
    zIndex: '10',
    overflow: 'hidden',
    borderRadius: '12px',
    position: 'fixed',
    right: props.showAiContainer ? 0 : '-40%',
    top: 75,
    transition: 'right 0.3s ease',
  })
);
