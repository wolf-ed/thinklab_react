import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

// LOCAL
import { LeftDrawer } from '../LeftDrawer/LeftDrawer';
import { setIsLetDrawerOpen } from '../../store/user/userSlice';
import { StyledMainNavigation } from './TopNavBar.styles';
import { ROUTES_ENUM } from '../const';
import { App_Colors } from '../../styles/globalStyles';
import { AppNameStyled } from './TopNavBar.styles';
import { useAuth } from '../../hooks/useAuth/useAuth';
// import { TopRightOptions } from './components/TopRightOptions/TopRightOptions';
// import { userSelectors } from '../../store/user/userSelectors';

export const TopNavBar = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  // const isAuth = useSelector(userSelectors.getIsAuth);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const userAccountIconButtonMenu = 'primary-search-account-menu';
  /**
   * its hidden, but needs to be there so when we click the account button we see the options
   */
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
          auth.logOutUser();
          navigate(ROUTES_ENUM.LOG_IN);
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const threeBarsMenuIcon = (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={() => {
        dispatch(setIsLetDrawerOpen());
      }}
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );

  const appNameTitleComponent = <AppNameStyled>ThinkLab</AppNameStyled>;

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
  const boxThatExpandsToSeparateLeftAndRightSide = <Box sx={{ flexGrow: 1 }} />;

  const leftSideButtons = (
    <>
      {threeBarsMenuIcon}
      {appNameTitleComponent}
    </>
  );

  return (
    <StyledMainNavigation>
      <AppBar position="static" sx={{ backgroundColor: App_Colors.dark }}>
        <Toolbar>
          {leftSideButtons}
          {boxThatExpandsToSeparateLeftAndRightSide}
          {/* {isAuth ? accountIconButton : <TopRightOptions />} */}
          {accountIconButton}
        </Toolbar>
        <LeftDrawer />
      </AppBar>
      {personIconClickMenu}
    </StyledMainNavigation>
  );
};
