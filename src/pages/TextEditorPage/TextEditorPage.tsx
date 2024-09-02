import { useState } from 'react';
import TextEditor from '../../functionalities/TextEditor/TextEditor';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

export const TextEditorPage = () => {
  const [, setText] = useState('');
  return (
    <PageWrapper>
      <TextEditor setTextEditorValue={setText} reset={false} />
    </PageWrapper>
  );
};
