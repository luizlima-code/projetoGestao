import React from 'react';
import MaskedInput from 'react-text-mask';
import { maskFormateCpfCnpj } from './cpf_cnpj_mask';

export const TextMask = (props: any) => {
  const { inputRef, ...other } = props;
  return <MaskedInput {...other} ref={inputRef} mask={maskFormateCpfCnpj} />;
};
