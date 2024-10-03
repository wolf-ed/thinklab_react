import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// LOCAL
import { decodePostContent } from '../utils';
import { PostContentDecodedInterface } from '../types';
import { PostInterfaceEncoded } from '../../PostsEditor/types';
import { DisplayEditorItemComponent } from '../components/PostContentItemComponent/PostContentItemComponent';
import { PostTitle } from './PostTitle/PostTitle';

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
      sx={{ minWidth: '90%', maxWidth: '90%', width: '90vw', margin: 'auto' }}
    >
      <CardContent>
        <PostTitle
          title={postItem.title}
          postId={postItem.id}
          postOwnerId={postItem.userId}
        />
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
