import { componentsByLevelMap } from '@/components/ui/template/Components/data';

export function getDesignSystemValidPaths() {
  const entries = Object.entries(componentsByLevelMap);

  const levelWithComponents = entries.map(([level, componentsMap]) => {
    const componentNames = Object.keys(componentsMap);

    return componentNames.map(componentName => ({
      level,
      componentName,
    }));
  });

  const flattened = levelWithComponents.flat();

  return flattened;
}
