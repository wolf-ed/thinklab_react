import GitHubIcon from '@mui/icons-material/GitHub';

export interface GithubLinkPropsInterface {
  link?: string;
  title?: string;
}

export const GithubLink = ({
  link = 'https://github.com/wolf-ed',
  title,
}: GithubLinkPropsInterface) => {
  return (
    <a href={link} target={'_blank'} rel="noopener noreferrer">
      <GitHubIcon /> {title ? title : ''}
    </a>
  );
};
