import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';
import { useSelector } from 'react-redux';
import SaveAsIcon from '@mui/icons-material/SaveAs';

// LOCAL
import { EditorTypes } from './types';
import { createId } from '../../utils/utils';
import { PostItemInterface } from './types';
import { CustomDragAndDrop } from '../../components/CustomDragAndDrop/CustomDragAndDrop';
import { EditorItemComponent } from './components/EditorItemComponent/EditorItemComponent';
import {
  ContainerStyled,
  ButtonsContainerStyled,
  FullWidthTextFieldStyled,
} from './PostsEditor.styles';
import { App_Colors } from '../../styles/globalStyles';
import { CustomToolTip } from '../../components/CustomToolTip/CustomToolTip';
import { userSelectors } from '../../store/user/userSelectors';
import { SavePostPropsInterface } from './types';
import { useSavePost } from './useSavePost';
import { ENV_IS_PROD } from '../../envConsts';
import { getItemTypeColor } from './utils';
import { PostTile } from '../Posts/PostTile/PostTile';
import { PostInterfaceEncoded } from './types';
import { CustomButtonWithDialog } from '../../components/CustomButtonWithDialog/CustomButtonWithDialog';
import { PostInterface } from '../../store/posts/postsSlice';
import { decodePostContent } from '../Posts/utils';
import { PostContentDecodedInterface } from '../Posts/types';

export interface PostsEditorPropsInterface {
  post?: PostInterface;
}

export const PostsEditor = ({ post }: PostsEditorPropsInterface) => {
  const isAuth = useSelector(userSelectors.getIsAuth);
  const [title, setTitle] = useState(post ? post.title : '');
  const [allItems, setAllItems] = useState<PostItemInterface[]>([]);
  const { savePost } = useSavePost();

  useEffect(() => {
    if (post) {
      const postContent: PostContentDecodedInterface[] | null =
        decodePostContent(post.content);
      if (postContent) {
        setAllItems(postContent);
      }
    }
  }, []);

  const handleAddItem = (type: EditorTypes) => {
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
  const handleDeleteItem = (id: string) => {
    setAllItems(allItems.filter((el) => el.id !== id));
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

  const handleSave = () => {
    const postToSave: SavePostPropsInterface = {
      ...post,
      title: title,
      content: JSON.stringify(allItems),
      visibility: 'public',
    };
    savePost(postToSave);
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
                      key={item.id}
                      isAuth={isAuth}
                      provided={provided}
                      item={item}
                      toggleAccordion={toggleAccordion}
                      handleItemTitleChange={handleItemTitleChange}
                      handleDeleteItem={handleDeleteItem}
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

  const conditionIfUserIsAuthAndIsNotProd =
    title || allItems.length > 0
      ? 'Save post'
      : 'You need a title and at least 1 item!';

  const addTextButton = (
    <CustomToolTip title={'Add a Text Editor Item'}>
      <Button
        onClick={() => handleAddItem(EditorTypes.TEXT)}
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: getItemTypeColor(EditorTypes.TEXT),
          color: App_Colors.text,
          border: '1px solid white',
        }}
        startIcon={<DriveFileRenameOutlineIcon />}
      >
        Text
      </Button>
    </CustomToolTip>
  );

  const addCodeButton = (
    <CustomToolTip title={'Add a Code Editor Item'}>
      <Button
        onClick={() => handleAddItem(EditorTypes.CODE)}
        variant="contained"
        sx={{
          backgroundColor: getItemTypeColor(EditorTypes.CODE),
          border: '1px solid white',
        }}
        startIcon={<CodeIcon />}
      >
        Code
      </Button>
    </CustomToolTip>
  );

  const addMathButton = (
    <CustomToolTip title={'Add a Code Editor Item'}>
      <Button
        onClick={() => handleAddItem(EditorTypes.MATH)}
        variant="contained"
        sx={{
          backgroundColor: getItemTypeColor(EditorTypes.MATH),
          border: '1px solid white',
        }}
        startIcon={<CodeIcon />}
      >
        Math
      </Button>
    </CustomToolTip>
  );

  const displayResult = (
    <CustomButtonWithDialog
      buttonProps={{
        buttonTitle: 'See Final Post',
      }}
    >
      <PostTile
        postItem={
          {
            title: title,
            content: JSON.stringify(allItems),
            visibility: 'public',
          } as PostInterfaceEncoded
        }
      />
    </CustomButtonWithDialog>
  );

  const buttons = (
    <ButtonsContainerStyled>
      {addTextButton}
      {addCodeButton}
      {addMathButton}
      {displayResult}
      <CustomToolTip
        title={
          isAuth && !ENV_IS_PROD
            ? conditionIfUserIsAuthAndIsNotProd
            : 'You need to log in!'
        }
      >
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={!title || allItems.length === 0 || ENV_IS_PROD || !isAuth}
          sx={{
            backgroundColor: App_Colors.secondColor,
            color: App_Colors.mainColor,
            border: '1px solid white',
          }}
          startIcon={<SaveAsIcon />}
        >
          Save
        </Button>
      </CustomToolTip>
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
