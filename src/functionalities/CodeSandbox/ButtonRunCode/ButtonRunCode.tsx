import { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// LOCAL
import { CustomToolTip } from '../../../components/CustomToolTip/CustomToolTip';
import { App_Colors } from '../../../styles/globalStyles';
import { ButotnIconStyled } from './ButtonRunCode.styles';
import { ENV_IS_PROD } from '../../../envConsts';

interface ButtonRunCodePropsInterface {
  isAuth: boolean;
  handleClick: () => void;
  isLoading?: boolean;
}

export const ButtonRunCode = ({
  handleClick,
  isLoading,
  isAuth,
}: ButtonRunCodePropsInterface) => {
  const tooltipInitialState = isAuth
    ? 'Run your code!'
    : 'Log in to run the code!';
  const [tooltipText, setTooltipText] = useState(tooltipInitialState);

  const onClick = () => {
    handleClick();
  };

  useEffect(() => {
    if (isLoading) {
      setTooltipText('Waking up the server and executing the code...');
    }
    if (!isLoading) {
      setTooltipText(tooltipInitialState);
    }
  }, [isLoading, isAuth]);

  return (
    <CustomToolTip title={ENV_IS_PROD ? 'Log in!' : tooltipText}>
      <Button
        disabled={!isAuth || isLoading || ENV_IS_PROD}
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
        onClick={onClick}
      >
        RUN
        <ButotnIconStyled>
          {isLoading ? <CircularProgress /> : <RocketLaunchIcon />}
        </ButotnIconStyled>
      </Button>
    </CustomToolTip>
  );
};
