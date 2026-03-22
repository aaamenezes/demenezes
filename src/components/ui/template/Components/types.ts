export type Level = 'base' | 'block' | 'container' | 'section' | 'template';

export interface ComponentPathProps {
  level: Level;
  componentName: string;
}

export type ComponentsMapProps = Record<
  Level,
  Record<string, React.ComponentType>
>;
