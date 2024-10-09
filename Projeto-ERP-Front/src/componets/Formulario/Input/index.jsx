import React from 'react';
import Label from '../Label';
import { InputComponent } from './style';

function Input({ reference, label, value, onChange }) {
  return (
    <div>
      <Label reference={reference} labelName={label} />
      <InputComponent name={reference} onChange={onChange} id={reference} />
    </div>
  );
}

export default Input;
