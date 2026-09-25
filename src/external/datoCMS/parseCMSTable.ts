import type { Row } from '@/components/ui/block/Table/Body/types';
import type { Cell } from '@/components/ui/block/Table/types';

export function parseCMSTable(stringTableMarkup: string): {
  headerCells: Cell[];
  bodyRows: Row[];
  footerCells: Cell[];
} {
  function getSection(tag: 'thead' | 'tbody' | 'tfoot') {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
    return stringTableMarkup.match(regex)?.[1] ?? '';
  }

  function getCells(markup: string, tag: 'th' | 'td') {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');

    return Array.from(markup.matchAll(regex), match => ({
      label: match[1]?.trim() ?? '',
    }));
  }

  function getRows(markup: string) {
    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;

    return Array.from(markup.matchAll(rowRegex), match =>
      getCells(match[1] ?? '', 'td')
    );
  }

  const headerMarkup = getSection('thead');
  const bodyMarkup = getSection('tbody');
  const footerMarkup = getSection('tfoot');

  return {
    headerCells: getCells(headerMarkup, 'th'),
    bodyRows: getRows(bodyMarkup),
    footerCells: getCells(footerMarkup, 'th'),
  };
}
