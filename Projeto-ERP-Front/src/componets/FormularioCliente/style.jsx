import { styled } from 'styled-components';
import { BotaoBase } from '../Botao/style';

export const FlexGap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 12px;
`;

export const BotaoForm = styled(BotaoBase)`
  background: #34495e;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    filter: grayscale(40%);
  }
`;
