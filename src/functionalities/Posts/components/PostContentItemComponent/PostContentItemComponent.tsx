import parse from 'html-react-parser';

// LOCAL
import { CodeSandbox } from '../../../CodeSandbox/CodeSandbox';
import { EditorTypes } from '../../../PostsEditor/types';
import { MathItem } from '../../../../components/MathComponents/MathItem';

interface DisplayEditorItemComponent {
  postContentItem: string;
  type: EditorTypes;
  title: string;
  key: string;
}

export const DisplayEditorItemComponent = ({
  title,
  postContentItem,
  type,
}: DisplayEditorItemComponent) => {
  let finalContent = <></>;
  if (!postContentItem) {
    finalContent = <>corrupted document</>;
  }

  switch (type) {
    case EditorTypes.CODE:
      finalContent = <CodeSandbox content={postContentItem} />;
      break;
    case EditorTypes.TEXT:
      finalContent = <>{parse(postContentItem)}</>;
      break;
    case EditorTypes.MATH:
      finalContent = <MathItem content={postContentItem} />;
      break;
  }
  return (
    <div key={postContentItem}>
      <h2>{title}</h2>
      {finalContent}
    </div>
  );
};
