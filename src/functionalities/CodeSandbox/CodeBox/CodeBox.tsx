import React, { useEffect, useReducer, useState } from 'react';
import { Typography } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
// LOCAL
import { CodeboxContainerStyled, BoxHeader } from './CodeBox.style';
import { CodeStyleTheme, draculaStyleTheme } from './const';
import {
  BoxSettingsAction,
  BoxSettingsMenuStateInterface,
  BoxSettingsMenuStateReducer,
} from './BoxSettingsMenu/BoxSettingsMenuStateReducer';
import { BoxSettingsMenu } from './BoxSettingsMenu/BoxSettingsMenu';
import { useDropdownSelector } from '../../../CustomHooks/useDropdownSelector/useDropdownSelector';
import { JavascriptOption, LanguagesAvailable } from '../const';
import { getCodeSandboxExtensions } from './utils';
import { App_Colors } from '../../../styles/globalStyles';

interface CodeBoxPropsInterface {
  codeBoxName: string;
  defaultCode: string;
  boxWidth?: string;
  boxHeight?: string;
  isBoxResizable?: boolean;
  resizeDirection?: 'horizontal' | 'vertical';
  isReadOnly?: boolean;
  buttonRun?: React.ReactNode;
  codeStyleTheme?: CodeStyleTheme;
  controlledValue?: string;
  /**
   * if onChangeUpdateCodeAndLinter is passed, it will also analize the code to find errors
   * @param code
   * @returns
   */
  onChangeUpdateCodeAndLinter?: (code: string) => void;
  defaultWrapContent?: boolean;
  handleSetLanguage?: (language: string) => void;
}

export const CodeBox = ({
  defaultCode = `resultCollector({
    result: 'return the variables you want using resultCollector'
    })
    console.log('execute code to check results')`,
  codeBoxName,
  boxWidth,
  boxHeight,
  isBoxResizable = false,
  resizeDirection,
  isReadOnly = false,
  codeStyleTheme = draculaStyleTheme,
  defaultWrapContent = true,
  controlledValue,
  onChangeUpdateCodeAndLinter,
  handleSetLanguage,
  buttonRun,
}: CodeBoxPropsInterface) => {
  const [code, setCode] = useState<string>(
    controlledValue ? controlledValue : defaultCode
  );
  const [boxSettingsState, boxSettingsDispatch] = useReducer<
    React.Reducer<BoxSettingsMenuStateInterface, BoxSettingsAction>
  >(BoxSettingsMenuStateReducer, {
    wrapContent: defaultWrapContent ? defaultWrapContent : true,
    currentTheme: codeStyleTheme ? codeStyleTheme : draculaStyleTheme,
    fontSize: 14,
    width: 100,
    height: 100,
  });
  const { selected: selectedLanguage, Dropdown: LanguageSelector } =
    useDropdownSelector({
      options: LanguagesAvailable,
      defaultOption: JavascriptOption.value,
      labelId: 'Select Language',
    });

  useEffect(() => {
    if (handleSetLanguage) {
      handleSetLanguage(selectedLanguage);
    }
  }, [selectedLanguage]);

  const handleOnChange = (code: string) => {
    if (onChangeUpdateCodeAndLinter) {
      onChangeUpdateCodeAndLinter(code);
    } else {
      setCode(code);
    }
  };

  useEffect(() => {
    if (!onChangeUpdateCodeAndLinter) {
      setCode(defaultCode);
    }
  }, [defaultCode, controlledValue]);

  const getExtensions = () => {
    return getCodeSandboxExtensions(
      !!onChangeUpdateCodeAndLinter,
      boxSettingsState.wrapContent,
      selectedLanguage
    );
  };

  return (
    <CodeboxContainerStyled
      width={boxWidth ? boxWidth : '60%'}
      height={boxHeight ?? '300px'}
      isResizable={isBoxResizable}
      resizeDirection={resizeDirection}
    >
      <BoxHeader>
        <Typography variant="h6" color={App_Colors.contrastOne}>
          {codeBoxName}
        </Typography>
        {handleSetLanguage && LanguageSelector}
        {buttonRun ? buttonRun : ''}
        <BoxSettingsMenu
          boxSettingsState={boxSettingsState}
          boxSettingsDispatch={boxSettingsDispatch}
        />
      </BoxHeader>
      <CodeMirror
        key={'key'}
        value={code}
        height="100%"
        width="100%"
        extensions={getExtensions()}
        theme={boxSettingsState.currentTheme.theme}
        onChange={handleOnChange}
        style={{
          height: '90%',
          maxHeight: '90%',
          fontSize: boxSettingsState.fontSize,
        }}
        readOnly={isReadOnly}
      />
    </CodeboxContainerStyled>
  );
};
