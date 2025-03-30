import { ParsedUrlQuery } from 'querystring';

export function parsePageParam(page: ParsedUrlQuery['page']) {
  if (!page) return 1;
  if (Array.isArray(page)) return Number(page[0]);
  return Number(page);
}

export function parseSlugParam(slug: ParsedUrlQuery['slug']) {
  if (!slug) return '/';
  if (Array.isArray(slug)) return slug[0];
  return slug;
}

// export function parseParam<ParamType, FallbackType>(
//   param: ParamType,
//   index: number,
//   fallback: FallbackType
// ): ParamType | FallbackType {
//   if (!param) return fallback;
//   if (Array.isArray(param)) return param[index];
//   return param;
// }
