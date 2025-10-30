/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isCode,
  isHeading,
  isLink,
  isParagraph,
} from 'datocms-structured-text-utils';
import { StructuredText, renderNodeRule } from 'react-datocms';
import HandleLink from './HandleLink';
import HandleCode from './HandleCode';
import HandleHeading from './HandleHeading';
import HandleBlock from './HandleBlock';
import HandleParagraph from './HandleParagraph';

export default function StructuredTextDatoCMS({ data }: { data: any }) {
  return (
    <StructuredText
      data={data}
      customNodeRules={[
        renderNodeRule(isLink, HandleLink),
        renderNodeRule(isCode, HandleCode),
        renderNodeRule(isHeading, HandleHeading),
        renderNodeRule(isParagraph, HandleParagraph),
      ]}
      renderBlock={HandleBlock}
    />
  );
}
