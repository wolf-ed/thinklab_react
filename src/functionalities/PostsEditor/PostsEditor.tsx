import { useEffect, useState, useReducer } from 'react';
import { Button } from '@mui/material';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CodeIcon from '@mui/icons-material/Code';
import { useSelector } from 'react-redux';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PreviewIcon from '@mui/icons-material/Preview';

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
  PostContainerStyled,
  AiContainerStyled,
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
import { AIChat } from '../AIChat/AIChat';

export interface PostsEditorPropsInterface {
  post?: PostInterface;
}

type PostItemAction =
  | {
      type: 'updateOneItem';
      id: string;
      propertyName: keyof PostItemInterface;
      value: any;
    }
  | { type: 'setAllItems'; payload: Record<string, PostItemInterface> }
  | { type: 'addItem'; item: PostItemInterface }
  | { type: 'removeItem'; id: string };

function postItemReducer(
  state: Record<string, PostItemInterface>,
  action: PostItemAction
): Record<string, PostItemInterface> {
  switch (action.type) {
    case 'updateOneItem':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.propertyName]: action.value,
        },
      };
    case 'setAllItems':
      return action.payload;
    case 'addItem':
      return { ...state, [action.item.id]: action.item };
    case 'removeItem':
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export const PostsEditor = ({ post }: PostsEditorPropsInterface) => {
  const isAuth = useSelector(userSelectors.getIsAuth);
  const [title, setTitle] = useState(post ? post.title : '');
  const [allItems, dispatch] = useReducer(postItemReducer, {});
  const { savePost } = useSavePost();

  useEffect(() => {
    if (post) {
      const postContent: PostItemInterface[] | null = decodePostContent(
        post.content
      );
      const itemsMap = postContent
        ? postContent.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {})
        : {};
      dispatch({ type: 'setAllItems', payload: itemsMap });
    }
  }, [post]);

  const handleAddItem = (type: EditorTypes) => {
    const newItem = {
      id: createId(),
      type,
      content: '',
      title: '',
      expanded: false,
    };
    dispatch({ type: 'addItem', item: newItem });
  };

  const handleItemChange = (
    id: string,
    property: keyof PostItemInterface,
    value: any
  ) => {
    dispatch({ type: 'updateOneItem', id, propertyName: property, value });
  };

  const handleDeleteItem = (id: string) => {
    dispatch({ type: 'removeItem', id });
  };

  const toggleAccordion = (id: string) => {
    const currentExpandedState = allItems[id].expanded;
    handleItemChange(id, 'expanded', !currentExpandedState);
  };

  const handleItemTitleChange = (id: string, newTitle: string) => {
    handleItemChange(id, 'title', newTitle);
  };

  const handleItemContentChange = (id: string, newContent: string) => {
    handleItemChange(id, 'content', newContent);
  };
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const sourceIndex = Object.keys(allItems).indexOf(result.draggableId);
    const destinationIndex = Object.keys(allItems).indexOf(
      result.destination.droppableId
    );
    const itemsArray = Object.values(allItems);
    const [reorderedItem] = itemsArray.splice(sourceIndex, 1);
    itemsArray.splice(destinationIndex, 0, reorderedItem);
    const newItemsMap = itemsArray.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    dispatch({ type: 'setAllItems', payload: newItemsMap });
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
            {Object.values(allItems)
              .sort((a, b) => a.index - b.index)
              .map((item, index) => {
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
    title || Object.values(allItems).length > 0
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
    <CustomToolTip title={'Add a Math Editor Item'}>
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
        startIcon: <PreviewIcon />,
        buttonTitle: 'See',
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
          disabled={
            !title ||
            Object.values(allItems).length === 0 ||
            ENV_IS_PROD ||
            !isAuth
          }
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
      <PostContainerStyled>
        {titleInput}
        {itemsList}
        {buttons}
      </PostContainerStyled>
      <AiContainerStyled>
        <AIChat />
      </AiContainerStyled>
    </ContainerStyled>
  );
};
