import Section from '@/components/designSysyem/Section';
import Video from '.';

export default function VideoStory() {
  return (
    <>
      <Section heading="Video" width={30}>
        <Video
          url="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
          alt="Example video"
        />
      </Section>
      <Section heading="Video" width={50}>
        <Video
          url="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
          alt="Example video"
        />
      </Section>
      <Section heading="Video" width={100}>
        <Video
          url="https://static.videezy.com/system/resources/previews/000/012/979/original/record_player_011.mp4"
          alt="Example video"
        />
      </Section>
    </>
  );
}
