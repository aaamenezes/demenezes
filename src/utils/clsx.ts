// type ClassMap = Record<string, boolean>;

// function convertClassMapToClassName(classMap: ClassMap) {
//   const entries = entriesOf(classMap);

//   const truthyClassNames = entries.flatMap(entry => {
//     const [className, condition] = entry;
//     return condition ? className.trim() : [];
//   });

//   return truthyClassNames;
// }

// function convertStringToClassName(stringClassName: string) {
//   return stringClassName.trim();
// }

// export function clsx(...classNames: ClassName[]) {
//   const classNameList = classNames.flatMap(item => {
//     if (!item) return [];
//     if (typeof item === 'string') return convertStringToClassName(item);
//     return convertClassMapToClassName(item);
//   });

//   const uniqueClassNameArray = [...new Set<string>(classNameList)];
//   const classNameString = uniqueClassNameArray.join(' ').trim();
//   const classNameStringNoExtraSpaces = classNameString.replace(/\s+/g, ' ');
//   return classNameStringNoExtraSpaces;
// }

type ClassName = string | false | null | undefined;

export function clsx(...classNames: ClassName[]) {
  const truthy = classNames.filter(className => typeof className === 'string');
  const trimmed = truthy.map(className => className.trim());
  const unique = [...new Set<string>(trimmed)];
  const string = unique.join(' ').trim();
  const noExtraSpaces = string.replace(/\s+/g, ' ');
  return noExtraSpaces;
}
