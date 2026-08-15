import type { DatoBlock } from '@/types';
import {
  isCode,
  isHeading,
  isLink,
  isList,
  isParagraph,
} from 'datocms-structured-text-utils';
import type { StructuredTextGraphQlResponse } from 'react-datocms';
import { renderNodeRule, StructuredText } from 'react-datocms';
import HandleBlock from '../HandleBlock';
import HandleCode from '../HandleCode';
import HandleHeading from '../HandleHeading';
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
        renderNodeRule(isCode, HandleCode),
        renderNodeRule(isHeading, HandleHeading),
        renderNodeRule(isParagraph, HandleParagraph),
        renderNodeRule(isList, HandleList),
      ]}
      renderBlock={HandleBlock}
    />
  );
}
