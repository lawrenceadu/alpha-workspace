import { useContext } from 'react';

import { StoreContext } from '../contexts/store';

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export default useStore;
