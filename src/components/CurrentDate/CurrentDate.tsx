import { FC, useEffect, useState } from 'react';
import './CurrentDate.scss';
import { months } from '../../utils';

interface Props {
  className?: string;
}

export const CurrentDate: FC<Props> = ({ className }) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 60 * 60);

    return clearInterval(interval);
  }, []);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const month = months[monthIndex];

  return (
    <span className={className}>
      {`${day} ${month}, ${year}`}
    </span>
  );
};
