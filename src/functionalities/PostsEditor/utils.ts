import { EditorTypes } from './types';
import { App_Colors } from '../../styles/globalStyles';

export const getItemTypeColor = (itemType: EditorTypes) => {
  switch (itemType) {
    case EditorTypes.CODE:
      return App_Colors.dark;
    case EditorTypes.MATH:
      return App_Colors.math;
    case EditorTypes.TEXT:
      return App_Colors.textBackground;
    default:
      return App_Colors.textBackground;
  }
};
