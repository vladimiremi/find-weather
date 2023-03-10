import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; 


export const formatDate = (dateString) => {
  const data = new Date(dateString);
  const formatData = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dataFormatted = formatData.format(data);
  const dataFinal = dataFormatted.replace('de', '');
  return dataFinal;
};

export const getHourAndMinute = (dateString:string)=> {

  const hourAndMinute = dateString.split(" ")[1];

  return hourAndMinute
}