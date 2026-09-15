import { createContext, useContext } from 'react';
import type { PostCardContextValue } from './types';

export const PostCardContext = createContext<PostCardContextValue | null>(null);

export function usePostCardContext() {
  const context = useContext(PostCardContext);

  if (!context) {
    throw new Error(
      'usePostCardContext must be used within a PostCardProvider'
    );
  }

  return context;
}
