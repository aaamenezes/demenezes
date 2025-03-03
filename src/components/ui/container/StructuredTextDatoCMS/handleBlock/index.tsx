/* eslint-disable @typescript-eslint/no-explicit-any */
import Iframe from '../../../base/Iframe';
import Image from '../../../base/Image';
import Video from '../../../base/Video';
import BlockQuote from '../../../block/BlockQuote';
import Table from '../../../block/Table';
import Quiz from '../../../../post/Quiz';
import TextBox from '../../../../post/TextBox';

export function handleBlock({
  record,
}: {
  record: {
    __typename: string;
    id: string;
    [key: string]: any;
  };
}) {
  const { __typename } = record;
  switch (__typename) {
    case 'ImageRecord':
      return (
        <Image
          key={record.id}
          src={record.image.responsiveImage.src}
          width={record.image.width}
          height={record.image.height}
          alt={record.image.alt}
          title={record.image.title}
        />
      );
    case 'ExternalVideoRecord':
      return (
        <Iframe
          key={record.id}
          title={record.video.title}
          videoID={record.video.providerUid}
        />
      );
    case 'VideoRecord':
      return (
        <Video key={record.id} url={record.video.url} alt={record.video.alt} />
      );
    case 'TableRecord':
      return (
        <Table
          key={record.id}
          tableTitle={record.tableTitle}
          tableSummary={record.tableSummary}
          tableContent={record.table}
        />
      );
    case 'TextBoxRecord':
      return <TextBox key={Math.random()} content={record.textBoxContent} />;
    case 'BlockquoteRecord':
      return (
        <BlockQuote source={record.source} author={record.author} isDatoCMS>
          {record.quoteContent}
        </BlockQuote>
      );
    case 'TweetRecord':
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: record.tweetEmbedCodeblock }}
          />
        </div>
      );
    case 'QuizRecord':
      return (
        <Quiz
          title={record.title}
          alternatives={[
            record.alternativeOne,
            record.alternativeTwo,
            record.alternativeThree,
            record.alternativeFour,
          ]}
          correctAlternativeIndex={record.correctAlternativeIndex}
        />
      );
    default:
      return <></>;
  }
}
