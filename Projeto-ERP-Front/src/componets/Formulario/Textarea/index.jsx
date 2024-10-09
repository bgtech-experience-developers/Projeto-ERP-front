import React from 'react';
import { TextareaComponent } from './style';
import Label from '../Label';

function Textarea({ value, setValue, label, reference }) {
  return (
    <>
      <Label labelName={label} reference={reference} />
      <TextareaComponent
        rows={10}
        value={value}
        onChange={setValue}
        id={reference}
      ></TextareaComponent>
    </>
  );
}

export default Textarea;
