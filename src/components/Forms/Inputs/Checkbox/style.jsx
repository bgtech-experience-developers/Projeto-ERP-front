import styled from 'styled-components';

export const CheckboxStyled = styled.input.attrs({
  type: 'checkbox',
})`
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 2rem;
`;

export const ContainerCheckBox = styled.div`
  width: 100%;
`;
