import React, { useState, useEffect, ChangeEvent, KeyboardEvent, ClipboardEvent, useCallback } from 'react'; // prettier-ignore
import { ChevronDown } from 'react-feather';
import countryList from 'react-select-country-list';
import styled from 'styled-components';
import alpha from 'i18n-iso-countries';
import Input from 'react-input-autosize';
import Flag from 'react-country-flag';

import Dropdown from '../../Dropdown/Dropdown';

export interface IDProps {
  name: string;
  value?: string;
  disabled?: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
}

export function ID({
  name,
  value,
  disabled,
  setFieldValue,
  setFieldTouched,
}: IDProps) {
  /**
   * function
   */
  const handleCopyPasteCut = (e: ClipboardEvent<HTMLInputElement>) =>
    e.preventDefault();

  /**
   * variables
   */
  const handleCountries = useCallback(() => {
    const countries = countryList().getData();

    setCountries(
      countries.map((i) => ({
        iso2: i.value,
        label: i.label,
        value: alpha.alpha2ToAlpha3(i.value),
      }))
    );
  }, []);

  value = value ? value.replace('--', '-') : value;

  /**
   * state
   */
  const [countries, setCountries] = useState<{ label: string; value: string; iso2: string; }[]>([]); // prettier-ignore
  const [prefixRef, setPrefixRef] = useState<HTMLInputElement | null>();
  const [cardIso, setCardIso] = useState<string>(() => {
    if (value) return value.split('-')[0];
    return 'GHA';
  });
  const [cardPrefix, setCardPrefix] = useState<string>(() => {
    if (value) return value.split('-')[1];
    return '';
  });
  const [cardPostfix, setCardPostfix] = useState<string>(() => {
    if (value) return value.split('-')[2];
    return '';
  });

  /**
   * effect
   */
  useEffect(() => {
    let cardNumber = `${cardIso}-${cardPrefix}-${cardPostfix}`;

    if (cardPrefix.length === 7) {
      cardNumber = `${cardIso}-${cardPrefix}--${cardPostfix}`;
    }

    cardNumber = (() => {
      const i = cardNumber.split('--');
      if (i[0] !== cardNumber) {
        return '';
      }
      return cardNumber;
    })();

    setFieldValue(name, cardNumber);
  }, [cardIso, cardPrefix, cardPostfix, name, setFieldValue]);

  useEffect(() => {
    handleCountries();
  }, [handleCountries]);

  return (
    <Wrapper disabled={disabled} onBlur={() => setFieldTouched(name, true)}>
      <Dropdown>
        <Dropdown.Toggle type="button" className="border-0 text-sm pl-4 gap-1">
          <Flag
            countryCode={alpha.alpha3ToAlpha2(cardIso)}
            className="!w-6 !h-6"
            svg
          />
          <ChevronDown className="flex-[0_0_20px] w-5 h-5" />
        </Dropdown.Toggle>
        <DropdownMenu>
          {['GHA', 'NGA'].map((item, key) => (
            <Dropdown.Item key={key} onClick={() => setCardIso(item)}>
              <Flag countryCode={alpha.alpha3ToAlpha2(item)} svg />
              <small className="caption fw-medium">{item}</small>
            </Dropdown.Item>
          ))}

          {countries.map((item, key) => (
            <Dropdown.Item key={key} onClick={() => setCardIso(item.value)}>
              <Flag countryCode={alpha.alpha3ToAlpha2(item.value)} svg />
              <small className="caption fw-medium">{item.value}</small>
            </Dropdown.Item>
          ))}
        </DropdownMenu>
      </Dropdown>

      <p className="mb-0">{cardIso}</p>

      <span className="mb-1">-</span>

      <Input
        minWidth={96}
        type="number"
        extraWidth={0}
        pattern="[0-9]+"
        disabled={disabled}
        placeholder="XXXXXXXXX"
        value={cardPrefix || ''}
        inputRef={(ref) => setPrefixRef(ref)}
        onChange={({
          currentTarget: { value },
        }: ChangeEvent<HTMLInputElement>) => {
          if (value.length <= 9) {
            setCardPrefix(value);
          }
        }}
        onCopy={handleCopyPasteCut}
        onPaste={handleCopyPasteCut}
        onCut={handleCopyPasteCut}
      />

      <span className="mb-1">-</span>

      <Input
        type="text"
        minWidth={48}
        extraWidth={0}
        placeholder="X"
        disabled={disabled}
        value={cardPostfix || ''}
        onChange={({
          currentTarget: { value },
        }: ChangeEvent<HTMLInputElement>) => {
          if (value.length <= 1) {
            setCardPostfix(value);
          }
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (
            e.key === 'Backspace' &&
            !(e.target as HTMLInputElement).value.length
          ) {
            if (prefixRef !== null) {
              prefixRef?.focus();
            }
          }
        }}
        onCopy={handleCopyPasteCut}
        onPaste={handleCopyPasteCut}
        onCut={handleCopyPasteCut}
      />
    </Wrapper>
  );
}

/**
 * styles
 */
const DropdownMenu = styled(Dropdown.Menu)`
  max-height: 20rem;
`;

const Wrapper = styled.div<{ disabled?: boolean }>`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.15s ease-in-out;

  input {
    padding: 0;
    border: none;
    outline: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
`;

export default React.memo(ID);
