import type { DatoBlock } from '@/types';
import {
  isCode,
  isHeading,
  isLink,
  isList,
  isParagraph,
} from 'datocms-structured-text-utils';
import type { StructuredTextGraphQlResponse } from 'react-datocms';
import { renderMarkRule, renderNodeRule, StructuredText } from 'react-datocms';
import HandleBlock from '../HandleBlock';
import HandleBlockCode from '../HandleBlockCode';
import HandleHeading from '../HandleHeading';
import HandleInlineCode from '../HandleInlineCode';
import HandleLink from '../HandleLink';
import HandleList from '../HandleList';
import HandleParagraph from '../HandleParagraph';

export default function StructuredTextDatoCMS({
  data,
}: {
  data: StructuredTextGraphQlResponse<DatoBlock>;
}) {
  return (
    <StructuredText
      data={data}
      customNodeRules={[
        renderNodeRule(isLink, HandleLink),
        renderNodeRule(isCode, HandleBlockCode),
        renderNodeRule(isHeading, HandleHeading),
        renderNodeRule(isParagraph, HandleParagraph),
        renderNodeRule(isList, HandleList),
      ]}
      customMarkRules={[renderMarkRule('code', HandleInlineCode)]}
      renderBlock={HandleBlock}
    />
  );
}
