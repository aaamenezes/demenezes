import { componentsByLevelMap } from 'pages/components/[level]/[componentName]';
import type { ComponentPathProps } from './types';

export function getComponentByPath({
  level,
  componentName: component,
}: ComponentPathProps) {
  return componentsByLevelMap[level]?.[component] || null;
}
