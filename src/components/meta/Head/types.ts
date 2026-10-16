import type { AboutPageProps, ContactPageProps } from '@/types/pages';
import type { PostProps, PostSummaryProps } from '@/types/post';

export interface HeadProps {
  componentProps: {
    currentPosts?: PostSummaryProps[];
    currentPagination?: number;
    isLastPagination?: boolean;
    preview?: boolean;
    post?: PostProps;
    aboutPageContent?: AboutPageProps;
    contactContent?: ContactPageProps;
  };
}
