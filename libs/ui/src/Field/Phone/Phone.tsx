import React, { useCallback, useEffect, useState } from 'react';
import { getCountries, formatPhoneNumberIntl, getCountryCallingCode } from "react-phone-number-input"; // prettier-ignore
import { parsePhoneNumber } from 'react-phone-number-input';
import { CountryCode } from 'libphonenumber-js/types';
import { ChevronDown } from 'react-feather';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-number-input/input';
import styled from 'styled-components';
import Flag from 'react-country-flag';

import Dropdown from '../../Dropdown/Dropdown';

export interface PhoneInputProps {
  name: string;
  value: string;
  disabled?: boolean;
  onlyCountries?: CountryCode[];
  defaultCountry?: CountryCode;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
}

export function Phone({
  name,
  value,
  disabled,
  onlyCountries,
  setFieldValue,
  setFieldTouched,
  defaultCountry = 'GH',
}: PhoneInputProps) {
  /**
   * states
   */
  const [countries, setCounties] = useState<
    {
      country: CountryCode;
      value: string;
      label: string;
    }[]
  >();
  const [country, setCountry] = useState<{
    code: CountryCode | undefined;
    callingCode?: string;
  }>(() => {
    if (value) {
      const phoneNumber = parsePhoneNumber(value);
      return {
        code: phoneNumber?.country,
        callingCode: phoneNumber?.countryCallingCode,
      };
    }

    return {
      code: defaultCountry,
      callingCode: getCountryCallingCode(defaultCountry),
    };
  });

  /**
   * function
   */
  const handleCountries = useCallback(() => {
    const selectedCountries: CountryCode[] = onlyCountries || getCountries();

    const countries = selectedCountries
      .filter((e) => countryList().getLabel(e))
      .map((countryCode: CountryCode) => ({
        country: countryCode,
        value: countryList().getLabel(countryCode),
        label: getCountryCallingCode(countryCode),
      }))
      .sort((a, b) => {
        const AName = a.value;
        const BName = b.value;

        if (AName < BName) {
          return -1;
        }

        if (AName > BName) {
          return 1;
        }

        return 0;
      });

    setCounties(countries);
  }, [onlyCountries]);

  /**
   * useEffect
   */
  useEffect(() => {
    handleCountries();
  }, [handleCountries]);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle type="button" className="border-0 text-sm px-4 gap-1">
          {country.code && (
            <Flag countryCode={country.code} className="!w-6 !h-6" svg />
          )}
          <ChevronDown className="flex-[0_0_20px] w-5 h-5" />
        </Dropdown.Toggle>
        <Menu>
          {!!countries?.length &&
            countries.map(({ label, value, ...others }, key) => {
              if (!label || !value) return false;

              return (
                <Dropdown.Item
                  key={key}
                  active={country.code === others.country}
                  onClick={() => {
                    setCountry({
                      code: others.country,
                      callingCode: getCountryCallingCode(others.country),
                    });
                    setFieldValue(name, '');
                  }}
                >
                  {value} (+{label})
                </Dropdown.Item>
              );
            })}
        </Menu>
      </Dropdown>
      <PhoneInput
        value={value}
        international
        disabled={disabled}
        country={country.code}
        className="outline-none w-full"
        onBlur={() => setFieldTouched(name, true)}
        onChange={(value: string) =>
          setFieldValue(name, formatPhoneNumberIntl(value)?.replace(/\s/g, ''))
        }
      />
    </>
  );
}

/**
 * styles
 */

const Menu = styled(Dropdown.Menu)`
  overflow-y: auto;
  max-height: 25rem;
`;

export default React.memo(Phone);
