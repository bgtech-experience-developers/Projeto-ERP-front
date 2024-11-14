import React from "react";
import BiSmile from "../../../../../public/BiSmile";
import * as S from "./style";
import { Text } from "../../../Texts/Text";
import { theme } from "../../../../theme/theme";

export const File = ({ variant = "primary" }) => {
  return (
    <S.FileContainer $variant={variant}>
      <BiSmile />
      <S._File />
      <Text bold="600" color={theme.colors.lightGray}>
        Adicionar foto
      </Text>
    </S.FileContainer>
  );
};
