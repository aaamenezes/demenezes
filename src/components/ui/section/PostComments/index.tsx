import Wrapper from '@/components/ui/container/Wrapper';
import { useEffect } from 'react';

export default function PostComments() {
  useEffect(() => {
    // function disqus_config() {
    //   this.page.url = window.location.href
    //   this.page.identifier = window.location.pathname
    // }

    const script = document.createElement('script');
    script.src = 'https://demenezes.disqus.com/embed.js';
    script.setAttribute('data-timestamp', (+new Date()).toString());
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <Wrapper width="lg">
      <div id="disqus_thread" />
      <noscript>
        Please enable JavaScript to view the comments powered by Disqus.
      </noscript>
    </Wrapper>
  );
}
