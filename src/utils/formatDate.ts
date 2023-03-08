import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; 


export const formatDate = (dateString) => {
  const data = new Date(dateString);
  const formatoData = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dataFormatada = formatoData.format(data);
  const dataFinal = dataFormatada.replace('de', '');
  return dataFinal;
};