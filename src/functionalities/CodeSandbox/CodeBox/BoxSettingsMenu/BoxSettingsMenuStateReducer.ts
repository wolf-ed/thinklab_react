import { CodeStyleTheme, draculaStyleTheme } from '../const';

export interface BoxSettingsMenuStateInterface {
  wrapContent: boolean;
  currentTheme: CodeStyleTheme;
  fontSize: number;
  width: number;
  height: number;
}

export const initialBoxSettingsMenuState: BoxSettingsMenuStateInterface = {
  wrapContent: true,
  currentTheme: draculaStyleTheme,
  fontSize: 14,
  width: 100,
  height: 100,
};

export enum BoxSettingsActionsEnum {
  setWrapContent = 'setWrapContent',
  setCurrentTheme = 'setCurrentTheme',
  setFontSize = 'setFontSize',
  setWidth = 'setWidth',
  setHeight = 'setHeight',
}

export type BoxSettingsAction =
  | { type: BoxSettingsActionsEnum.setWrapContent; payload: boolean }
  | { type: BoxSettingsActionsEnum.setCurrentTheme; payload: CodeStyleTheme }
  | { type: BoxSettingsActionsEnum.setFontSize; payload: number }
  | { type: BoxSettingsActionsEnum.setWidth; payload: number }
  | { type: BoxSettingsActionsEnum.setHeight; payload: number };

export function BoxSettingsMenuStateReducer(
  state: BoxSettingsMenuStateInterface,
  action: BoxSettingsAction
): BoxSettingsMenuStateInterface {
  switch (action.type) {
    case 'setWrapContent':
      return { ...state, wrapContent: action.payload };
    case 'setCurrentTheme':
      return { ...state, currentTheme: action.payload };
    case 'setFontSize':
      return { ...state, fontSize: action.payload };
    case 'setWidth':
      return { ...state, width: action.payload };
    case 'setHeight':
      return { ...state, height: action.payload };
    default:
      throw new Error('Unhandled action type');
  }
}
