import { useSelector } from 'react-redux';

// LOCAL
import { CodeSandbox } from '../../functionalities/CodeSandbox/CodeSandbox';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { userSelectors } from '../../store/user/userSelectors';

export const CodeSandboxPage = () => {
  const isAuth = useSelector(userSelectors.getIsAuth);

  return (
    <PageWrapper>
      <CodeSandbox isAuth={isAuth} />
    </PageWrapper>
  );
};
