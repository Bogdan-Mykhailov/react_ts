import { FC, useEffect, useState } from 'react';
import './Clock.scss';
import { getTwoDigits } from '../../utils';

interface Props {
  className?: string;
}

export const Clock: FC<Props> = ({ className }) => {
  const [date, setDate] = useState(new Date());
  const [showSeconds, setShowSeconds] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setShowSeconds((prevState) => !prevState);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className={className}>{getTwoDigits(date.getHours())}</span>

      <span className="seconds">{showSeconds ? ':' : ''}</span>

      <span className={className}>{getTwoDigits(date.getMinutes())}</span>
    </>
  );
};
