export enum EditorTypes {
  CODE = 'code',
  TEXT = 'text',
}

export interface CodeOrTextObject {
  type: EditorTypes;
}

export interface ItemCodeOrTextInterface {
  type: EditorTypes.CODE | EditorTypes.TEXT;
  content: string;
  index: number;
  id: string;
  expanded: boolean;
  title: string;
}
