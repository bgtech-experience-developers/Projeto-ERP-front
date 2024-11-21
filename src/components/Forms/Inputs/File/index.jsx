import React from "react";
import BiSmile from "../../../../../public/BiSmile";
import * as S from "./style";
import { Text } from "../../../Texts/Text";
import { theme } from "../../../../theme/theme";

export const File = ({ variant = "primary", text, smileSize = 52 }) => {
  return (
    <S.FileContainer $variant={variant}>
      <BiSmile size={smileSize} />
      <S._File />
      <Text bold="600" color={theme.colors.lightGray}>
        {text}
      </Text>
    </S.FileContainer>
  );
};
