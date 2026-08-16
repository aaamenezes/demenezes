interface ClassMap {
  [key: string]: boolean;
}

function convertClassMapToClassName(classMap: ClassMap) {
  const entries = Object.entries(classMap);

  const truthyClassNames = entries.flatMap(entry => {
    const [className, condition] = entry;
    return condition ? className.trim() : [];
  });

  return truthyClassNames;
}

function convertStringToClassName(stringClassName: string) {
  return stringClassName.trim();
}

export function clsx(...classNames: (string | ClassMap)[]) {
  const classNameList = classNames.flatMap(item => {
    if (typeof item === 'string') return convertStringToClassName(item);
    return convertClassMapToClassName(item);
  });

  const uniqueClassNameArray = [...new Set<string>(classNameList)];
  const classNameString = uniqueClassNameArray.join(' ').trim();
  const classNameStringNoExtraSpaces = classNameString.replace(/\s+/g, ' ');
  return classNameStringNoExtraSpaces;
}
