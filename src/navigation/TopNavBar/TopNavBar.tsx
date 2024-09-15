import { useDispatch } from 'react-redux';

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// LOCAL
import { LeftDrawer } from '../LeftDrawer/LeftDrawer';
import { setIsLetDrawerOpen } from '../../store/user/userSlice';
import { StyledMainNavigation } from './TopNavBar.styles';
import { App_Colors } from '../../styles/globalStyles';
import { AppNameStyled } from './TopNavBar.styles';
import { TopRightOptions } from './components/TopRightOptions/TopRightOptions';

export const TopNavBar = () => {
  const dispatch = useDispatch();

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

  const boxThatExpandsToSeparateLeftAndRightSide = <Box sx={{ flexGrow: 1 }} />;

  const leftSideButtons = (
    <>
      {threeBarsMenuIcon}
      {appNameTitleComponent}
    </>
  );

  return (
    <StyledMainNavigation>
      <AppBar
        position="static"
        sx={{
          backgroundColor: App_Colors.dark,
        }}
      >
        <Toolbar>
          {leftSideButtons}
          {boxThatExpandsToSeparateLeftAndRightSide}
          {<TopRightOptions />}
        </Toolbar>
        <LeftDrawer />
      </AppBar>
    </StyledMainNavigation>
  );
};
