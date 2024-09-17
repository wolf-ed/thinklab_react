import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';

// LOCAL
import { getIsAuth } from '../../../../store/user/userSelectors';
import { ROUTES_ENUM } from '../../../const';
import { App_Colors } from '../../../../styles/globalStyles';
import { useAuth } from '../../../../hooks/useAuth/useAuth';
const StyledOptionsBox = styled(Box)({
  display: 'flex',
  gap: '1rem',
});

export const TopRightOptions = () => {
  const isAuth = getIsAuth();
  const auth = useAuth();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleLogin = () => {
    navigate(ROUTES_ENUM.LOG_IN);
    handleClose2();
  };

  const handleSignUp = () => {
    navigate(ROUTES_ENUM.SIGN_UP);
    handleClose2();
  };

  const handlePrivacyPolicy = () => {
    navigate(ROUTES_ENUM.PRIVACY_POLICY);
    handleClose();
    handleClose2();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const userAccountIconButtonMenu = 'primary-search-account-menu';

  const accountIconButton = (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={userAccountIconButtonMenu}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
  const personIconClickMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={userAccountIconButtonMenu}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate(ROUTES_ENUM.USER_ACCOUNT);
          handleMenuClose();
        }}
      >
        My account
      </MenuItem>
      <MenuItem
        onClick={() => {
          handlePrivacyPolicy();
          handleMenuClose();
        }}
      >
        Privacy Policy
      </MenuItem>
      <MenuItem
        onClick={() => {
          auth.logOutUser();
          navigate(ROUTES_ENUM.LOG_IN);
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const notAuthOptions = isMobile && !isAuth && (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        sx={{ color: App_Colors.contrastColor }}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose}
      >
        {<MenuItem onClick={handleLogin}>Log In</MenuItem>}
        {<MenuItem onClick={handleSignUp}>Sign Up</MenuItem>}
        <MenuItem onClick={handlePrivacyPolicy}>Privacy Policy</MenuItem>
      </Menu>
    </>
  );

  return (
    <StyledOptionsBox>
      {isAuth ? accountIconButton : notAuthOptions}
      {personIconClickMenu}
    </StyledOptionsBox>
  );
};
