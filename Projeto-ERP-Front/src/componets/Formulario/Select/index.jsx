import React from 'react';
import { Seletor } from './style';
import Label from '../Label';
import { ContainerInput } from '../Input/style';

function Select({ label, items, reference, value, handleChange }) {
  return (
    <ContainerInput>
      <Label labelName={label} reference={reference} />
      <Seletor
        name={reference}
        value={value}
        onChange={handleChange}
        id={reference}
      >
        <option value="" disabled selected>
          Selecion
        </option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Seletor>
    </ContainerInput>
  );
}

export default Select;
