import { useState, useEffect } from 'react';

// LOCAL
import {
  MainContainer,
  LogsAndResultsContainerStyled,
} from './CodeSandbox.styles';
import { useCodeSandbox } from './useCodeSandbox';
import { CodeBox } from './CodeBox/CodeBox';
import { quietlightStyleTheme } from './CodeBox/const';
import { initialCodeState, Languages_Sandbox_enum } from './const';
import { ButtonRunCode } from './ButtonRunCode/ButtonRunCode';

interface CodeSandboxPropsInterface {
  isAuth: boolean;
  updateContent: (content: string) => void;
}

export const CodeSandbox = ({
  isAuth = false,
  updateContent,
}: CodeSandboxPropsInterface) => {
  const [code, setCode] = useState<string>(initialCodeState);
  const [language, setLanguage] = useState<string>(
    Languages_Sandbox_enum.JAVASCRIPT
  );
  const [output, setOutput] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { executeCode, data, loading } = useCodeSandbox(language);

  useEffect(() => {
    const output = data?.CodeSandbox?.result;
    const errorInCode = data?.CodeSandbox?.errorRunningCode;
    if (output && output !== '[]') {
      setOutput(output);
    } else if (errorInCode && errorInCode !== 'null' && errorInCode !== null) {
      setError(errorInCode);
    }
    if (data?.CodeSandbox?.consoleLogs) {
      setLogs(JSON.stringify(data?.CodeSandbox?.consoleLogs));
    }
  }, [data, data?.CodeSandbox?.result, data?.CodeSandbox?.errorRunningCode]);

  const handleClick = () => {
    try {
      executeCode(code);
    } catch (error: any) {
      console.log('errors', error);
      if (error instanceof Error) {
        setLogs(`Execution error: ${error.message}`);
      } else {
        setLogs('Execution error: Unknown error occurred');
      }
    }
  };
  const codeSandbox = (
    <CodeBox
      codeBoxName={'Code'}
      defaultCode={code}
      controlledValue={code}
      boxWidth={'150%'}
      boxHeight={'100%'}
      resizeDirection={'horizontal'}
      onChangeUpdateCodeAndLinter={(value: string) => {
        setCode(value);
        if (updateContent) {
          updateContent(value);
        }
      }}
      handleSetLanguage={(language: string) => setLanguage(language)}
      buttonRun={
        <ButtonRunCode
          isAuth={isAuth}
          handleClick={handleClick}
          isLoading={loading}
        />
      }
    />
  );

  const rightSideWidth = '100%';

  const resultsBox = (
    <CodeBox
      codeStyleTheme={quietlightStyleTheme}
      codeBoxName={'Results'}
      controlledValue={error ? error : output}
      defaultCode={error ? error : output}
      boxWidth={rightSideWidth}
      defaultWrapContent
      isReadOnly={true}
    />
  );

  const logsBox = (
    <CodeBox
      codeStyleTheme={quietlightStyleTheme}
      codeBoxName={'Logs'}
      controlledValue={logs}
      defaultCode={logs}
      boxWidth={rightSideWidth}
      isReadOnly={true}
      defaultWrapContent
    />
  );

  return (
    <MainContainer>
      {codeSandbox}
      <LogsAndResultsContainerStyled>
        {logsBox}
        {resultsBox}
      </LogsAndResultsContainerStyled>
    </MainContainer>
  );
};
