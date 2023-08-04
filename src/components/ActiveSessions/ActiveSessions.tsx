import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://react-ts-server.onrender.com');

export const ActiveSessions = () => {
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    socket.on('sessionCountUpdate', (count) => {
      setSessionCount(count);
    });

    socket.emit('getSessionCount');

    return () => {
      socket.off('sessionCountUpdate');
    };
  }, []);
  const title = `Переглядають: ${sessionCount}`;

  return <span>{title}</span>;
};
