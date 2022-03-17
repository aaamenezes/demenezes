export function simplifyString(string) {
  return string.toLowerCase()
    .split('á')
    .join('a')
    .split('á')
    .join('a')
    .split('ã')
    .join('a')
    .split('é')
    .join('e')
    .split('ê')
    .join('e')
    .split('í')
    .join('i')
    .split('ó')
    .join('o')
    .split('ô')
    .join('o')
    .split('õ')
    .join('o')
    .split('ú')
    .join('u')
    .split('ç')
    .join('c')
    .split(' ')
    .join('-')
    .split('.')
    .join('-')
    .split(',')
    .join('-')
    .split('/')
    .join('-')
    .split('(')
    .join('-')
    .split(')')
    .join('-')
    .trim()
}
