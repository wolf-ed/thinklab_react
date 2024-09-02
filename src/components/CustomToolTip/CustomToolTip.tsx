import React from 'react';

//Material UI MUI
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { ToolTipTitleStyled } from './CustomToolTip.styles';

interface CustomToolTipPropsInterface {
  title: string;
  content: React.ReactElement | string;
  withWraper?: boolean;
  children?: React.ReactElement;
  placement?: 'top' | 'bottom';
  delay?: number;
}

export const CustomToolTip = ({
  title,
  content,
  withWraper = true,
  children,
  placement = 'bottom',
  delay = 700,
}: CustomToolTipPropsInterface) => {
  const finalContent =
    children && React.Children.count(children) > 0 ? children : <>{content}</>;

  return (
    <Tooltip
      enterDelay={delay}
      placement={placement}
      title={<ToolTipTitleStyled>{title}</ToolTipTitleStyled>}
      TransitionComponent={Zoom}
      arrow
    >
      {withWraper ? <div>{finalContent}</div> : finalContent}
    </Tooltip>
  );
};
