import Flatpickr, { DateTimePickerProps } from 'react-flatpickr';
import { helpers } from '@alpha/utils';
import dayjs from 'dayjs';
import { Calendar } from 'react-feather';

// eslint-disable-next-line
export interface DateProps extends DateTimePickerProps {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
  setFieldTouched?: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
}

export function Date({
  name,
  value,
  options,
  className,
  placeholder,
  setFieldValue,
  setFieldTouched,
  ...props
}: DateProps) {
  return (
    <>
      <Flatpickr
        value={value ? dayjs(value as string).toDate() : ''}
        className={helpers.classNames(
          className,
          'input block outline-none w-full px-4',
          'disabled:bg-gray-100 disabled:text-gray-500'
        )}
        onChange={(date) => {
          setFieldValue(String(name), dayjs(date[0]).format('YYYY-MM-DD'));
          setTimeout(
            () => setFieldTouched && setFieldTouched(String(name), true)
          );
        }}
        options={{
          ...options,
          disableMobile: true,
          dateFormat: 'd - M - Y',
        }}
        placeholder={placeholder || '01 -  jan - 2023'}
        {...props}
      />
      <span className="px-4">
        <Calendar />
      </span>
    </>
  );
}

export default Date;
