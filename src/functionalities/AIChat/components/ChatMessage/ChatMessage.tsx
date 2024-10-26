import { useEffect, useRef, forwardRef } from 'react';
import Typed from 'typed.js';
import { marked } from 'marked';
import { ChatMessageStyled } from './ChatMessage.styles';
import { ChatMessageInterface } from '../../AIChat';

export interface ChatMessagePropsInterface {
  message: ChatMessageInterface;
  isLastMessage: boolean;
  isLoading?: boolean;
}

export const ChatMessage = forwardRef<
  HTMLDivElement,
  ChatMessagePropsInterface
>(({ message, isLastMessage, isLoading }, ref) => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);
  const isFromGemini = message.type === 'GEMINI';

  useEffect(() => {
    if (isFromGemini && isLastMessage && !isLoading && el.current) {
      if (typed.current) {
        typed.current.destroy();
      }

      const markdownToHtml = marked(message.content);
      typed.current = new Typed(el.current, {
        strings: [markdownToHtml as string],
        typeSpeed: 20,
        backSpeed: 30,
        backDelay: 500,
        startDelay: 0,
        loop: false,
        smartBackspace: true,
        showCursor: false,
        contentType: 'html',
        onComplete: (self) => {
          if (self.cursor) {
            self.cursor.remove();
          }
        },
      });
    } else if (!isFromGemini || (!isLastMessage && !isLoading)) {
      if (typed.current) {
        typed.current.destroy();
        typed.current = null;
      }
      if (el.current) {
        el.current.innerHTML = message.content;
      }
    } else if (isLoading) {
      if (typed.current) {
        typed.current.destroy();
      }
      typed.current = new Typed(el.current, {
        strings: [message.content + '...'],
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 100,
        startDelay: 0,
        loop: true,
        smartBackspace: true,
        showCursor: false,
        cursorChar: '|',
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [message, isLastMessage, isLoading]);

  return (
    <ChatMessageStyled position={isFromGemini ? 'left' : 'right'} ref={ref}>
      <span ref={el} className="typed-text"></span>
    </ChatMessageStyled>
  );
});
