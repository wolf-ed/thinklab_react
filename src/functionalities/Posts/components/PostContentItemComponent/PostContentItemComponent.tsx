import parse from 'html-react-parser';

// LOCAL
import { CodeSandbox } from '../../../CodeSandbox/CodeSandbox';

interface DisplayEditorItemComponent {
  postContentItem: string;
  type: 'code' | 'text';
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
  if (type === 'code') {
    finalContent = (
      <CodeSandbox
        content={postContentItem}
        updateContent={(content: string) => {}}
      />
    );
  } else if (type === 'text') {
    finalContent = <>{parse(postContentItem)}</>;
  }
  return (
    <div key={postContentItem}>
      <h2>{title}</h2>
      {finalContent}
    </div>
  );
};
