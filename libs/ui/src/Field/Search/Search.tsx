import { ChangeEvent, HtmlHTMLAttributes, useCallback, useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { helpers } from '@alpha/utils';
import debounce from 'lodash/debounce';

import { Group } from '../Group/Group';
import { Input } from '../Input/Input';

export interface SearchProps extends HtmlHTMLAttributes<HTMLInputElement> {
  delay?: number;
  placeholder?: string;
  onSearch: (search: string) => void;
}

export function Search({
  delay,
  onSearch,
  className,
  placeholder,
  ...props
}: SearchProps) {
  /**
   * state
   */
  const [search, setSearch] = useState<string>();

  /**
   * function
   */
  const handleSearch = useCallback(
    debounce((search) => {
      onSearch(search);
    }, delay),
    []
  );

  return (
    <Group
      name="search"
      withFormik={false}
      wrapperClassName="!mb-0 md:max-w-[328px] w-full"
    >
      <span className="pl-4">
        <SearchIcon className="text-gray-500" />
      </span>
      <Input
        type="search"
        name="search"
        withFormik={false}
        value={search || ''}
        placeholder={placeholder || 'Search ...'}
        className={helpers.classNames('pl-0', className)}
        onChange={({
          currentTarget: { value },
        }: ChangeEvent<HTMLInputElement>) => {
          setSearch(value);
          handleSearch(value);
        }}
      />
    </Group>
  );
}
