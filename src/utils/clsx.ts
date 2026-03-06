interface ClassMap {
  [key: string]: boolean;
}

export function clsx(...classes: (string | ClassMap)[]) {
  const classesList = classes.flatMap(item => {
    if (typeof item === 'string') return item.trim();

    return Object.entries(item).flatMap(entry => {
      const [className, condition] = entry;
      return condition ? className.trim() : [];
    });
  });

  const uniqueClassesList = [...new Set<string>(classesList)];
  const classesString = uniqueClassesList.join(' ').trim();
  const classesStringNoExtraSpaces = classesString.replace(/\s+/g, ' ');
  return classesStringNoExtraSpaces;
}
