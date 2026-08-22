import type {
  AboutPageProps,
  ContactPageProps,
  PostProps,
  PostSummaryProps,
} from '@/types';

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
