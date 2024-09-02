import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// LOCAL
import { App_Colors } from '../../styles/globalStyles';

export const ColorButtonStyled = styled(Button)`
  color: ${App_Colors.text};
  background-color: ${App_Colors.primary};
  &:hover {
    background-color: ${App_Colors.secondary};
  }
  width: 25rem;
`;
