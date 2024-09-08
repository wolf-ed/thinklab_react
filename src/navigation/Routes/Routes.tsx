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
// import { LogInPage } from '../../pages/LogInPage/LogInPage';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../store/user/userSelectors';

export function Routes() {
  const isAuth = useSelector(userSelectors.getIsAuth);

  const homePageIfAuth = <TextAndCodeEditorPage />;
  // const homePageIfNotAuth = <SignUpOrLogInPage />;
  const router = createBrowserRouter([
    {
      path: ROUTES_ENUM.HOME,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: isAuth ? homePageIfAuth : homePageIfAuth },
        // {
        //   path: ROUTES_ENUM.AUTH,
        //   element: isAuth ? homePageIfAuth : <SignUpOrLogInPage />,
        // },
        // {
        //   path: ROUTES_ENUM.SIGN_UP,
        //   element: isAuth ? homePageIfAuth : <SignUpPage />,
        // },
        // {
        //   path: ROUTES_ENUM.LOG_IN,
        //   element: isAuth ? homePageIfAuth : <LogInPage />,
        // },
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
