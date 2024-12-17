import React from "react";
import * as S from "./style";

import { Form } from "../../Forms/Form";
import { Card } from "../../Forms/Card";
import { Input } from "../../Forms/Inputs/Input";
import { Button } from "../../Forms/Button";
import { Text } from "../../Texts/Text";

export const StepCode = () => {
  const [code, setCode] = React.useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Código para recuperação:", code);
  }

  return (
    <S._ContentWrapper>
      <Card variant="form-container-login">
        <Form variant="secondary" onSubmit={handleSubmit}>
          <S._DivWrapper>
            <Text variant="large" style={{ marginBottom: "1.5rem" }}>
              Digite aqui seu código.
            </Text>

            <Input
              variant="secondary"
              placeholder="Digite seu Código"
              type="number"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              
            >
              Código
            </Input>
          </S._DivWrapper>

          <S._DivWrapper $margin="1.4rem 0 0 0">
            <Button height="4.8rem" type="submit">
              Enviar
            </Button>

            <Text variant="x-small" color="#5B5B5B" style={{ marginTop: "1rem" }}>
              <S._LinkText href="#">voltar</S._LinkText>
            </Text>
          </S._DivWrapper>
        </Form>
      </Card>
    </S._ContentWrapper>
  );
};
