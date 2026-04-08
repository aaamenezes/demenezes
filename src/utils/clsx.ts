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

function convertStringToClassName(classString: string) {
  return classString.trim();
}

export function clsx(...classNames: (string | ClassMap)[]) {
  const classNamesList = classNames.flatMap(item => {
    if (typeof item === 'string') return convertStringToClassName(item);
    return convertClassMapToClassName(item);
  });

  const uniqueClassNamesList = [...new Set<string>(classNamesList)];
  const classNamesString = uniqueClassNamesList.join(' ').trim();
  const classNamesStringNoExtraSpaces = classNamesString.replace(/\s+/g, ' ');
  return classNamesStringNoExtraSpaces;
}
