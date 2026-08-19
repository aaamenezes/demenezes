import Heading from '@/components/ui/base/Heading';
import Text from '@/components/ui/base/Text';
import Wrapper from '@/components/ui/container/Wrapper';
import HighlightText from '@/components/ui/section/AboutHighlightText';
import style from './styles.module.css';

/**
 * Evento do google
 * https://events.withgoogle.com/google-em-poa/
 *
 * Bruno Souza
 * https://twitter.com/brjavaman
 *
 * Yara Senger
 * https://twitter.com/yarasenger
 */

export default function AboutStory({
  historyTitle,
  historyText,
}: {
  historyTitle: string;
  historyText: string;
}) {
  const firstParagraph = historyText.split('\n')[0];
  const remainingText = historyText
    .split('\n')
    .slice(1)
    .map((text, index) =>
      index % 2 === 0 ? (
        <HighlightText key={text}>{text}</HighlightText>
      ) : (
        <Wrapper width="md" key={text}>
          <Text lineHeight="md">{text}</Text>
        </Wrapper>
      )
    );

  return (
    <>
      <Wrapper width="md">
        <Heading className={style.storyTitle}>{historyTitle}</Heading>
        <Text lineHeight="md">{firstParagraph}</Text>
      </Wrapper>
      {remainingText}
    </>
  );
}
