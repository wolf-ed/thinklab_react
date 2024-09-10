import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// LOCAL
import { decodePostContent } from '../utils';
import { PostContentDecodedInterface } from '../types';
import { PostInterfaceEncoded } from '../../TextAndCodeEditor/types';
import { DisplayEditorItemComponent } from '../components/PostContentItemComponent/PostContentItemComponent';
import { PostTitleStyled } from './PostTile.styles';

interface PostTileProps {
  postItem: PostInterfaceEncoded;
}

export const PostTile: React.FC<PostTileProps> = ({ postItem }) => {
  const contentItems: PostContentDecodedInterface[] | null = decodePostContent(
    postItem.content
  );
  if (!contentItems)
    return (
      <Typography variant="body1" color="error" textAlign="center">
        Error reading post
      </Typography>
    );
  return (
    <Card
      key={postItem.id}
      raised
      sx={{ minWidth: '90vw', maxWidth: 'fit-content' }}
    >
      <CardContent>
        <PostTitleStyled>{postItem.title}</PostTitleStyled>
        {contentItems?.map((postContentItem: PostContentDecodedInterface) => {
          return (
            <DisplayEditorItemComponent
              title={postContentItem.title}
              postContentItem={postContentItem.content}
              type={postContentItem.type}
              key={postContentItem.id}
            />
          );
        })}
        <Typography variant="overline" display="block" gutterBottom>
          Posted by: {postItem.userName}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption" display="block" color="text.secondary">
          Visibility: {postItem.visibility}
        </Typography>
      </CardContent>
    </Card>
  );
};