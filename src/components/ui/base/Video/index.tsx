import Text from '@/components/ui/base/Text';
import type { VideoProps } from './types';

export default function Video({ url, alt }: VideoProps) {
  return (
    <video src={url} controls>
      <Text>{alt}</Text>
    </video>
  );
}
