import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { DraggableProvided } from 'react-beautiful-dnd';

// LOCAL
import { PostItemInterface, EditorTypes } from '../../types';
import { ItemTitleTextFieldStyled } from './EditorItemComponent.styles';
import { CodeSandbox } from '../../../CodeSandbox/CodeSandbox';
import { ControlledTextEditor } from '../../../TextEditor/components/ControlledTextEditor/ControlledTextEditor';
import { App_Colors } from '../../../../styles/globalStyles';
import { MathEditor } from '../../../../components/MathComponents/MathEditor';
import { getItemTypeColor } from '../../utils';

export interface EditorItemPropsInterface {
  provided: DraggableProvided;
  item: PostItemInterface;
  toggleAccordion: (id: string) => void;
  handleItemTitleChange: (id: string, newTitle: string) => void;
  handleDeleteItem: (id: string) => void;
  isAuth?: boolean;
  updateContent: (content: string) => void;
}

export const EditorItemComponent = ({
  provided,
  item,
  toggleAccordion,
  handleItemTitleChange,
  handleDeleteItem,
  isAuth = false,
  updateContent,
}: EditorItemPropsInterface) => {
  const isCodeEditor = item.type === EditorTypes.CODE;
  const textColor = isCodeEditor ? App_Colors.contrastColor : App_Colors.text;

  const renderItemByCorrectType = (itemType: EditorTypes) => {
    switch (itemType) {
      case EditorTypes.CODE:
        return (
          <CodeSandbox
            content={item.content}
            isAuth={isAuth}
            updateContent={updateContent}
          />
        );
      case EditorTypes.MATH:
        return (
          <MathEditor
            key={item.id}
            initialContent={item.content}
            updateContent={updateContent}
          />
        );
      case EditorTypes.TEXT:
        return (
          <ControlledTextEditor
            content={item.content}
            key={item.id}
            updateContent={updateContent}
          />
        );
      default:
        return <div>No component available for this type</div>;
    }
  };

  return (
    <Accordion
      ref={provided.innerRef}
      {...provided.draggableProps}
      expanded={item.expanded}
      sx={{
        margin: '1rem auto',
        backgroundColor: getItemTypeColor(item.type),
        minHeight: 'fit-content',
      }}
      onChange={() => toggleAccordion(item.id)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        {...provided.dragHandleProps}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteItem(item.id);
          }}
          edge="start"
          size="small"
          sx={{
            color: textColor,
          }}
        >
          <DragIndicatorIcon
            sx={{ cursor: 'grab' }}
            onMouseDown={() => (document.body.style.cursor = 'grabbing')}
            onMouseUp={() => (document.body.style.cursor = 'grab')}
          />
        </IconButton>
        <ItemTitleTextFieldStyled
          variant="outlined"
          value={item.title}
          onChange={(event) =>
            handleItemTitleChange(item.id, event.target.value)
          }
          placeholder="Write title..."
          InputProps={{
            style: {
              height: '56px',
              color: textColor,
            },
            inputProps: {
              maxLength: 60,
            },
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteItem(item.id);
          }}
          edge="end"
          size="small"
          sx={{
            color: textColor,
            marginRight: 3,
          }}
        >
          <DeleteIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          minHeight: 'fit-content',
          overflow: 'hidden',
        }}
      >
        {renderItemByCorrectType(item.type)}
      </AccordionDetails>
    </Accordion>
  );
};
