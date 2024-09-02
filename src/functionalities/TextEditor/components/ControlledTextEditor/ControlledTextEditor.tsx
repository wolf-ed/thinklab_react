import { useState } from 'react';

import TextEditor from '../../TextEditor';

export const ControlledTextEditor = () => {
  const [, setText] = useState('');
  return <TextEditor setTextEditorValue={setText} reset={false} />;
};
