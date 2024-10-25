import { useState, useEffect, useRef } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { TextField } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGemini } from '../../api/useGemini/useGemini';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { ChatMessage } from './components/ChatMessage/ChatMessage';
import { getUserId } from '../../store/user/userSelectors';
import {
  ContainerStyled,
  TextInputAndButtonContainerStyled,
  AllMessagesContainerStyled,
} from './AiChat.style';

export interface ChatMessageInterface {
  content: string;
  order: number;
  type: 'GEMINI' | 'USER';
}

export const AIChat = () => {
  const [conversation, setConversation] = useState<ChatMessageInterface[]>([]);
  const [userMessage, setUserMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const sendMessageAndGetResponse = useGemini();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const userId = useSelector(getUserId);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  const handleOnSendMessage = async () => {
    setIsLoading(true);
    setUserMessage('');
    if (userMessage.trim()) {
      const newUserMessage: ChatMessageInterface = {
        content: userMessage,
        order: conversation.length,
        type: 'USER',
      };
      setConversation([...conversation, newUserMessage]);
      const response = await sendMessageAndGetResponse(userMessage);
      const newAIResponse: ChatMessageInterface = {
        content: response,
        order: conversation.length + 1,
        type: 'GEMINI',
      };
      setConversation([...conversation, newUserMessage, newAIResponse]);
      setUserMessage('');
    }
    setIsLoading(false);
  };

  let buttonTooltip = userId ? 'ask gemini!' : 'Log in';
  buttonTooltip =
    userId && (isLoading || !userMessage)
      ? 'Write your message!'
      : buttonTooltip;

  return (
    <ContainerStyled>
      <h2>
        <AutoAwesomeIcon />
        Gemini Pro
      </h2>
      <AllMessagesContainerStyled hasMessages={conversation.length > 0}>
        {conversation.map((message, index) => (
          <ChatMessage
            key={`${message.order}-${message.type}`}
            message={message}
            isLastMessage={index === conversation.length - 1}
            // ref={null}
            ref={index === conversation.length - 1 ? endOfMessagesRef : null}
          />
        ))}
        <div ref={endOfMessagesRef}>
          {isLoading && (
            <ChatMessage
              key={`loading...`}
              message={{
                order: 1000000,
                content: '......',
                type: 'GEMINI',
              }}
              isLastMessage={true}
              isLoading={true}
              ref={null}
            />
          )}
        </div>
      </AllMessagesContainerStyled>
      <TextInputAndButtonContainerStyled>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Write your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleOnSendMessage()}
        />
        <CustomButton
          disabled={isLoading || !userMessage || !userId}
          onClick={handleOnSendMessage}
          tooltipText={buttonTooltip}
          // buttonTitle="Send"
          endIcon={isLoading ? <CircularProgress /> : <AutoAwesomeIcon />}
        />
      </TextInputAndButtonContainerStyled>
    </ContainerStyled>
  );
};
