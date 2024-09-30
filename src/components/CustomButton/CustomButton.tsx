import React from 'react';
import { CustomToolTip } from '../CustomToolTip/CustomToolTip';
import { Button } from '@mui/material';
import { App_Colors } from '../../styles/globalStyles';
import { ButtonsContainerStyled } from './CustomButton.styles';

export interface CustomButtonPropsInterface {
  onClick?: () => void;
  buttonTitle?: string;
  tooltipText?: string;
  disabled?: boolean;
  location?: 'topRight' | 'bottomRight';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styles?: any;
  position?: 'absolute' | 'fixed';
  externalButtonPosition?: boolean;
}

export const CustomButton = ({
  onClick,
  buttonTitle,
  tooltipText,
  // location,
  startIcon,
  styles,
  disabled = false,
  endIcon,
  externalButtonPosition = false,
}: CustomButtonPropsInterface) => {
  const finalStartIcon = startIcon ? { startIcon: startIcon } : {};
  const finalEndIcon = endIcon ? { endIcon: endIcon } : {};
  const finalStyles = styles
    ? styles
    : {
        backgroundColor: App_Colors.textBackground,
        color: App_Colors.text,
        border: '1px solid white',
      };

  const button = (
    <Button
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      variant="contained"
      color="primary"
      sx={finalStyles}
      {...finalStartIcon}
      {...finalEndIcon}
      disabled={disabled}
    >
      {buttonTitle}
    </Button>
  );

  const buttonWithTooltip = tooltipText ? (
    <CustomToolTip title={tooltipText}>{button}</CustomToolTip>
  ) : (
    button
  );

  if (externalButtonPosition) {
    return (
      <ButtonsContainerStyled
        externalButtonsPosition={true}
        positionFixedOrAbsolute="fixed"
      >
        {buttonWithTooltip}
      </ButtonsContainerStyled>
    );
  } else {
    return buttonWithTooltip;
  }
};
