import { breakpoints } from '@/data/breakpoints';
import type { Breakpoint } from '@/types/ui';

function isBreakpointObject<T>(
  value: Partial<Record<Breakpoint, T>> | T
): value is Partial<Record<Breakpoint, T>> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    breakpoints.some(breakpoint => breakpoint in value)
  );
}

export function fillValuesByBreakpoint<ValueType>(
  defaultValues: Record<Breakpoint, ValueType>,
  customValues?: Partial<Record<Breakpoint, ValueType>> | ValueType
): Record<Breakpoint, ValueType> {
  if (!customValues) return defaultValues;

  const result = {} as Record<Breakpoint, ValueType>;

  if (isBreakpointObject(customValues)) {
    let lastCustomValue: ValueType | undefined;
    for (const breakpoint of breakpoints) {
      lastCustomValue = customValues[breakpoint] ?? lastCustomValue;
      result[breakpoint] = lastCustomValue ?? defaultValues[breakpoint];
    }
  } else {
    for (const breakpoint of breakpoints) {
      result[breakpoint] = customValues;
    }
  }

  return result;
}
