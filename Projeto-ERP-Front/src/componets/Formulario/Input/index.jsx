import React from 'react';
import Label from '../Label';
import { ContainerInput, InputComponent } from './style';

function Input({ reference, label, value, onChange }) {
  return (
    <ContainerInput>
      <Label reference={reference} labelName={label} />
      <InputComponent name={reference} onChange={onChange} id={reference} />
    </ContainerInput>
  );
}

export default Input;
