import { components, DropdownIndicatorProps, StylesConfig } from 'react-select'; // prettier-ignore
import { ChevronDown, ChevronUp } from 'react-feather';

// dropdown indicator
const DropdownIndicator = ({
  children,
  hasValue,
  isFocused,
  ...props
}: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...{ isFocused, hasValue, ...props }}>
    {isFocused && !hasValue ? <ChevronUp /> : <ChevronDown />}
  </components.DropdownIndicator>
);

const Components = {
  DropdownIndicator,
  IndicatorSeparator: () => null,
};

/**
 * styles
 */
export const styles: StylesConfig = {
  container: (styles) => ({
    ...styles,
    padding: 0,
    width: '100%',
  }),
  input: (styles) => ({
    ...styles,
  }),
  control: (styles, { isDisabled }) => ({
    ...styles,
    borderColor: 'transparent !important',
    backgroundColor: isDisabled ? 'var(--color-gray-100)' : 'transparent',
    borderRadius: '0.375rem',
    minHeight: '2.875rem',
    boxShadow: 'none',
  }),
  menuList: () => ({
    paddingTop: 0,
    paddingBottom: 0,
    overflow: 'auto',
    maxHeight: 200,
  }),
  menuPortal: (styles) => ({ ...styles, zIndex: 999 }),
  menu: (styles) => ({
    ...styles,
    boxShadow: '0 0.0625rem 0.375rem 0.0625rem rgb(6 31 60 / 12%)',
    border: 'none !important',
    backgroundColor: '#fff',
    paddingBottom: '0.25rem',
    paddingTop: '0.25rem',
    zIndex: 999,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor:
      (isSelected && 'var(--color-gray-100)!important') || '#fff!important',
    padding: '0.625rem 1rem',
    fontSize: '0.875rem',
    color: '#000',
    cursor: 'pointer',
    outline: 'none',
  }),
  multiValue: (styles) => ({
    gap: 4,
    display: 'flex',
    borderRadius: 24,
    alignItems: 'center',
    padding: '0.5rem 0.75rem',
    backgroundColor: 'rgba(var(--color-primary-rgb), 0.15)',
  }),
  multiValueLabel: (styles) => ({ fontSize: '0.875rem' }),
  multiValueRemove: (styles) => ({
    ...styles,
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#000',
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    gap: 4,
    height: '100%',
    padding: '0rem 0.875rem',
  }),
  singleValue: (styles) => ({
    ...styles,
    width: '100%',
    cursor: 'pointer',
    color: '#000',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'var(--color-gray-500)',
    fontWeight: 400,
  }),
  indicatorsContainer: (styles) => ({ ...styles, cursor: 'pointer' }),
};

export default Object.assign(Components, { styles });
