import type { FigureProps } from './types';

function Root({ children }: FigureProps) {
  return <figure>{children}</figure>;
}

Root.displayName = 'Figure';

export default Root;
