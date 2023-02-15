import { helpers } from '@alpha/utils';
import Select from 'react-select';

import Components from './Components';

export interface ISelectOption {
  label?: string;
  value?: unknown;
  [x: string]: unknown;
}

export interface SelectProps {
  isMulti?: boolean;
  onChange?: any;
  placeholder?: string;
  options?: ISelectOption[];
  value: any | any[];
  components?: object;
  [x: string]: unknown;
}

function Template({
  isMulti = false,
  options = [],
  placeholder = '',
  components = {},
  value = '',
  className,
  ...props
}: SelectProps) {
  const localValue = handleValue({ isMulti, value, options });

  return (
    <Select
      isMulti={isMulti}
      options={options}
      value={localValue}
      placeholder={placeholder}
      styles={Components.styles}
      className={helpers.classNames(
        className,
        isMulti && (localValue as [])?.length && 'py-1'
      )}
      components={{ ...Components, ...components }}
      {...props}
    />
  );
}

/**
 * functions
 */
const handleValue = ({
  value,
  options = [],
  isMulti = false,
}: {
  isMulti?: boolean;
  value?: any | any[] | unknown;
  options: { label?: string; value?: unknown; [x: string]: unknown }[];
}): ISelectOption | ISelectOption[] | unknown => {
  if (isMulti) {
    return options.filter((option) => {
      if (Array.isArray(value)) {
        return value.find((item: unknown) => option.value === item);
      }
      return false;
    });
  }

  return options.find((option) => option.value === value) || '';
};

export default Object.assign(Template, { handleValue });
