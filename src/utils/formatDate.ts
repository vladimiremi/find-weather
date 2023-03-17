import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; 


export const formatDate = (dateString) => {
  const data = new Date(dateString);
  const formatDateIntl = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dataFormatted = formatDateIntl.format(data);
  const dataFinal = dataFormatted.replace('de', '');
  return dataFinal;
};

export const getHourAndMinute = (dateString:string)=> {

  const hourAndMinute = dateString.split(" ")[1];

  return hourAndMinute
}

export const convertUnixToTimestamp = (unixTimestamp)=>{
  
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unixTimestamp * 1000);

  const formatDataIntl = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  });

  const formattedTime  = formatDataIntl.format(date);
  const replaceData = formattedTime.replace('de', '').replace(',', '');
  
  const finishDate = replaceData.split(' ');

  return {
    weekday: finishDate[0],
    month: finishDate[3],
    day: finishDate[1]
  };
}