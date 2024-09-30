import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const ItemTitleTextFieldStyled = styled(TextField)({
  width: '90%',
  maxWidth: '90%',
  height: 'fit-content',
  margin: 'auto 1rem',
  whiteSpace: 'pre-wrap',
  '& .MuiInputBase-input': {
    fontSize: '1rem',
    fontWeight: 'bold',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
});
