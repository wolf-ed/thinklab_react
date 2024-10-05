import { useSelector } from 'react-redux';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

//LOCAL
import { ROUTES_ENUM } from '../../../../navigation/const';
import {
  TitleContainerStyled,
  EditButtonContainerStyled,
  EditButtonStyled,
  PostTitleStyled,
} from './PostTitle.styles';
import { getUserId } from '../../../../store/user/userSelectors';
import { useNavigate } from 'react-router-dom';
import { CustomToolTip } from '../../../../components/CustomToolTip/CustomToolTip';

interface PostTitlePropsInterface {
  title: string;
  postId?: string;
  postOwnerId?: string;
}

export const PostTitle = ({
  title,
  postId,
  postOwnerId,
}: PostTitlePropsInterface) => {
  const navigate = useNavigate();
  const userId = useSelector(getUserId);
  const userOwnsThisPost = userId && postOwnerId && userId === postOwnerId;
  const postTitle = <PostTitleStyled>{title}</PostTitleStyled>;
  const buttonsIfPostIsCurrentUser = userOwnsThisPost ? (
    <EditButtonContainerStyled
      onClick={() => {
        navigate(ROUTES_ENUM.POST_EDIT + `${postId}`);
      }}
    >
      <CustomToolTip title="Edit this post">
        <EditButtonStyled>
          <DriveFileRenameOutlineIcon />
        </EditButtonStyled>
      </CustomToolTip>
    </EditButtonContainerStyled>
  ) : (
    <></>
  );

  return (
    <TitleContainerStyled>
      {buttonsIfPostIsCurrentUser}
      {postTitle}
    </TitleContainerStyled>
  );
};
