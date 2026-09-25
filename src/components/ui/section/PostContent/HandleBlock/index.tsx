import Quiz from '@/components/post/Quiz';
import TextBox from '@/components/post/TextBox';
import Figure from '@/components/ui/base/Figure';
import Video from '@/components/ui/base/Video';
import YouTube from '@/components/ui/base/YouTube';
import BlockQuote from '@/components/ui/block/BlockQuote';
import Table from '@/components/ui/block/Table';
import { parseCMSTable } from '@/external/datoCMS/parseCMSTable';
import { decode } from 'html-entities';
import styles from '../styles.module.css';
import type { HandleBlockProps } from './types';

export default function HandleBlock({ record }: HandleBlockProps) {
  const { __typename } = record;

  if (__typename === 'ImageRecord') {
    return (
      <Figure>
        <Figure.Image
          src={record.image.responsiveImage.src}
          width={record.image.width}
          height={record.image.height}
          alt={record.image.alt}
          className={styles.image}
        />
        {record.image.caption && (
          <Figure.Figcaption>{record.image.caption}</Figure.Figcaption>
        )}
      </Figure>
    );
  }

  if (__typename === 'ExternalVideoRecord') {
    return (
      <YouTube title={record.video.title} videoId={record.video.providerUid} />
    );
  }

  if (__typename === 'VideoRecord') {
    return <Video url={record.video.url} alt={record.video.alt} />;
  }

  if (__typename === 'TableRecord') {
    const { bodyRows, footerCells, headerCells } = parseCMSTable(
      decode(record.table)
    );

    return (
      <Table caption={record.caption} summary={record.tableSummary}>
        <Table.Header cells={headerCells} />
        <Table.Body rows={bodyRows} />
        <Table.Footer cells={footerCells} />
      </Table>
    );
  }

  if (__typename === 'TextBoxRecord') {
    return <TextBox content={record.textBoxContent} />;
  }

  if (__typename === 'BlockquoteRecord') {
    return (
      <BlockQuote source={record.source}>
        <BlockQuote.Quote datoContent={record.quoteContent} />
        {record.author && (
          <BlockQuote.Author>{record.author}</BlockQuote.Author>
        )}
      </BlockQuote>
    );
  }

  if (__typename === 'TweetRecord') {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: record.tweetEmbedCodeblock }} />
      </div>
    );
  }

  if (__typename === 'QuizRecord') {
    return (
      <Quiz
        question={record.question}
        alternatives={[
          record.alternativeOne,
          record.alternativeTwo,
          record.alternativeThree,
          record.alternativeFour,
        ]}
        correctAlternativeIndex={record.correctAlternativeIndex}
      />
    );
  }

  return <></>;
}
