import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// LOCAL
import { ROUTES_ENUM } from '../../../const';
import { useNavigate, useLocation } from 'react-router-dom';
import { App_Colors } from '../../../../styles/globalStyles';

interface NavigationItemPropsInterface {
  title?: string;
  route?: ROUTES_ENUM;
  icon: React.ReactNode;
  externalLink?: string;
}

export const NavigationItem = ({
  title,
  route,
  icon,
  externalLink,
}: NavigationItemPropsInterface) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === `/${route}`);
  }, [location.pathname, setIsActive, route]);

  const styledIcon = React.cloneElement(icon as React.ReactElement, {
    sx: { color: isActive ? App_Colors.contrastColor : 'black' },
  });

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  const hrefIfExternalLink = {
    ...(externalLink
      ? { href: externalLink, target: '_blank', rel: 'noopener noreferrer' }
      : {}),
  };
  return (
    <ListItem key={title} disablePadding>
      <ListItemButton
        {...hrefIfExternalLink}
        onClick={handleClick}
        sx={{
          bgcolor: isActive ? App_Colors.dark : 'inherit',
          color: isActive ? App_Colors.contrastColor : 'inherit',
        }}
      >
        <ListItemIcon>{styledIcon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
