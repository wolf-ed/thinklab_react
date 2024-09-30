export enum EditorTypes {
  CODE = 'code',
  TEXT = 'text',
  MATH = 'math',
}

export interface CodeOrTextObject {
  type: EditorTypes;
}

export type PostItemTypes =
  | EditorTypes.CODE
  | EditorTypes.TEXT
  | EditorTypes.MATH;

export interface PostItemInterface {
  type: PostItemTypes;
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
