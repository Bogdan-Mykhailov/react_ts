import React, { useEffect, useState } from 'react';

export const ActiveSessions = () => {
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    const updateSessionCount = () => {
      const activeSessions = Object.keys(sessionStorage)
        .filter((key) => key.startsWith('session_'));

      setSessionCount(activeSessions.length);
    };

    updateSessionCount();

    window.addEventListener('storage', updateSessionCount);

    return () => {
      window.removeEventListener('storage', updateSessionCount);
    };
  }, []);

  const title = `Переглядають: ${sessionCount}`;

  return <span>{title}</span>;
};
