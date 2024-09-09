import TextEditor from '../../TextEditor';

interface ControlledTextEditorPropsInterface {
  updateContent: (content: string) => void;
}

export const ControlledTextEditor = ({
  updateContent,
}: ControlledTextEditorPropsInterface) => {
  return <TextEditor setTextEditorValue={updateContent} reset={false} />;
};
