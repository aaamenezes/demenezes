import Prism from 'prismjs';
import { useEffect } from 'react';
import { PostProps } from '../../../../types';
import StructuredTextDatoCMS from '../../container/StructuredTextDatoCMS';
import Wrapper from '../../container/Wrapper';
import style from './styles.module.css';

export default function PostContent({ post }: { post: PostProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Wrapper className={style.postContent} width="lg" spacing={0}>
      <StructuredTextDatoCMS data={post.data.post.content} />
    </Wrapper>
  );
}
