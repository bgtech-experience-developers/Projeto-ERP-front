import { FormsField } from "../../components/Forms/FormsField";
import { Input } from "../../components/Forms/Inputs/Input";
import { Card } from "../../components/Forms/Card";
import { Form } from "../../components/Forms/Form";
import { File } from "../../components/Forms/Inputs/File";
import { Button } from "../../components/Forms/Button";
import { useCallback, useEffect, useState } from "react";
import useClients from "../../hooks/useClients";
import useForm from "../../hooks/useForm";
import { SpanError } from "./style";
import { useLocation } from "react-router-dom";

const initialFormValues = () => ({
  imagens: [],
  cliente: {
    corporate_reason: "",
    fantasy_name: "",
    cnpj: "",
    state_registration: "",
    type_contribuition: "",
    branch_activity: ""
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
    cpf: "",
  },
  comercial: {
    name: "",
    phone: "",
    cell_phone: "",
    rg: "",
    email: "",
    cpf: "",
  },
  contabil: {
    name: "",
    phone: "",
    cell_phone: "",
    rg: "",
    email: "",
    cpf: "",
  },
  socio: {
    name: "",
    phone: "",
    cell_phone: "",
    rg: "",
    email: "",
    cpf: "",
  },
});

// Organizando todos os estados no inicio do componente principal
export const UpdateClients = () => {
  const { patchClient } = useClients();
  const [mask, onBlur, error] = useForm();
  const { state } = useLocation();
  const [formValues, setFormValues] = useState(initialFormValues());
  const [errorImage, setErrorImage] = useState(false);
  const [formPhotos, setFormPhotos] = useState([]);
  const [photos, setPhotos] = useState({
    file1: { file: null, status: false },
    file2: { file: null, status: false },
    file3: { file: null, status: false },
    file4: { file: null, status: false },
    file5: { file: null, status: false },
  });

  useEffect(() => {
    if (state?.data) {
      setFormValues(state.data);
    }
  }, []);

  // Controla os status das imagens
  // React.useEffect(() => {
  //   const statusArray = Object.values(photos).map((photo) => photo.status);
  //   setFormValues({ ...formValues, imagens: statusArray });
  // }, [photos]);

  // Função chamada quando o usuário digita nos campos obrigatórios
  const handleInputChange = (field) => (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [field]: {
        ...formValues[field],
        [name]: mask(name, value),
      },
    });
  };

  function handleImage(key, { target }) {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const file = target.files[0];

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => setErrorImage(false), 2000);
      return;
    }

    setPhotos((prevPhotos) => ({
      ...prevPhotos,
      [key]: { file, status: !!file },
    }));
    setFormPhotos((prevFile) => [...prevFile, file]);
  }

  function removeImage(key, { target }) {
    setPhotos({
      ...photos,
      [key]: {
        file: null,
      },
    });
  }

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      patchClient(state.data.cliente.id, formValues);
    },
    [patchClient, formValues]
  );

  return (
    <Form onSubmit={handleSubmit} title={"Editar Cliente"}>
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="cliente_corporate_reason"
              name="corporate_reason"
              height="4.8rem"
              value={formValues.cliente.corporate_reason}
              onChange={handleInputChange("cliente")}
              onBlur={onBlur}
            >
              Razão social
              {error.corporate_reason && (
                <SpanError>* {error.corporate_reason}</SpanError>
              )}
            </Input>

            <Input
              id="cliente_fantasy_name"
              name="fantasy_name"
              height="4.8rem"
              value={formValues.cliente.fantasy_name}
              onChange={handleInputChange("cliente")}
              onBlur={onBlur}
            >
              Nome fantasia
              {error.fantasy_name && (
                <SpanError>* {error.fantasy_name}</SpanError>
              )}
            </Input>
          </FormsField>

          <File
            name={"fotoCliente"}
            error={errorImage}
            image={photos.file1?.file}
            onChange={(event) => handleImage("file1", event)}
            text="Adicionar foto"
            handleRemove={(event) => removeImage('file1', event)}
          />
        </FormsField>

        <Input
          id="cliente_branch_activity"
          name="branch_activity"
          height="4.8rem"
          value={formValues.cliente.branch_activity}
          onChange={handleInputChange("cliente")}
          onBlur={onBlur}
        >
          Ramo de atuação
          {error.branch_activity && (
            <SpanError>* {error.branch_activity}</SpanError>
          )}
        </Input>

        <FormsField variant="double">
          <Input
            id="cliente_cnpj"
            name="cnpj"
            height="4.8rem"
            value={formValues.cliente.cnpj}
            onChange={handleInputChange("cliente")}
            onBlur={onBlur}
          >
            CNPJ
            {error.cnpj && <SpanError>* {error.cnpj}</SpanError>}
          </Input>
          <Input
            id="cliente_state_registration"
            name="state_registration"
            height="4.8rem"
            value={formValues.cliente.state_registration}
            onChange={handleInputChange("cliente")}
          >
            Inscrição estadual
          </Input>
        </FormsField>

        <Input
          type="select"
          id="cliente_type_contribuition"
          name="type_contribuition"
          height="4.8rem"
          value={formValues.cliente.type_contribuition}
          onChange={handleInputChange("cliente")}
          options={[
            { value: 'titulo', label: 'Selecione', disabled: true },
            { value: 'icms', label: 'Contribuinte ICMS' },
            { value: 'isento', label: 'Contribuinte ISENTO' },
            { value: 'nao', label: 'Não contribuinte' },
          ]}
        >Tipo de contribuinte
        </Input>
      </Card>


      <Card title="Endereço da Empresa">
        <FormsField variant="triple">
          <Input
            name="street"
            id="endereco_empresa_street"
            height="4.8rem"
            value={formValues.endereco_empresa.street}
            onChange={handleInputChange("endereco_empresa")}
            onBlur={onBlur}
          >
            Logradouro
            {error.street && <SpanError>* {error.street}</SpanError>}
          </Input>
          <Input
            id="endereco_empresa_number"
            name="number"
            height="4.8rem"
            value={formValues.endereco_empresa.number}
            onChange={handleInputChange("endereco_empresa")}
            onBlur={onBlur}
          >
            Número
            {error.number && <SpanError>* {error.number}</SpanError>}
          </Input>
          <Input
            id="endereco_empresa_cep"
            name="cep"
            height="4.8rem"
            value={formValues.endereco_empresa.cep}
            onChange={handleInputChange("endereco_empresa")}
            onBlur={onBlur}
          >
            CEP
            {error.cep && <SpanError>* {error.cep}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="endereco_empresa_complement"
          name="complement"
          height="4.8rem"
          value={formValues.endereco_empresa.complement}
          onChange={handleInputChange("endereco_empresa")}
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="endereco_empresa_neighborhood"
            name="neighborhood"
            height="4.8rem"
            value={formValues.endereco_empresa.neighborhood}
            onChange={handleInputChange("endereco_empresa")}
            onBlur={onBlur}
          >
            Bairro
            {error.neighborhood && (
              <SpanError>* {error.neighborhood}</SpanError>
            )}
          </Input>
          <Input
            id="endereco_empresa_city"
            name="city"
            height="4.8rem"
            value={formValues.endereco_empresa.city}
            onChange={handleInputChange("endereco_empresa")}
            onBlur={onBlur}
          >
            Cidade
            {error.city && <SpanError>* {error.city}</SpanError>}
          </Input>
        </FormsField>
      </Card>

      <Card title="Endereço de Entrega">
        <FormsField variant="triple">
          <Input
            id="endereco_entrega_street"
            name="street"
            height="4.8rem"
            value={formValues.endereco_entrega.street}
            onChange={handleInputChange("endereco_entrega")}
          >
            Logradouro
          </Input>
          <Input
            id="endereco_entrega_number"
            name="number"
            height="4.8rem"
            value={formValues.endereco_entrega.number}
            onChange={handleInputChange("endereco_entrega")}
          >
            Número
          </Input>
          <Input
            id="endereco_entrega_cep"
            name="cep"
            height="4.8rem"
            value={formValues.endereco_entrega.cep}
            onChange={handleInputChange("endereco_entrega")}
          >
            CEP
          </Input>
        </FormsField>

        <Input
          id="endereco_entrega_complement"
          name="complement"
          height="4.8rem"
          value={formValues.endereco_entrega.complement}
          onChange={handleInputChange("endereco_entrega")}
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="endereco_entrega_neighborhood"
            name="neighborhood"
            height="4.8rem"
            value={formValues.endereco_entrega.neighborhood}
            onChange={handleInputChange("endereco_entrega")}
          >
            Bairro
          </Input>
          <Input
            id="endereco_entrega_city"
            name="city"
            height="4.8rem"
            value={formValues.endereco_entrega.city}
            onChange={handleInputChange("endereco_entrega")}
          >
            Cidade
          </Input>
        </FormsField>
      </Card>

      <Card title="Sócio Proprietário">
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="socio_name"
              name="name"
              height="4.8rem"
              value={formValues.socio.name}
              onChange={handleInputChange("socio")}
              onBlur={onBlur}
            >
              Nome
              {error.name && <SpanError>* {error.name}</SpanError>}
            </Input>
            <Input
              id="socio_email"
              name="email"
              height="4.8rem"
              type="email"
              value={formValues.socio.email}
              onChange={handleInputChange("socio")}
              onBlur={onBlur}
            >
              Email
              {error.email && <SpanError>* {error.email}</SpanError>}
            </Input>
          </FormsField>
          <File
            error={errorImage}
            image={photos.file2?.file}
            onChange={(event) => handleImage("file2", event)}
            text="Adicionar foto"
            handleRemove={(event) => removeImage('file2', event)}
          />
        </FormsField>

        <FormsField variant="double">
          <Input
            id="socio_phone"
            name="phone"
            height="4.8rem"
            value={formValues.socio.phone}
            onChange={handleInputChange("socio")}
          >
            Telefone
          </Input>
          <Input
            id="socio_cell_phone"
            name="cell_phone"
            height="4.8rem"
            value={formValues.socio.cell_phone}
            onChange={handleInputChange("socio")}
            onBlur={onBlur}
          >
            Celular
            {error.cell_phone && <SpanError>* {error.cell_phone}</SpanError>}
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="socio_rg"
            name="rg"
            height="4.8rem"
            value={formValues.socio.rg}
            onChange={handleInputChange("socio")}
            onBlur={onBlur}
          >
            RG
            {error.rg && <SpanError>* {error.rg}</SpanError>}
          </Input>
          <Input
            id="socio_cpf"
            name="cpf"
            height="4.8rem"
            value={formValues.socio.cpf}
            onChange={handleInputChange("socio")}
            onBlur={onBlur}
          >
            CPF
            {error.cpf && <SpanError>* {error.cpf}</SpanError>}
          </Input>
        </FormsField>
      </Card>

      <Card title="Contato Comercial">
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="comercial_name"
              name="name"
              height="4.8rem"
              value={formValues.comercial.name}
              onChange={handleInputChange("comercial")}
            >
              Nome
            </Input>
            <Input
              id="comercial_email"
              name="email"
              height="4.8rem"
              type="email"
              value={formValues.comercial.email}
              onChange={handleInputChange("comercial")}
            >
              Email
            </Input>
          </FormsField>
          <File
            error={errorImage}
            image={photos.file3?.file}
            onChange={(event) => handleImage("file3", event)}
            text="Adicionar foto"
            handleRemove={(event) => removeImage('file3', event)}
          />
        </FormsField>

        <FormsField variant="double">
          <Input
            id="comercial_phone"
            name="phone"
            height="4.8rem"
            value={formValues.comercial.phone}
            onChange={handleInputChange("comercial")}
          >
            Telefone
          </Input>
          <Input
            id="comercial_cell_phone"
            name="cell_phone"
            height="4.8rem"
            value={formValues.comercial.cell_phone}
            onChange={handleInputChange("comercial")}
          >
            Celular
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="comercial_rg"
            name="rg"
            height="4.8rem"
            value={formValues.comercial.rg}
            onChange={handleInputChange("comercial")}
          >
            RG
          </Input>
          <Input
            id="comercial_cpf"
            name="cpf"
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
              id="financeiro_name"
              name="name"
              height="4.8rem"
              value={formValues.financeiro.name}
              onChange={handleInputChange("financeiro")}
            >
              Nome
            </Input>
            <Input
              id="financeiro_email"
              name="email"
              height="4.8rem"
              type="email"
              value={formValues.financeiro.email}
              onChange={handleInputChange("financeiro")}
            >
              Email
            </Input>
          </FormsField>
          <File
            error={errorImage}
            image={photos.file4?.file}
            onChange={(event) => handleImage("file4", event)}
            text="Adicionar foto"
            handleRemove={(event) => removeImage('file4', event)}
          />
        </FormsField>

        <FormsField variant="double">
          <Input
            id="financeiro_phone"
            name="phone"
            height="4.8rem"
            value={formValues.financeiro.phone}
            onChange={handleInputChange("financeiro")}
          >
            Telefone
          </Input>
          <Input
            id="financeiro_cell_phone"
            name="cell_phone"
            height="4.8rem"
            value={formValues.financeiro.cell_phone}
            onChange={handleInputChange("financeiro")}
          >
            Celular
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="financeiro_rg"
            name="rg"
            height="4.8rem"
            value={formValues.financeiro.rg}
            onChange={handleInputChange("financeiro")}
          >
            RG
          </Input>
          <Input
            id="financeiro_cpf"
            name="cpf"
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
              id="contabil_name"
              name="name"
              height="4.8rem"
              value={formValues.contabil.name}
              onChange={handleInputChange("contabil")}
            >
              Nome
            </Input>
            <Input
              id="contabil_email"
              name="email"
              height="4.8rem"
              type="email"
              value={formValues.contabil.email}
              onChange={handleInputChange("contabil")}
            >
              Email
            </Input>
          </FormsField>
          <File
            error={errorImage}
            image={photos.file5?.file}
            onChange={(event) => handleImage("file5", event)}
            text="Adicionar foto"
            handleRemove={(event) => removeImage('file5', event)}
          />
        </FormsField>

        <FormsField variant="double">
          <Input
            id="contabil_phone"
            name="phone"
            height="4.8rem"
            value={formValues.contabil.phone}
            onChange={handleInputChange("contabil")}
          >
            Telefone
          </Input>
          <Input
            id="contabil_cell_phone"
            name="cell_phone"
            height="4.8rem"
            value={formValues.contabil.cell_phone}
            onChange={handleInputChange("contabil")}
          >
            Celular
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="contabil_rg"
            name="rg"
            height="4.8rem"
            value={formValues.contabil.rg}
            onChange={handleInputChange("contabil")}
          >
            RG
          </Input>
          <Input
            id="contabil_cpf"
            name="cpf"
            height="4.8rem"
            value={formValues.contabil.cpf}
            onChange={handleInputChange("contabil")}
          >
            CPF
          </Input>
        </FormsField>
      </Card>

      <Card>
        <Button type="submit" height="4.8rem">
          {"Atualizar cadastro"}
        </Button>
      </Card>
    </Form>
  );
};