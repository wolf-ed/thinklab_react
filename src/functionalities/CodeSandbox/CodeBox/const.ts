import { Extension } from '@uiw/react-codemirror';

// Local
import { dracula } from './themes/themeDracula';
import { vsCodeDark } from './themes/themeVSCode';
import { solarizedDark } from './themes/themeSolarizedDark';
import { materialDark } from './themes/themeMaterialDark';
import { quietlight } from './themes/quietlightTheme';
import { oneDark } from '@uiw/react-codemirror';
import { nord } from './themes/nord';
import { basicLight } from './themes/basicLight';

export enum CodeStyleThemeNamesEnum {
  dracula = 'Dracula',
  oneDark = 'One Dark',
  basicLight = 'Basic light',
  solarizedDark = 'Solarized Dark',
  solarizedLight = 'Solarized Light',
  vsCodeDark = 'VS code dark',
  materialDark = 'Material Dark',
  quietLight = 'Quietlight',
  nord = 'Nord',
}

export interface CodeStyleTheme {
  theme: Extension | Extension[];
  name: CodeStyleThemeNamesEnum;
}

export const draculaStyleTheme: CodeStyleTheme = {
  theme: dracula,
  name: CodeStyleThemeNamesEnum.dracula,
};

const vsCodeDarkStyleTheme: CodeStyleTheme = {
  theme: vsCodeDark,
  name: CodeStyleThemeNamesEnum.vsCodeDark,
};

const solarizedDarkStyleTheme: CodeStyleTheme = {
  theme: solarizedDark,
  name: CodeStyleThemeNamesEnum.solarizedDark,
};

const solarizedLightStyleTheme: CodeStyleTheme = {
  theme: solarizedDark,
  name: CodeStyleThemeNamesEnum.solarizedLight,
};

const materialDarkStyleTheme: CodeStyleTheme = {
  theme: materialDark,
  name: CodeStyleThemeNamesEnum.materialDark,
};

const nordStyleTheme: CodeStyleTheme = {
  theme: nord,
  name: CodeStyleThemeNamesEnum.nord,
};

const basicLightStyleTheme: CodeStyleTheme = {
  theme: basicLight,
  name: CodeStyleThemeNamesEnum.basicLight,
};

export const quietlightStyleTheme: CodeStyleTheme = {
  theme: quietlight,
  name: CodeStyleThemeNamesEnum.quietLight,
};

export const oneDarkStyleTheme: CodeStyleTheme = {
  theme: oneDark,
  name: CodeStyleThemeNamesEnum.oneDark,
};

export const codeStyleThemes: CodeStyleTheme[] = [
  draculaStyleTheme,
  vsCodeDarkStyleTheme,
  solarizedDarkStyleTheme,
  materialDarkStyleTheme,
  quietlightStyleTheme,
  oneDarkStyleTheme,
  solarizedLightStyleTheme,
  nordStyleTheme,
  basicLightStyleTheme,
];
