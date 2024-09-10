import { useDispatch } from 'react-redux';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

// LOCAL
import { setIsLetDrawerOpen } from '../../store/user/userSlice';
import { getIsLeftDrawerOpen } from '../../store/user/userSelectors';
import { useSelector } from 'react-redux';
import {
  GithubNavigationItem,
  PortfolioNavigationItem,
} from './components/ExternalNavigationItems/ExternalNavigationItems';
import {
  CodeEditorNavigationItem,
  PostsListNavigationItem,
  TextAndCodeEditorNavigationItem,
  TextEditorNavigationItem,
} from './components/InternalNavigationItems/InternalNavigationItems';

export const LeftDrawer = () => {
  const dispatch = useDispatch();
  const isLeftDrawerOpen = useSelector(getIsLeftDrawerOpen);

  const toggleLeftDrawer = () => () => {
    dispatch(setIsLetDrawerOpen());
  };

  const localRoutes = (
    <List>
      <TextAndCodeEditorNavigationItem />
      <TextEditorNavigationItem />
      <CodeEditorNavigationItem />
      <PostsListNavigationItem />
    </List>
  );

  const infoAndHelpRoutes = (
    <List>
      <GithubNavigationItem />
      <PortfolioNavigationItem />
    </List>
  );

  return (
    <Drawer anchor="left" open={isLeftDrawerOpen} onClose={toggleLeftDrawer()}>
      {localRoutes}
      <Divider />
      {infoAndHelpRoutes}
    </Drawer>
  );
};
