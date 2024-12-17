import React from "react";
import * as S from "./style";

import { Form } from "../../Forms/Form";
import { Card } from "../../Forms/Card";
import { Input } from "../../Forms/Inputs/Input";
import { Button } from "../../Forms/Button";
import { Text } from "../../Texts/Text";
import Success from "../../../assets/registerSucess.svg"



export const StepCard = () => {
  const [card, setCard] = React.useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("", card);
  }

  return (
    <S._ContentWrapper>
      <Card variant="form-container-login">
        <Form variant="secondary" onSubmit={handleSubmit}>
        <img 
          src={Success} 
          alt="Sucesso"
          style={{ 
            display: 'block', 
            margin: '0 auto', 
            width: '100px', 
            height: '100px'
            }} 
          />

          <S._DivWrapper>
            <Text variant="large" style={{ marginBottom: "1.5rem" }}>
              Senha modificada com sucesso!
            </Text>
          </S._DivWrapper>

          <S._DivWrapper $margin="1.4rem 0 0 0">
            <Button height="4.8rem" type="submit">
              Fazer Login
            </Button>
          </S._DivWrapper>
        </Form>
      </Card>
    </S._ContentWrapper>
  );
};
