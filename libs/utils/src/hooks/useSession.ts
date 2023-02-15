import { useState, useEffect, useCallback } from 'react';

const useSession = <T>(key: string): [T | undefined, (value: T) => void] => {
  /**
   * state
   */
  const [session, setSession] = useState<T>();

  /**
   * functions
   */
  const setItem = (value: T) => {
    const storage: Storage = window.sessionStorage;

    if (value) {
      storage.setItem(key, JSON.stringify(value));
    } else {
      storage.removeItem(key);
    }
    return setSession(value);
  };

  const getItem = useCallback(() => {
    const storage: Storage = window.sessionStorage;

    try {
      return JSON.parse(storage.getItem(key) || '');
    } catch {
      return null;
    }
  }, [key]);

  /**
   * effect
   */
  useEffect(() => {
    const item = getItem();
    setSession(item);
  }, [key, getItem]);

  return [session, setItem];
};

export default useSession;
