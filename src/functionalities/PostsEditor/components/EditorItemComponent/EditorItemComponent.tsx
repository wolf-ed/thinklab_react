import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
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
  isAuth?: boolean;
  updateContent: (content: string) => void;
}

export const EditorItemComponent = ({
  provided,
  item,
  toggleAccordion,
  handleItemTitleChange,
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
        {...provided.dragHandleProps}
        expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            height: '100%',
            margin: 'auto',
            fontWeight: '700',
            color: textColor,
          }}
        >
          {item.type}
        </div>
        <ItemTitleTextFieldStyled
          variant="outlined"
          value={item.title}
          onChange={(event) =>
            handleItemTitleChange(item.id, event.target.value)
          }
          placeholder="Write tittle..."
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
