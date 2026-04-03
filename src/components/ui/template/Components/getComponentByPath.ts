import { componentsByLevelMap } from './data';
import type { ComponentPathProps } from './types';

export function getComponentByPath({
  level,
  componentName: component,
}: ComponentPathProps) {
  return componentsByLevelMap[level]?.[component] || null;
}
