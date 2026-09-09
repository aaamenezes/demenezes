import { componentsByLevelMap } from './data';
import type { StyleGuideScreenProps } from './types';

export function getComponentByPath({
  level,
  componentName: component,
}: StyleGuideScreenProps) {
  return componentsByLevelMap[level]?.[component] || null;
}
