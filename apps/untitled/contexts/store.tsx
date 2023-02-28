import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'; // prettier-ignore

// eslint-disable-next-line
export interface StoreInterface {}

export const StoreContext = createContext<{
  store: Partial<StoreInterface>;
  setStore: Dispatch<SetStateAction<Partial<StoreInterface>>>;
}>({
  store: {},
  setStore: () => null,
});

const StoreProvider = ({ children }: { children: any }) => {
  /**
   * state
   */
  const [store, setStore] = useState<Partial<StoreInterface>>({});

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
  }, [store]);

  useEffect(() => {
    const store = window.localStorage.getItem(process.env['NX_STORAGE_KEY']);

    if (store) {
      setStore(JSON.parse(store));
    }
  }, []);

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
