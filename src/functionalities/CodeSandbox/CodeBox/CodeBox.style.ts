import styled from '@emotion/styled';
import { Paper } from '@mui/material';

// LOCAL
import { Breakpoints_Screen } from '../../../styles/globalStyles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-color: #f0f0f0;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const BottomRow = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface CodeboxContainerStyledPropsInterface {
  height?: string;
  width: string;
  isResizable: boolean;
  resizeDirection?: 'horizontal' | 'vertical';
}

export const CodeboxContainerStyled = styled(
  'div'
)<CodeboxContainerStyledPropsInterface>(
  ({ height, width, isResizable, resizeDirection }) => ({
    position: 'relative',
    width: width,
    height: height ?? 'fit-content',
    maxHeight: 'fit-content',
    minHeight: '5rem',
    resize: isResizable ? resizeDirection : 'none',
    overflow: 'auto',
    border: '1px solid #ccc',

    paddingBottom: '0.5rem',
    overflowY: 'hidden',
    maxWidth: '95vw',
    [Breakpoints_Screen.M.DOWN]: {
      width: '100%',
      paddingBottom: '2.5rem',
    },
    '& *': {
      '&::-webkit-scrollbar': {
        width: '0.8rem',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#90a4ae',
        borderRadius: '4px',
      },
    },
  })
);

export const OutputLogContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const ResizableContainer = styled('div')`
  overflow: auto;
  width: 50%;
  max-width: 50%;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

export const BoxHeader = styled.div`
  display: flex;
  height: '30px';
  height: '10%';
  max-height: '10%';
  position: 'sticky';
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #424242;
  color: white;
`;

export const StyledPaperCodeOutputs = styled(Paper)`
  margin: 8px;
  height: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  height: 50%;
  overflow: auto;
`;
