import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

// LOCAL
import { setIsLetDrawerOpen } from '../../store/user/userSlice';
import { getIsLeftDrawerOpen } from '../../store/user/userSelectors';
import {
  AboutNavigationItem,
  GithubNavigationItem,
  LinkedInNavigationItem,
  PortfolioNavigationItem,
  PrivacyNavigationItem,
} from './components/ExternalNavigationItems/ExternalNavigationItems';
import {
  CodeEditorNavigationItem,
  PostsListNavigationItem,
  PostsEditorNavigationItem,
} from './components/InternalNavigationItems/InternalNavigationItems';

const drawerWidth = 240;

export const LeftDrawer = () => {
  const dispatch = useDispatch();
  const isLeftDrawerOpen = useSelector(getIsLeftDrawerOpen);

  const toggleLeftDrawer = () => {
    dispatch(setIsLetDrawerOpen());
  };

  const localRoutes = (
    <List>
      <PostsEditorNavigationItem onClick={toggleLeftDrawer} />
      <CodeEditorNavigationItem onClick={toggleLeftDrawer} />
      <PostsListNavigationItem onClick={toggleLeftDrawer} />
    </List>
  );

  const infoAndHelpRoutes = (
    <List>
      <GithubNavigationItem onClick={toggleLeftDrawer} />
      <PortfolioNavigationItem onClick={toggleLeftDrawer} />
      <LinkedInNavigationItem onClick={toggleLeftDrawer} />
      <AboutNavigationItem onClick={toggleLeftDrawer} />
      <PrivacyNavigationItem onClick={toggleLeftDrawer} />
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ></AppBar>
      <Drawer
        anchor="left"
        open={isLeftDrawerOpen}
        onClose={toggleLeftDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        {localRoutes}
        <Divider />
        {infoAndHelpRoutes}
      </Drawer>
    </Box>
  );
};
