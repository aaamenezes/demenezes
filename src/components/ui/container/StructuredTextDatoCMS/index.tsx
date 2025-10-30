/* eslint-disable @typescript-eslint/no-explicit-any */
import HandleBlock from '@/components/ui/container/StructuredTextDatoCMS/HandleBlock';
import HandleCode from '@/components/ui/container/StructuredTextDatoCMS/HandleCode';
import HandleHeading from '@/components/ui/container/StructuredTextDatoCMS/HandleHeading';
import HandleLink from '@/components/ui/container/StructuredTextDatoCMS/HandleLink';
import HandleParagraph from '@/components/ui/container/StructuredTextDatoCMS/HandleParagraph';
import {
  isCode,
  isHeading,
  isLink,
  isParagraph,
} from 'datocms-structured-text-utils';
import { StructuredText, renderNodeRule } from 'react-datocms';

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
