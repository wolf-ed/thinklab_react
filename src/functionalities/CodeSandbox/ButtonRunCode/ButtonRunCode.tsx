import { Button, CircularProgress } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// LOCAL
import { CustomToolTip } from '../../../components/CustomToolTip/CustomToolTip';
import { App_Colors } from '../../../styles/globalStyles';
import { ButotnIconStyled } from './ButtonRunCode.styles';

interface ButtonRunCodePropsInterface {
  isAuth: boolean;
  handleClick: () => void;
  isLoading?: boolean;
}

export const ButtonRunCode = ({
  isAuth,
  handleClick,
  isLoading,
}: ButtonRunCodePropsInterface) => {
  return (
    <CustomToolTip
      title={isAuth ? 'Execute your code' : 'Log in to run the code'}
    >
      <Button
        disabled={!isAuth || isLoading}
        variant="contained"
        sx={{
          backgroundColor: isAuth
            ? App_Colors.thirdColor
            : App_Colors.lightGray,
          color: isAuth ? 'white' : 'rgba(0, 0, 0, 0.7)',
          '&:hover': {
            backgroundColor: isAuth
              ? App_Colors.thirdColor2
              : App_Colors.lightGray,
            cursor: isAuth ? 'pointer' : 'auto',
          },

          '&.Mui-disabled': {
            backgroundColor: App_Colors.lightGray,
            color: 'rgba(0, 0, 0, 0.38)',
          },
        }}
        onClick={handleClick}
      >
        RUN
        <ButotnIconStyled>
          {isLoading ? <CircularProgress /> : <RocketLaunchIcon />}
        </ButotnIconStyled>
      </Button>
    </CustomToolTip>
  );
};
