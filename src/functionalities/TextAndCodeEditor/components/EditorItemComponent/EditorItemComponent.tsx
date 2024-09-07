import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { DraggableProvided } from 'react-beautiful-dnd';

// LOCAL
import { ItemCodeOrTextInterface, EditorTypes } from '../../types';
import { ItemTitleTextFieldStyled } from './EditorItemComponent.styles';
import { CodeSandbox } from '../../../CodeSandbox/CodeSandbox';
import { ControlledTextEditor } from '../../../TextEditor/components/ControlledTextEditor/ControlledTextEditor';
import { App_Colors } from '../../../../styles/globalStyles';

export interface EditorItemPropsInterface {
  provided: DraggableProvided;
  item: ItemCodeOrTextInterface;
  toggleAccordion: (id: string) => void;
  handleItemTitleChange: (id: string, newTitle: string) => void;
  isAuth?: boolean;
}

export const EditorItemComponent = ({
  provided,
  item,
  toggleAccordion,
  handleItemTitleChange,
  isAuth = false,
}: EditorItemPropsInterface) => {
  const isCodeEditor = item.type === EditorTypes.CODE;
  const textColor = isCodeEditor ? App_Colors.contrastColor : App_Colors.text;
  return (
    <Accordion
      ref={provided.innerRef}
      {...provided.draggableProps}
      expanded={item.expanded}
      sx={{
        margin: '1rem auto',
        backgroundColor: isCodeEditor
          ? App_Colors.dark
          : App_Colors.textBackground,
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
          {item.type === EditorTypes.CODE ? 'Code' : 'Text'}
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
        />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          minHeight: 'fit-content',
          overflow: 'hidden',
        }}
      >
        {item.type === EditorTypes.CODE ? (
          <CodeSandbox isAuth={isAuth} />
        ) : (
          <ControlledTextEditor />
        )}
      </AccordionDetails>
    </Accordion>
  );
};
