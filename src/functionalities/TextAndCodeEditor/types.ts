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

export interface PostInterfaceEncoded {
  id?: string;
  title: string;
  content: string;
  userName: string;
  userId?: string;
  visibility: string;
}

export interface SavePostPropsInterface
  extends Pick<
    PostInterfaceEncoded,
    'id' | 'title' | 'content' | 'visibility'
  > {}
