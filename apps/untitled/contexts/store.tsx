import { Dispatch, SetStateAction, createContext, useCallback, useEffect, useState } from 'react'; // prettier-ignore
import { useSWRConfig } from 'swr';
import { http } from '@alpha/utils';

export interface StoreInterface {
  token: string;
  logout: () => void;
}

export const StoreContext = createContext<{
  store: Partial<StoreInterface>;
  setStore: Dispatch<SetStateAction<Partial<StoreInterface>>>;
}>({
  store: {},
  setStore: () => null,
});

const StoreProvider = ({ children }: { children: any }) => {
  /**
   * api
   */
  const { mutate } = useSWRConfig();

  /**
   * state
   */
  const [store, setStore] = useState<Partial<StoreInterface>>(() => {
    if (typeof window !== 'undefined') {
      const store = window.localStorage.getItem(process.env['NX_STORAGE_KEY']);

      if (store) {
        return JSON.parse(store);
      }
    }

    return null;
  });

  /**
   * functions
   */
  const logout = useCallback(() => {
    setStore({});

    mutate(() => true, undefined, { revalidate: false });
    sessionStorage.clear();
  }, [mutate]);

  /**
   * effect
   */
  useEffect(() => {
    if (store) {
      window.localStorage.setItem(
        process.env['NX_STORAGE_KEY'],
        JSON.stringify(store)
      );
    }

    http.injectStore(store);
    http.injectLogout(logout);
  }, [store, logout]);

  return (
    <StoreContext.Provider value={{ store: { ...store, logout }, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
