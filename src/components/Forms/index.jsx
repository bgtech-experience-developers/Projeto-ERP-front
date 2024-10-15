import { Button } from "./Button/index.jsx";
import { Card } from "./Card/index.jsx";
import { Input } from "./Input/index.jsx";
import { Label } from "./Label/index.jsx";
import { FormFieldContainer } from "./FormFieldContainer/index.jsx";
import { StyledForm } from "./style.jsx";

//  Componente genérico apenas como exemplo de utilização

export const Forms = () => {
  return (
    <Card
      title="Cadastro de Evento"
      width="60rem"
      desc={"Informações do evento"}
    >
      <StyledForm>
        <FormFieldContainer>
          <Label htmlFor={"nome"}>Nome: </Label>
          <Input id={"nome"} />
        </FormFieldContainer>
        <FormFieldContainer>
          <Label>Email: </Label>
          <Input />
        </FormFieldContainer>

        <Button>Cadastrar</Button>
      </StyledForm>
    </Card>
  );
};
