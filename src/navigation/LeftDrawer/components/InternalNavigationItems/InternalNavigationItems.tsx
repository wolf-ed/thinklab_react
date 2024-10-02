// ICONS
import BiotechIcon from '@mui/icons-material/Biotech';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// LOCAL
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { ROUTES_ENUM } from '../../../const';

export interface NavigationItemPropsInterface {
  onClick: () => void;
}
/**
 * LOCAL ROUTE ITEMS
 */
export const PostsEditorNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      title={`Posts Editor`}
      route={ROUTES_ENUM.POSTS_EDITOR}
      icon={<BiotechIcon />}
      onClick={onClick}
    />
  );
};

export const TextEditorNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      title={`Text Editor`}
      route={ROUTES_ENUM.TEXT_EDITOR}
      icon={<DriveFileRenameOutlineIcon />}
      onClick={onClick}
    />
  );
};

export const CodeEditorNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      title={`Code Editor`}
      route={ROUTES_ENUM.CODE_SANDBOX}
      icon={<CodeIcon />}
      onClick={onClick}
    />
  );
};

export const SignUpNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      title={`Sign up`}
      route={ROUTES_ENUM.SIGN_UP}
      icon={<CodeIcon />}
      onClick={onClick}
    />
  );
};

export const PostsListNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      title={`Posts`}
      route={ROUTES_ENUM.POSTS}
      icon={<DynamicFeedIcon />}
      onClick={onClick}
    />
  );
};

export const ErrorNavigationITem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      title={`Error`}
      route={ROUTES_ENUM.ERROR}
      icon={<CodeIcon />}
      onClick={onClick}
    />
  );
};
