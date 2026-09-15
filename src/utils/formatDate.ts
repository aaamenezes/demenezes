export function formatDate(isoDate: string) {
  const formattedDate = new Date(isoDate).toLocaleDateString('pt-BR');

  if (formattedDate === 'Invalid Date') return '';
  return formattedDate;
}
