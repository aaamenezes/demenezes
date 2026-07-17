export function keysOf<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}

export function valuesOf<T extends object>(object: T): T[keyof T][] {
  return Object.values(object) as T[keyof T][];
}

export function entriesOf<T extends object>(
  object: T
): {
  [K in keyof T]: [K, T[K]];
}[keyof T][] {
  return Object.entries(object) as {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];
}
