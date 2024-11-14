import React from "react";
import { FormsField } from "../components/Forms/FormsField";
import { Input } from "../components/Forms/Inputs/Input/index";
import { Card } from "../components/Forms/Card/index";
import { Form } from "../components/Forms/Form";
import { File } from "../components/Forms/Inputs/File";
import { Title } from "../components/Texts/Title";

// Caso eu tenha me esquecido de apagar isso, esse componente é apenas para testes

export const Teste = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form title="Cadastro Fornecedor" width="87.8rem">
        <Card>
          <FormsField variant="triple">
            <Input height="5rem">Nome</Input>
            <Input height="5rem">Senha</Input>
            <Input height="5rem">Email</Input>
          </FormsField>
          <FormsField>
            <Input height="5rem" width="50%">
              Nome
            </Input>
            <Input height="5rem" width="50%">
              Senha
            </Input>
          </FormsField>
          <Input height="5rem">Teste</Input>
        </Card>

        <Card title="Endereço da empresa">
          <FormsField variant="triple">
            <Input height="5rem">Nome</Input>
            <Input height="5rem">Senha</Input>
            <Input height="5rem">Email</Input>
          </FormsField>
          <FormsField variant="triple">
            <Input height="5rem">Nome</Input>
            <Input height="5rem">Senha</Input>
            <Input height="5rem">Email</Input>
          </FormsField>
          <Input height="5rem">Teste</Input>
        </Card>
        <Card title="Aoba">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input id="nome" height="5rem" width="100%">
                Nome:
              </Input>
              <Input id="email" height="5rem" width="100%">
                Email:{" "}
              </Input>
            </FormsField>
            <File />
          </FormsField>
          <File />
          <Input height="5rem" />
        </Card>
      </Form>

      <Title variant="large" bold="600">
        Aoba{" "}
      </Title>
    </div>
  );
};
