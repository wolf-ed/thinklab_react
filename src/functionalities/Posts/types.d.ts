export interface PostContentDecodedInterface {
  type: 'text' | 'code';
  content: string;
  id: string;
  index: number;
  expanded: boolean;
  title: string;
}
