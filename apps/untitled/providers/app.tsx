import { HtmlHTMLAttributes } from 'react';
import { SWRConfig } from 'swr';
import { http } from '@alpha/utils';

// eslint-disable-next-line
export interface AppProviderProps extends HtmlHTMLAttributes<HTMLDivElement> {}

function AppProvider({ children }: AppProviderProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => http.get(url).then((response) => response),
        dedupingInterval: 1000 * 60 * 15,
        shouldRetryOnError: false,
        revalidateOnFocus: true,
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default AppProvider;
