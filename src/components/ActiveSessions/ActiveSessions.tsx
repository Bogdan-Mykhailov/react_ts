import React, { useEffect, useState } from 'react';
import { socket } from '../../utils';
import './ActiveSessions.scss';

export const ActiveSessions = () => {
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    socket.on('sessionCountUpdate', (count: number) => {
      setSessionCount(count);
    });

    socket.emit('getSessionCount');

    return () => {
      socket.off('sessionCountUpdate');
    };
  }, []);

  const title = `Переглядають: ${sessionCount}`;

  return (
    <>
      <span className="activity">{title}</span>
    </>
  );
};
