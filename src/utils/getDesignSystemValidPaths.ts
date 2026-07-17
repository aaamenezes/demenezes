import { componentsByLevelMap } from '@/components/ui/template/Components/data';
import { entriesOf, keysOf } from './object';

export function getDesignSystemValidPaths() {
  const entries = entriesOf(componentsByLevelMap);

  const levelWithComponents = entries.map(([level, componentsMap]) => {
    const componentNames = keysOf(componentsMap);

    return componentNames.map(componentName => ({
      level,
      componentName,
    }));
  });

  const flattened = levelWithComponents.flat();

  return flattened;
}
