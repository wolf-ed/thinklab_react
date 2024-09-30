import { useState, useEffect } from 'react';

//OTHER LIBRARIES
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//MY STYLES
import { TextEditorContainer } from './TextEditor.style';

const modules = {
  toolbar: [
    [
      {
        font: ['sans-serif', 'serif', 'monospace', 'Georgia'],
      },
    ],
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: ['black'] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['link', 'video'],
    ['clean'],
  ],
};

export interface TextEditorPropsInterface {
  setTextEditorValue: (text: string) => void;
  reset: boolean;
  textPayload?: string;
}

const TextEditor = ({
  setTextEditorValue,
  reset,
  textPayload = '',
}: TextEditorPropsInterface) => {
  const [editorValue, setEditorValue] = useState(textPayload);

  const handleChange = (event: string) => {
    setEditorValue(event);
    setTextEditorValue(event);
  };

  useEffect(() => {
    if (!textPayload) {
      const textValue: string = textPayload ? textPayload : '';
      setEditorValue(textValue);
      setTextEditorValue(textValue);
    }
  }, [reset]);

  return (
    <TextEditorContainer>
      <ReactQuill
        modules={modules}
        theme="snow"
        className={'ql-editor'}
        value={editorValue}
        onChange={(event) => {
          handleChange(event);
        }}
        bounds={'.ReactQuillHeight'}
        placeholder="Write..."
      />
    </TextEditorContainer>
  );
};

export default TextEditor;
