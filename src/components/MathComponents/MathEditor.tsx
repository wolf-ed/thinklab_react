import React, { useEffect, useRef, useState } from 'react';
import { MathfieldElement } from 'mathlive';

interface MathEditorProps {
  initialContent: string;
  updateContent: (value: string) => void;
}

export const MathEditor: React.FC<MathEditorProps> = ({
  initialContent = '',
  updateContent,
}) => {
  const mathFieldRef = useRef<HTMLDivElement | null>(null);
  const mathFieldInstance = useRef<MathfieldElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!mathFieldRef.current) return;

    if (!mathFieldInstance.current) {
      const mathField = new MathfieldElement();
      mathField.value = initialContent;
      mathField.addEventListener('input', () => updateContent(mathField.value));
      mathFieldRef.current.appendChild(mathField);
      mathFieldInstance.current = mathField;
    } else {
      mathFieldInstance.current.value = initialContent;
    }

    if (isFocused) {
      mathFieldInstance.current.focus();
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        mathFieldRef.current &&
        !mathFieldRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (mathFieldRef.current && mathFieldInstance.current) {
        mathFieldRef.current.removeChild(mathFieldInstance.current);
        mathFieldInstance.current = null;
      }
    };
  }, [initialContent, updateContent, isFocused]);

  return (
    <div
      ref={mathFieldRef}
      onClick={() => setIsFocused(true)}
      style={{ cursor: 'text' }}
    ></div>
  );
};
