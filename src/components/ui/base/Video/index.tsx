import Text from '@/components/ui/base/Text';

export default function Video({ url, alt }: { url: string; alt: string }) {
  return (
    <video src={url} controls>
      <Text>{alt}</Text>
    </video>
  );
}
