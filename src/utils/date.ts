import * as dayjs from 'dayjs';

export const formatTimeStamp = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format('YYYY/MM/DD');
};
