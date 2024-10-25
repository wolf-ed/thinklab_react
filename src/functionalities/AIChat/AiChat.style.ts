import styled from '@emotion/styled';

export const ContainerStyled = styled('div')({
  position: 'relative',
  maxWidth: '95%',
  margin: 'auto',
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderRadius: '10px',
});

export const TextInputAndButtonContainerStyled = styled('div')({
  minWidth: '95%',
  width: '95%',
  maxWidth: '100%',
  margin: 'auto',
  padding: '20px',
  display: 'flex',
  // position: 'fixed',
  bottom: '1rem',
  left: '2.5%',
  right: '2.5%',
  flexDirection: 'row',
  backgroundColor: '#f3f4f6',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  alignItems: 'center',
});

export const AllMessagesContainerStyled = styled('div')<{
  hasMessages: boolean;
}>`
  flex: 1;
  width: '100%';
  overflow-y: ${({ hasMessages }) => (hasMessages ? 'scroll' : 'hidden')};
  margin: 0;
  padding: '0 20px';
  border-radius: '10px';
`;
