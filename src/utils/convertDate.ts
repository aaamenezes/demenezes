export function convertDate(isoDate: string) {
  const result = new Date(isoDate).toLocaleDateString('pt-BR');

  if (result === 'Invalid Date') return '';
  return result;
}
