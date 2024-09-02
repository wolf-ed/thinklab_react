// ICONS
import BiotechIcon from '@mui/icons-material/Biotech';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';

// LOCAL
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { ROUTES_ENUM } from '../../../const';

/**
 * LOCAL ROUTE ITEMS
 */
export const TextAndCodeEditorNavigationItem = () => {
  return (
    <NavigationItem
      title={`Text-Code Editor`}
      route={ROUTES_ENUM.TEXT_AND_CODE_EDITOR}
      icon={<BiotechIcon />}
    />
  );
};

export const TextEditorNavigationItem = () => {
  return (
    <NavigationItem
      title={`Text Editor`}
      route={ROUTES_ENUM.TEXT_EDITOR}
      icon={<DriveFileRenameOutlineIcon />}
    />
  );
};

export const CodeEditorNavigationITem = () => {
  return (
    <NavigationItem
      title={`Code Editor`}
      route={ROUTES_ENUM.CODE_SANDBOX}
      icon={<CodeIcon />}
    />
  );
};

export const SignUpNavigationITem = () => {
  return (
    <NavigationItem
      title={`Sign up`}
      route={ROUTES_ENUM.SIGN_UP}
      icon={<CodeIcon />}
    />
  );
};

export const ErrorNavigationITem = () => {
  return (
    <NavigationItem
      title={`Error`}
      route={ROUTES_ENUM.ERROR}
      icon={<CodeIcon />}
    />
  );
};
