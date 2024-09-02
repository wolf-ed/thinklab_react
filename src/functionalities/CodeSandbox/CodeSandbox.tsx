import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

// LOCAL
import { MainContainer, ResizableContainer } from './CodeSandbox.styles';
import { useCodeSandbox } from './useCodeSandbox';
import { CodeBox } from './CodeBox/CodeBox';
import { quietlightStyleTheme } from './CodeBox/const';
import { initialCodeState, Languages_Sandbox_enum } from './const';

export const CodeSandbox = () => {
  const [code, setCode] = useState<string>(initialCodeState);
  const [language, setLanguage] = useState<string>(
    Languages_Sandbox_enum.JAVASCRIPT
  );
  const [output, setOutput] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [error, setError] = useState<string>(''); // Now it's declared to be used
  const { executeCode, data } = useCodeSandbox(language);

  useEffect(() => {
    const output = data?.CodeSandbox?.result;
    const errorInCode = data?.CodeSandbox?.errorRunningCode;
    if (output && output !== '[]') {
      setOutput(output);
    } else if (errorInCode && errorInCode !== 'null' && errorInCode !== null) {
      setError(errorInCode); // Proper use of setError
    }
    if (data?.CodeSandbox?.consoleLogs) {
      setLogs(JSON.stringify(data?.CodeSandbox?.consoleLogs));
    }
  }, [data, data?.CodeSandbox?.result, data?.CodeSandbox?.errorRunningCode]);

  const handleClick = () => {
    try {
      executeCode(code);
    } catch (error: any) {
      // Specify 'any' to suppress TypeScript's strict type checking
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
      onChangeUpdateCodeAndLinter={(value: string) => setCode(value)}
      handleSetLanguage={(language: string) => setLanguage(language)}
      buttonRun={
        <Button variant="contained" color="primary" onClick={handleClick}>
          RUN
        </Button>
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
      boxHeight={'100%'}
      defaultWrapContent
    />
  );

  const logsBox = (
    <CodeBox
      codeStyleTheme={quietlightStyleTheme}
      codeBoxName={'Logs'}
      controlledValue={logs}
      defaultCode={logs}
      boxWidth={rightSideWidth}
      boxHeight={'100%'}
      defaultWrapContent
    />
  );

  return (
    <MainContainer>
      {codeSandbox}
      <ResizableContainer>
        {logsBox}
        {resultsBox}
      </ResizableContainer>
    </MainContainer>
  );
};
