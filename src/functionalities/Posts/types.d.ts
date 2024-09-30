import { EditorTypes } from '../PostsEditor/types';

export interface PostContentDecodedInterface {
  type: EditorTypes;
  content: string;
  id: string;
  index: number;
  expanded: boolean;
  title: string;
}
