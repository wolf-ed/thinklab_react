import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';
import { useSelector } from 'react-redux';

// LOCAL
import { EditorTypes } from './types';
import { createId } from '../../utils/utils';
import { ItemCodeOrTextInterface } from './types';
import { CustomDragAndDrop } from '../../components/CustomDragAndDrop/CustomDragAndDrop';
import { EditorItemComponent } from './components/EditorItemComponent/EditorItemComponent';
import {
  ContainerStyled,
  ButtonsContainerStyled,
  FullWidthTextFieldStyled,
} from './TextAndCodeEditor.styles';
import { App_Colors } from '../../styles/globalStyles';
import { CustomToolTip } from '../../components/CustomToolTip/CustomToolTip';
import { userSelectors } from '../../store/user/userSelectors';

export const TextAndCodeEditor = () => {
  const isAuth = useSelector(userSelectors.getIsAuth);
  const [title, setTitle] = useState('');
  const [allItems, setAllItems] = useState<ItemCodeOrTextInterface[]>([]);

  const handleAddItem = (type: EditorTypes.CODE | EditorTypes.TEXT) => {
    setAllItems([
      ...allItems,
      {
        type,
        content: '',
        id: createId(),
        index: allItems.length + 1,
        expanded: false,
        title: '',
      },
    ]);
  };
  const toggleAccordion = (id: string) => {
    setAllItems(
      allItems.map((el) =>
        el.id === id ? { ...el, expanded: !el.expanded } : el
      )
    );
  };
  const handleItemTitleChange = (id: string, newTitle: string) => {
    setAllItems(
      allItems.map((el) => (el.id === id ? { ...el, title: newTitle } : el))
    );
  };
  const handleItemContentChange = (id: string, newContent: string) => {
    setAllItems(
      allItems.map((el) => (el.id === id ? { ...el, content: newContent } : el))
    );
  };
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(allItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAllItems(items);
  };

  const titleInput = (
    <FullWidthTextFieldStyled
      variant="outlined"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      placeholder="Enter Title Here"
      InputProps={{ style: { height: '56px', marginBottom: '1rem' } }}
    />
  );
  useEffect(() => {
    console.log('texcodeeditor_isAuth', isAuth);
  }, []);
  const itemsList = (
    <DragDropContext onDragEnd={handleDragEnd}>
      <CustomDragAndDrop droppableId="items">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {allItems.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <EditorItemComponent
                      isAuth={isAuth}
                      provided={provided}
                      item={item}
                      toggleAccordion={toggleAccordion}
                      handleItemTitleChange={handleItemTitleChange}
                      updateContent={(newContent: string) => {
                        handleItemContentChange(item.id, newContent);
                      }}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </CustomDragAndDrop>
    </DragDropContext>
  );

  const buttons = (
    <ButtonsContainerStyled>
      <CustomToolTip
        title={'Add a Text Editor Item'}
        content={
          <Button
            onClick={() => handleAddItem(EditorTypes.TEXT)}
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: App_Colors.textBackground,
              color: App_Colors.text,
              border: '1px solid white',
            }}
            startIcon={<DriveFileRenameOutlineIcon />}
          >
            Text
          </Button>
        }
      />
      <CustomToolTip
        title={'Add a Code Editor Item'}
        content={
          <Button
            onClick={() => handleAddItem(EditorTypes.CODE)}
            variant="contained"
            sx={{ backgroundColor: App_Colors.dark, border: '1px solid white' }}
            startIcon={<CodeIcon />}
          >
            Code
          </Button>
        }
      />
    </ButtonsContainerStyled>
  );

  return (
    <ContainerStyled>
      {titleInput}
      {itemsList}
      {buttons}
    </ContainerStyled>
  );
};
