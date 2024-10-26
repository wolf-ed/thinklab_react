import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const ContainerStyled = styled.div`
  .quill {
    border: 1px solid #ccc;
    height: 400px;
  }
`;

interface CustomTextEditorPropsInterface {
  textPayload: string;
  setTextEditorValue: (newValue: string) => void;
  componentKey: string;
  reset?: boolean;
}

export const TextEditor = ({
  textPayload,
  setTextEditorValue,
  componentKey,
}: CustomTextEditorPropsInterface) => {
  const quillRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ['clean'],
              ['link', 'video'],
            ],
          },
        },
      });

      quillInstance.current.on('text-change', () => {
        const html = quillInstance.current?.root.innerHTML;
        setTextEditorValue(html || '');
      });
    }
  }, []);

  useEffect(() => {
    if (quillInstance.current && textPayload) {
      quillInstance.current.clipboard.dangerouslyPasteHTML(textPayload);
    }
  }, []);

  useEffect(() => {
    if (
      quillInstance.current &&
      textPayload !== quillInstance.current.root.innerHTML
    ) {
      quillInstance.current.clipboard.dangerouslyPasteHTML(textPayload);
    }
  }, [textPayload]);

  return (
    <ContainerStyled key={componentKey}>
      <div key={componentKey} ref={quillRef} className="quill" />
    </ContainerStyled>
  );
};
