// ICONS
import GitHubIcon from '@mui/icons-material/GitHub';

// LOCAL
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { WolfIcon } from '../../../../components/Icons/WolfIcon';

/**
 * LOCAL ROUTE ITEMS
 */
export const GithubNavigationItem = () => {
  return (
    <NavigationItem
      title={`Alvaro's Github`}
      externalLink="https://github.com/wolf-ed"
      icon={<GitHubIcon />}
    />
  );
};

export const PortfolioNavigationItem = () => {
  return (
    <NavigationItem
      title={`Alvaro`}
      externalLink="https://github.com/wolf-ed"
      icon={<WolfIcon iconSize={23} />}
    />
  );
};
