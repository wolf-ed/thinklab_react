import { PostContentDecodedInterface } from './types';

export const decodePostContent = (
  jsonContent: string
): PostContentDecodedInterface[] | null => {
  try {
    return JSON.parse(jsonContent);
  } catch (e) {
    console.error('Failed to decode content', e);
    return null;
  }
};
