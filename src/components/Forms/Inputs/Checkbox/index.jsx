import React from 'react';
import { InputContainer } from '../Input/style';
import { CheckboxStyled, ContainerCheckBox, LabelCheckbox } from './style';

const Checkbox = ({ text }) => {
  return (
    <ContainerCheckBox>
      <LabelCheckbox>
        <CheckboxStyled />
        {text}
      </LabelCheckbox>
    </ContainerCheckBox>
  );
};

export default Checkbox;
