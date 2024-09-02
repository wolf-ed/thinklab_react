import styled from '@emotion/styled';
import { Paper } from '@mui/material';

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

interface ResizableBoxProps {
  height?: string;
  width: string; // Width is required
  isResizable: boolean;
  resizeDirection?: 'horizontal' | 'vertical';
}

export const ResizableBox = styled('div')<ResizableBoxProps>(
  ({ height, width, isResizable, resizeDirection }) => ({
    minWidth: '50%',
    maxWidth: '70%',
    width: width,
    height: height ?? 'auto',
    resize: isResizable ? resizeDirection : 'none',
    overflow: 'auto',
    border: '1px solid #ccc',
    maxHeight: '90vh',
    overflowY: 'hidden',
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
  max-height: '30px';
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
