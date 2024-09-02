import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 60vh;
  min-height: 30rem;
  background-color: #f0f0f0;
  flex-direction: row;
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

export const ResizableBox = styled('div')`
  min-width: 30%;
  max-width: 70%;
  width: 40%;
  resize: horizontal;
  overflow: auto;
  border: 1px solid #ccc;
  max-height: 90vh;
`;

export const OutputLogContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const ResizableContainer = styled('div')`
  overflow: auto;
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

export const BoxHeader = styled.div`
  display: flex;
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
