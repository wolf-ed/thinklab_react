import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

// LOCAL
import { decodePostContent } from '../utils';
import { PostContentDecodedInterface } from '../types';
import { PostInterfaceEncoded } from '../../TextAndCodeEditor/types';
import { DisplayEditorItemComponent } from '../components/PostContentItemComponent/PostContentItemComponent';

interface PostTileProps {
  postItem: PostInterfaceEncoded;
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostTile: React.FC<PostTileProps> = ({ postItem }) => {
  const contentItems: PostContentDecodedInterface[] | null = decodePostContent(
    postItem.content
  );
  if (!contentItems) return <>corrupted post</>;
  return (
    <Card
      key={postItem.id}
      raised
      sx={{ minWidth: '90vw', maxWidth: 'fit-content' }}
    >
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {postItem.title}
        </Typography>
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
