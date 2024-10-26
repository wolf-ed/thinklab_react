import { TextEditor } from '../../TextEditor';

interface ControlledTextEditorPropsInterface {
  content: string;
  updateContent: (content: string) => void;
  componentKey: string;
}

export const ControlledTextEditor = ({
  updateContent,
  content,
  componentKey,
}: ControlledTextEditorPropsInterface) => {
  return (
    <TextEditor
      textPayload={content}
      componentKey={componentKey}
      setTextEditorValue={updateContent}
      reset={false}
    />
  );
};
