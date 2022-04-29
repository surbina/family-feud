import dayjs from 'dayjs';
import { useState } from 'react';

export function useTimer() {
  const [timeRemaining, setTimeRemaining] = useState<number | undefined>();
  const [status, setStatus] = useState<'idle' | 'running'>('idle');

  const startTimer = () => {
    if (status === 'running') {
      return;
    }

    const futureDate = dayjs().add(22, 'seconds');
    setStatus('running');

    const interval = setInterval(() => {
      const diff = Math.max(futureDate.diff(dayjs(), 'second'), 0);
      setTimeRemaining(diff);

      if (diff === 0) {
        setStatus('idle');
        clearInterval(interval);
      }
    }, 1000);
  };

  return {
    timeRemaining,
    startTimer,
  };
}
