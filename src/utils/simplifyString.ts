export function simplifyString(string: string) {
  /*
  return string
    .toLowerCase()
    .split('á')
    .join('a')
    .split('à')
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
    .split(':')
    .join('-')
    .split('/')
    .join('-')
    .split('(')
    .join('-')
    .split(')')
    .join('-')
    .split('?')
    .join('')
    .trim()
  */

  return string
    .toLowerCase()
    .normalize('NFD') // Trocar acentos pelo correspondente sem acento
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // substitui espaços por hífen
    .trim();
}
