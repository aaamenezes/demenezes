interface ClassMap {
  [key: string]: boolean;
}

export function clsx(...classes: (string | ClassMap)[]) {
  // TODO: remove duplicate class names

  const classesList = classes.flatMap(item => {
    if (typeof item === 'string') return item.trim();

    return Object.entries(item).flatMap(entry => {
      const [className, condition] = entry;
      return condition ? className.trim() : [];
    });
  });

  const uniqueClassesList = [...new Set<string>(classesList)];
  const classesString = uniqueClassesList.join(' ').trim();
  return classesString.replace(/\s+/g, ' '); // remove extra spaces
}

// return classes
//   .filter(className => typeof className === 'string')
//   .map(className => className.trim())
//   .filter(className => className.length > 0)
//   .join(' ')
//   .replace(/\s+/g, ' '); // remove extra spaces
