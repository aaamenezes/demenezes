import type { ParsedUrlQuery } from 'querystring';

export function parseParam(
  param:
    | ParsedUrlQuery['page']
    | ParsedUrlQuery['slug']
    | ParsedUrlQuery['id']
    | ParsedUrlQuery['category'],
  fallbackValue: string,
  index: number = 0
) {
  if (Array.isArray(param)) return param[index];
  if (param) return param;
  return fallbackValue;
}
