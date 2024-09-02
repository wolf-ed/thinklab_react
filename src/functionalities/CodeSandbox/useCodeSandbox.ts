import { useMutation, gql } from '@apollo/client';

const SEND_CODE_TO_EXECUTE = gql`
  mutation CodeSandbox($code: String!, $language: String!) {
    CodeSandbox(code: $code, language: $language) {
      result
      consoleLogs
      errorRunningCode
    }
  }
`;

export const useCodeSandbox = (language: string) => {
  const [sendCode, { data: codeExecutionResults, loading, error }] =
    useMutation(SEND_CODE_TO_EXECUTE);

  if (loading) {
    console.log('loading');
  }
  if (error) {
    console.log('useCodeSandbox_error', error);
  }

  const executeCode = (code: string) => {
    sendCode({ variables: { code: code, language: language } });
  };

  return {
    executeCode: executeCode,
    data: codeExecutionResults,
    loading: loading,
  };
};
