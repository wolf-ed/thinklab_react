import styled from '@emotion/styled';

export const ChatMessageStyled = styled('div')<{ position: 'right' | 'left' }>`
  width: auto;
  width: 80%;
  max-width: 90%;

  padding: 10px;
  margin: 1rem;
  margin-right: ${({ position }) => (position === 'right' ? '0' : 'auto')};
  margin-left: ${({ position }) => (position === 'right' ? 'auto' : '0')};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ position }) =>
    position === 'right' ? 'transparent' : '#f0f0f0'};
  align-self: ${({ position }) =>
    position === 'right' ? 'flex-end' : 'flex-start'};
  text-align: ${({ position }) => position};
  display: flex;
  flex-direction: column;
`;
