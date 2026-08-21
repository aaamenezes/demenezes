import { entriesOf } from './object';

type ClassMap = Record<string, boolean>;

type ClassName = string | null | undefined | ClassMap;

function convertClassMapToClassName(classMap: ClassMap) {
  const entries = entriesOf(classMap);

  const truthyClassNames = entries.flatMap(entry => {
    const [className, condition] = entry;
    return condition ? className.trim() : [];
  });

  return truthyClassNames;
}

function convertStringToClassName(stringClassName: string) {
  return stringClassName.trim();
}

export function clsx(...classNames: ClassName[]) {
  const classNameList = classNames.flatMap(item => {
    if (!item) return [];
    if (typeof item === 'string') return convertStringToClassName(item);
    return convertClassMapToClassName(item);
  });

  const uniqueClassNameArray = [...new Set<string>(classNameList)];
  const classNameString = uniqueClassNameArray.join(' ').trim();
  const classNameStringNoExtraSpaces = classNameString.replace(/\s+/g, ' ');
  return classNameStringNoExtraSpaces;
}
