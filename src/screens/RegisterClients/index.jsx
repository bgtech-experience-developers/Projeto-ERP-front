import { FormsField } from "../../components/Forms/FormsField";
import { Input } from "../../components/Forms/Inputs/Input";
import { Card } from "../../components/Forms/Card";
import { Form } from "../../components/Forms/Form";
import { File } from "../../components/Forms/Inputs/File";
import { Button } from "../../components/Forms/Button";
import { useState } from "react";
import { FormsField } from "../../components/Forms/FormsField";
import { Input } from "../../components/Forms/Inputs/Input";
import { Card } from "../../components/Forms/Card";
import { Form } from "../../components/Forms/Form";
import { File } from "../../components/Forms/Inputs/File";
import { Button } from "../../components/Forms/Button";
import { useState } from "react";

export const RegisterClients = () => {
  const [formValues, setFormValues] = useState({
    imagens: [true, false, false],
    cliente: {
      corporate_reason: "",
      fantasy_name: "",
      cnpj: "",
      state_registration: "",
      type_contribuition: "",
      branch_activity: "",
    },
    endereco_empresa: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
    },
    endereco_entrega: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
    },
    financeiro: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
    },
    comercial: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
    },
    contabil: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
    },
    socio: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [errors, setErrors] = useState({});

  // Função chamada quando o usuário digita nos campos obrigatórios
  const handleInputChange = (field) => (event) => {
    const { id, value } = event.target;

    setFormValues({
      ...formValues,
      [field]: {
        ...formValues[field],
        [id]: value,
      },
    });

    console.log(formValues);
  };

  // Validação quando o usuário sai do campo obrigatório sem preencher
  const handleBlur = (event) => {
    const { id } = event.target;
    const newErrors = { ...errors };
    // Validação quando o usuário sai do campo obrigatório sem preencher
    const handleBlur = (event) => {
      const { id } = event.target;
      const newErrors = { ...errors };

      if (id === "razaoSocial") {
        if (!formValues.razaoSocial) {
          newErrors.razaoSocial = "*o preenchimento desse campo é obrigatório";
        } else {
          delete newErrors.razaoSocial;
        }
      }

      if (id === "nomeFantasia") {
        if (!formValues.nomeFantasia) {
          newErrors.nomeFantasia = "*o preenchimento desse campo é obrigatório";
        } else {
          delete newErrors.nomeFantasia;
        }
      }

      if (id === "cnpj") {
        if (!formValues.cnpj) {
          newErrors.cnpj = "*o preenchimento desse campo é obrigatório";
        } else {
          delete newErrors.cnpj;
        }
      }

      setErrors(newErrors);
    };

    function handleSubmit(event) {
      event.preventDefault();
      console.log(formValues);
    }

    function handleImage({ target }) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = target.files[0];
      const id = target.id;
      console.log(file);

      if (!allowedTypes.includes(file.type)) {
        setErrorImage(true);
        setTimeout(() => {
          setErrorImage(false);
        }, 2000);
        return;
      }

      setFormValues({ ...formValues, [id]: file });
    }
    setErrors(newErrors);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form title="Cadastrar Cliente" width="87.8rem">
        <Card>
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input
                id="corporate_reason"
                height="4.8rem"
                value={formValues.cliente.corporate_reason}
                onChange={handleInputChange("cliente")}
                onBlur={handleBlur}
              >
                Razão social
                {errors.razaoSocial && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "1rem",
                      paddingLeft: "21rem",
                    }}
                  >
                    {errors.razaoSocial}
                  </span>
                )}
              </Input>
              <Input
                id="fantasy_name"
                height="4.8rem"
                value={formValues.cliente.fantasy_name}
                onChange={handleInputChange("cliente")}
                onBlur={handleBlur}
              >
                Nome fantasia
                {errors.nomeFantasia && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "1rem",
                      paddingLeft: "20rem",
                    }}
                  >
                    {errors.nomeFantasia}
                  </span>
                )}
              </Input>
            </FormsField>
            <File text="Adicionar foto" />
          </FormsField>

          <Input
            id="branch_activity"
            value={formValues.cliente.branch_activity}
            onChange={handleInputChange("cliente")}
            height="4.8rem"
          >
            Ramo de atuação
          </Input>

          <FormsField variant="double">
            <Input
              id="cnpj"
              height="4.8rem"
              value={formValues.cliente.cnpj}
              onChange={handleInputChange("cliente")}
              onBlur={handleBlur}
            >
              CNPJ
              {errors.cnpj && (
                <span
                  style={{
                    color: "red",
                    fontSize: "1rem",
                    paddingLeft: "8rem",
                  }}
                >
                  {errors.cnpj}
                </span>
              )}
            </Input>
            <Input
              id="state_registration"
              value={formValues.cliente.state_registration}
              onChange={handleInputChange("cliente")}
              height="4.8rem"
            >
              Inscrição estadual
            </Input>
          </FormsField>

          <Input
            type="select"
            id="type_contributor"
            height="4.8rem"
            options={[
              { value: "fisíca", label: "Opção 1" },
              { value: "jurídica", label: "Opção 2" },
            ]}
          >
            Tipo de contribuinte
          </Input>
        </Card>
        <Card title="Endereço da Empresa">
          <FormsField variant="triple">
            <Input
              id="street"
              value={formValues.endereco_empresa.street}
              onChange={handleInputChange("endereco_empresa")}
              height="4.8rem"
            >
              Logradouro
            </Input>
            <Input
              id="number"
              height="4.8rem"
              value={formValues.endereco_empresa.number}
              onChange={handleInputChange("endereco_empresa")}
            >
              Número
            </Input>
            <Input
              id="cep"
              height="4.8rem"
              value={formValues.endereco_empresa.cep}
              onChange={handleInputChange("endereco_empresa")}
            >
              CEP
            </Input>
          </FormsField>

          <Input
            id="complement"
            height="4.8rem"
            value={formValues.endereco_empresa.complement}
            onChange={handleInputChange("endereco_empresa")}
          >
            Complemento
          </Input>

          <FormsField variant="double">
            <Input
              id="neighborhood"
              height="4.8rem"
              value={formValues.endereco_empresa.neighborhood}
              onChange={handleInputChange("endereco_empresa")}
            >
              Bairro
            </Input>
            <Input
              id="city"
              height="4.8rem"
              value={formValues.endereco_empresa.city}
              onChange={handleInputChange("endereco_empresa")}
            >
              Cidade
            </Input>
          </FormsField>
        </Card>
        76
        <Card title="Endereço de Entrega">
          <FormsField variant="triple">
            <Input
              id="street"
              height="4.8rem"
              value={formValues.endereco_entrega.street}
              onChange={handleInputChange("endereco_entrega")}
            >
              Logradouro
            </Input>
            <Input
              id="number"
              height="4.8rem"
              value={formValues.endereco_entrega.number}
              onChange={handleInputChange("endereco_entrega")}
            >
              Número
            </Input>
            <Input
              id="cep"
              height="4.8rem"
              value={formValues.endereco_entrega.cep}
              onChange={handleInputChange("endereco_entrega")}
            >
              CEP
            </Input>
          </FormsField>

          <Input
            id="complement"
            height="4.8rem"
            value={formValues.endereco_entrega.complement}
            onChange={handleInputChange("endereco_entrega")}
          >
            Complemento
          </Input>

          <FormsField variant="double">
            <Input
              id="neighborhood"
              value={formValues.endereco_entrega.neighborhood}
              onChange={handleInputChange("endereco_entrega")}
              height="4.8rem"
            >
              Bairro
            </Input>
            <Input
              id="city"
              value={formValues.endereco_entrega.city}
              onChange={handleInputChange("endereco_entrega")}
              height="4.8rem"
            >
              Cidade
            </Input>
          </FormsField>
        </Card>
        <Card title="Sócio Proprietário">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input
                id="name"
                height="4.8rem"
                value={formValues.socio.name}
                onChange={handleInputChange("socio")}
              >
                Nome
              </Input>
              <Input
                id="email"
                height="4.8rem"
                type="email"
                value={formValues.socio.email}
                onChange={handleInputChange("socio")}
              >
                Email
              </Input>
            </FormsField>
            <File text="Adicionar foto" />
          </FormsField>

          <FormsField variant="double">
            <Input
              id="phone"
              height="4.8rem"
              value={formValues.socio.phone}
              onChange={handleInputChange("socio")}
            >
              Telefone
            </Input>
            <Input
              id="cell_phone"
              height="4.8rem"
              value={formValues.socio.cell_phone}
              onChange={handleInputChange("socio")}
            >
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input
              id="rg"
              height="4.8rem"
              value={formValues.socio.rg}
              onChange={handleInputChange("socio")}
            >
              RG
            </Input>
            <Input
              id="cpfSocio"
              height="4.8rem"
              value={formValues.socio.cpf}
              onChange={handleInputChange("socio")}
            >
              CPF
            </Input>
          </FormsField>
        </Card>
        <Card title="Contato Comercial">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input
                id="name"
                height="4.8rem"
                value={formValues.comercial.name}
                onChange={handleInputChange("comercial")}
              >
                Nome
              </Input>
              <Input
                id="email"
                height="4.8rem"
                type="email"
                value={formValues.comercial.email}
                onChange={handleInputChange("comercial")}
              >
                Email
              </Input>
            </FormsField>
            <File text="Adicionar foto" />
          </FormsField>

          <FormsField variant="double">
            <Input
              id="phone"
              height="4.8rem"
              value={formValues.comercial.phone}
              onChange={handleInputChange("comercial")}
            >
              Telefone
            </Input>
            <Input
              id="cell_phone"
              height="4.8rem"
              value={formValues.comercial.cell_phone}
              onChange={handleInputChange("comercial")}
            >
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input
              id="rg"
              height="4.8rem"
              value={formValues.comercial.rg}
              onChange={handleInputChange("comercial")}
            >
              RG
            </Input>
            <Input
              id="cpf"
              height="4.8rem"
              value={formValues.comercial.cpf}
              onChange={handleInputChange("comercial")}
            >
              CPF
            </Input>
          </FormsField>
        </Card>
        <Card title="Contato Financeiro">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input
                id="name"
                height="4.8rem"
                value={formValues.financeiro.name}
                onChange={handleInputChange("financeiro")}
              >
                Nome
              </Input>
              <Input
                id="email"
                height="4.8rem"
                type="email"
                value={formValues.financeiro.email}
                onChange={handleInputChange("financeiro")}
              >
                Email
              </Input>
            </FormsField>
            <File text="Adicionar foto" />
          </FormsField>

          <FormsField variant="double">
            <Input
              id="phone"
              height="4.8rem"
              value={formValues.financeiro.phone}
              onChange={handleInputChange("financeiro")}
            >
              Telefone
            </Input>
            <Input
              id="cell_phone"
              height="4.8rem"
              value={formValues.financeiro.cell_phone}
              onChange={handleInputChange("financeiro")}
            >
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input
              id="rg"
              height="4.8rem"
              value={formValues.financeiro.rg}
              onChange={handleInputChange("financeiro")}
            >
              RG
            </Input>
            <Input
              id="cpf"
              height="4.8rem"
              value={formValues.financeiro.cpf}
              onChange={handleInputChange("financeiro")}
            >
              CPF
            </Input>
          </FormsField>
        </Card>
        <Card title="Contato Contábil">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input
                id="name"
                height="4.8rem"
                value={formValues.contabil.name}
                onChange={handleInputChange("contabil")}
              >
                Nome
              </Input>
              <Input
                id="email"
                height="4.8rem"
                type="email"
                value={formValues.contabil.email}
                onChange={handleInputChange("contabil")}
              >
                Email
              </Input>
            </FormsField>
            <File text="Adicionar foto" />
          </FormsField>

          <FormsField variant="double">
            <Input
              id="phone"
              height="4.8rem"
              value={formValues.contabil.phone}
              onChange={handleInputChange("contabil")}
            >
              Telefone
            </Input>
            <Input
              id="cell_phone"
              height="4.8rem"
              value={formValues.contabil.cell_phone}
              onChange={handleInputChange("contabil")}
            >
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input
              id="rg"
              height="4.8rem"
              value={formValues.contabil.rg}
              onChange={handleInputChange("contabil")}
            >
              RG
            </Input>
            <Input
              id="cpf"
              height="4.8rem"
              value={formValues.contabil.cpf}
              onChange={handleInputChange("contabil")}
            >
              CPF
            </Input>
          </FormsField>
        </Card>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </div>
  );
};
