import TextEditor from '../../TextEditor';

interface ControlledTextEditorPropsInterface {
  content: string;
  updateContent: (content: string) => void;
}

export const ControlledTextEditor = ({
  updateContent,
  content,
}: ControlledTextEditorPropsInterface) => {
  return (
    <TextEditor
      textPayload={content}
      setTextEditorValue={updateContent}
      reset={false}
    />
  );
};
