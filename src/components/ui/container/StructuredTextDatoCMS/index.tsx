/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isCode,
  isHeading,
  isLink,
  isParagraph,
} from 'datocms-structured-text-utils';
import { StructuredText, renderNodeRule } from 'react-datocms';
import { handleLink } from './handleLink';
import { handleCode } from './handleCode';
import { handleHeading } from './handleHeading';
import { handleBlock } from './handleBlock';
import { handleParagraph } from './handleParagraph';

export default function StructuredTextDatoCMS({ data }: { data: any }) {
  return (
    <StructuredText
      data={data}
      customNodeRules={[
        renderNodeRule(isLink, handleLink),
        renderNodeRule(isCode, handleCode),
        renderNodeRule(isHeading, handleHeading),
        renderNodeRule(isParagraph, handleParagraph),
      ]}
      renderBlock={handleBlock}
    />
  );
}
