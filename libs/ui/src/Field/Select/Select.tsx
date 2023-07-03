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
  options: { label?: string; value?: unknown; [x: string]: any }[];
}): ISelectOption | ISelectOption[] | unknown => {
  
  const _options = options[0]?.options
    ? options.map((i) => i.options).flat()
    : options;

  if (isMulti) {
    return _options.filter((option) => {
      if (Array.isArray(value)) {
        return value.find((item: unknown) => option.value === item);
      }
      return false;
    });
  }

  return _options.find((option) => option.value === value) || '';
};

export default Object.assign(Template, { handleValue });
