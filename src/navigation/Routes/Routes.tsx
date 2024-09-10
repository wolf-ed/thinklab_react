import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

//My Pages
// import { SignUpPage } from '../../pages/SignUpPage/SignUpPage';

import { RootLayout } from '../RootLayout/RootLayout';
import { ROUTES_ENUM } from '../const';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { CodeSandboxPage } from '../../pages/CodeSandbox/CodeSandboxPage';
import { TextEditorPage } from '../../pages/TextEditorPage/TextEditorPage';
import { TextAndCodeEditorPage } from '../../pages/TextAndCodeEditorPage/TextAndCodeEditorPage';
// import { SignUpOrLogInPage } from '../../pages/SignUpOrLogInPage/SignUpOrLogInPage';
import { LogInPage } from '../../pages/LogInPage/LogInPage';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/user/userSelectors';
import { UserAccountPage } from '../../pages/UserAccountPage/UserAccountPage';
import { PostsListPage } from '../../pages/PostsListPage/PostsListPage';
import { SignUpOrLogInPage } from '../../pages/SignUpOrLogInPage/SignUpOrLogInPage';
import { SignUpPage } from '../../pages/SignUpPage/SignUpPage';
import { PrivacyPolicyPage } from '../../pages/PrivacyPolicyPage/PrivacyPolicyPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';

export function Routes() {
  const isAuth = useSelector(userSelectors.getIsAuth);

  const homePageIfAuth = <PostsListPage />;
  // const homePageIfNotAuth = <SignUpOrLogInPage />;
  const router = createBrowserRouter([
    {
      path: ROUTES_ENUM.HOME,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: isAuth ? homePageIfAuth : homePageIfAuth },
        {
          path: ROUTES_ENUM.PRIVACY_POLICY,
          element: isAuth ? homePageIfAuth : <PrivacyPolicyPage />,
        },
        {
          path: ROUTES_ENUM.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTES_ENUM.AUTH,
          element: isAuth ? homePageIfAuth : <SignUpOrLogInPage />,
        },
        {
          path: ROUTES_ENUM.SIGN_UP,
          element: <SignUpPage />,
        },
        {
          path: ROUTES_ENUM.AUTH,
          element: <SignUpOrLogInPage />,
        },
        {
          path: ROUTES_ENUM.LOG_IN,
          element: isAuth ? homePageIfAuth : <LogInPage />,
        },
        {
          path: ROUTES_ENUM.HOME,
          element: homePageIfAuth,
        },
        {
          path: ROUTES_ENUM.CODE_SANDBOX,
          element: isAuth ? <CodeSandboxPage /> : <CodeSandboxPage />,
        },
        {
          path: ROUTES_ENUM.TEXT_EDITOR,
          element: <TextEditorPage />,
        },
        {
          path: ROUTES_ENUM.TEXT_AND_CODE_EDITOR,
          element: isAuth ? (
            <TextAndCodeEditorPage />
          ) : (
            <TextAndCodeEditorPage />
          ),
        },
        {
          path: ROUTES_ENUM.USER_ACCOUNT,
          element: <UserAccountPage />,
        },
        {
          path: ROUTES_ENUM.POSTS,
          element: <PostsListPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
