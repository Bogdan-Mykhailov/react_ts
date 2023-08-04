import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const URL = process.env.REACT_APP_BASE_URL;

const socket = io(URL || 'http://localhost:4000');

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
