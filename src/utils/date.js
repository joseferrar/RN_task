import moment from 'moment';

export const TimeFormat = unixtime => {
  const date = moment(unixtime).format('LT');
  return date;
};
