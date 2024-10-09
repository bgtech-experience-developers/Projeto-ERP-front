import React from 'react';
import { LabelComponent } from './style';

function Label({ labelName, reference }) {
  return <LabelComponent htmlFor={reference}>{labelName}</LabelComponent>;
}

export default Label;
