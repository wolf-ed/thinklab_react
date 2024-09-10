// ICONS
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// LOCAL
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { WolfIcon } from '../../../../components/Icons/WolfIcon';
import SecurityIcon from '@mui/icons-material/Security';
import { ROUTES_ENUM } from '../../../const';
import { NavigationItemPropsInterface } from '../InternalNavigationItems/InternalNavigationItems';

/**
 * LOCAL ROUTE ITEMS
 */
export const GithubNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      onClick={onClick}
      title={`Alvaro's Github`}
      externalLink="https://github.com/wolf-ed"
      icon={<GitHubIcon />}
    />
  );
};

export const PortfolioNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      onClick={onClick}
      title={`Alvaro`}
      externalLink="https://alvaro-e.netlify.app/"
      icon={<WolfIcon iconSize={23} />}
    />
  );
};

export const PrivacyNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      onClick={onClick}
      title={`Privacy Policy`}
      route={ROUTES_ENUM.PRIVACY_POLICY}
      icon={<SecurityIcon />}
    />
  );
};

export const AboutNavigationItem = ({
  onClick,
}: NavigationItemPropsInterface) => {
  return (
    <NavigationItem
      onClick={onClick}
      title={`About`}
      route={ROUTES_ENUM.ABOUT}
      icon={<MenuBookIcon />}
    />
  );
};
