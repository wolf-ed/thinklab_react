import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface MathItemPropsInterface {
  content: string;
}

export const MathItem = ({ content }: MathItemPropsInterface) => {
  return <InlineMath math={content} />;
};
