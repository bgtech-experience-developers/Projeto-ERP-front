import { FormsField } from '../../components/Forms/FormsField';
import { Input } from '../../components/Forms/Inputs/Input';
import { Card } from '../../components/Forms/Card';
import { Form } from '../../components/Forms/Form';
import { File } from '../../components/Forms/Inputs/File';
import { Button } from '../../components/Forms/Button';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import { SpanError } from './style';
import { useLocation } from 'react-router-dom';

export const RegisterSupplierPF = () => {
  const { state } = useLocation();

  const [mask, onBlur, onChange, error] = useForm();
  const [formValues, setFormValues] = useState({
    fotos: '',
    supplier: {
      name: '',
      code: '',
      email: '',
      cell_phone: '',
      rg: '',
      cpf: '',
      date_of_birth: '',
      product: '',
      price: '',
      tax: '',
      deadline: '',
    },
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      neighborhood: '',
    },
  });

  const [title, setTitle] = useState('Cadastrar Fornecedor');
  const [button, setButton] = useState('Cadastrar');

  useEffect(() => {
    if (state?.supplier) {
      setFormValues(state.supplier);
      setTitle('Editar Fornecedor');
      setButton('Atualizar cadastro');
    } else {
      setTitle('Cadastrar Fornecedor');
      setButton('Cadastrar');
    }
  }, [state]);

  const [errorImage, setErrorImage] = useState(false);

  function handleImage({ target }) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const file = target.files[0];
    const id = target.id;

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => {
        setErrorImage(false);
      }, 2000);
      return;
    }
    console.log(id);

    setFormValues({ ...formValues, fotos: file });
  }

  const handleInputChange = (field) => (event) => {
    const { name, value } = event.target;
    onChange(name);

    setFormValues({
      ...formValues,
      [field]: {
        ...formValues[field],
        [name]: mask(name, value),
      },
    });
  };

  function handleRemove() {
    setFormValues({
      ...formValues,
      fotos: '',
    });
  }

  return (
    <Form title={title}>
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              name="name"
              id="supplier_name"
              height="4.8rem"
              value={formValues.supplier.name}
              onChange={handleInputChange('supplier')}
              onBlur={onBlur}
            >
              Nome do fornecedor
              {error.name && <SpanError>{error.name}</SpanError>}
            </Input>

            <Input
              id="code"
              name="code"
              value={formValues.supplier.code}
              onChange={handleInputChange('supplier')}
              onBlur={onBlur}
              height="4.8rem"
            >
              Código do fornecedor
              {error.code && <SpanError>{error.code}</SpanError>}
            </Input>
          </FormsField>
          <File
            id={'fotoProduto'}
            error={errorImage}
            image={formValues.fotos}
            handleRemove={handleRemove}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <FormsField variant="double">
          <Input
            id="email"
            name="email"
            value={formValues.supplier.email}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
            type="email"
          >
            Email
            {error.email && <SpanError>{error.email}</SpanError>}
          </Input>
          <Input
            id="cell_phone"
            name="cell_phone"
            value={formValues.supplier.cell_phone}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Telefone
            {error.cell_phone && <SpanError>{error.cell_phone}</SpanError>}
          </Input>
        </FormsField>

        <FormsField variant="triple">
          <Input
            id="rg"
            name="rg"
            value={formValues.supplier.rg}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            RG
            {error.rg && <SpanError>{error.rg}</SpanError>}
          </Input>
          <Input
            id="cpf"
            name="cpf"
            value={formValues.supplier.cpf}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            CPF
            {error.cpf && <SpanError>{error.cpf}</SpanError>}
          </Input>
          <Input
            id="date_of_birth"
            name="date_of_birth"
            value={formValues.supplier.date_of_birth}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
            type="date"
          >
            Data de nascimento
          </Input>
        </FormsField>

        <Input
          type="select"
          id="produto"
          height="4.8rem"
          onChange={handleInputChange('supplier')}
          options={[
            { value: 'opcao2', label: 'Produto 1' },
            { value: 'opcao3', label: 'Produto 2' },
          ]}
          value={formValues.produto}
        >
          Produto
        </Input>

        <FormsField variant="double">
          <Input
            id="price"
            name="price"
            value={formValues.supplier.price}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Preço
            {error.price && <SpanError>{error.price}</SpanError>}
          </Input>
          <Input
            id="tax"
            name="tax"
            value={formValues.supplier.tax}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Imposto sobre compra
            {error.tax && <SpanError>{error.tax}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="deadline"
          name="deadline"
          value={formValues.supplier.deadline}
          onChange={handleInputChange('supplier')}
          onBlur={onBlur}
          height="4.8rem"
        >
          Tempo de entrega
        </Input>
      </Card>

      <Card title="Endereço do fornecedor">
        <FormsField variant="triple">
          <Input
            id="street"
            name="street"
            value={formValues.address.street}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Logradouro
            {error.street && <SpanError>{error.street}</SpanError>}
          </Input>
          <Input
            id="number"
            name="number"
            value={formValues.address.number}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Número
            {error.number && <SpanError>{error.number}</SpanError>}
          </Input>
          <Input
            id="cep"
            name="cep"
            value={formValues.address.cep}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            CEP
            {error.cep && <SpanError>{error.cep}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="complement"
          name="complement"
          value={formValues.address.complement}
          onChange={handleInputChange('address')}
          height="4.8rem"
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="neighborhood"
            name="neighborhood"
            value={formValues.address.neighborhood}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Bairro
            {error.neighborhood && <SpanError>{error.neighborhood}</SpanError>}
          </Input>

          <Input
            id="city"
            name="city"
            value={formValues.address.city}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Cidade
            {error.city && <SpanError>{error.city}</SpanError>}
          </Input>
        </FormsField>
      </Card>
      <Card>
        <Button variant="secondary" type="submit" height="4.8rem">
          {button}
        </Button>
      </Card>
    </Form>
  );
};

export const RegisterSupplierPJ = () => {
  const { state } = useLocation();
  const [mask, onBlur, onChange, error] = useForm();
  const [formValues, setFormValues] = useState({
    fotos: '',
    supplier: {
      fantasy_name: '',
      responsible: '',
      cnpj: '',
      corporate_reason: '',
      state_registration: '',
      email: '',
      phone: '',
      municipal_registration: '',
      taxpayer_type: '',
      suframa_inscription: '',
      product: '',
      price: '',
      freight: '',
      time: '',
    },
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      neighborhood: '',
    },
  });

  const [title, setTitle] = useState('Cadastrar Fornecedor');
  const [button, setButton] = useState('Cadastrar');

  useEffect(() => {
    if (state?.supplier) {
      setFormValues(state.supplier);
      setTitle('Editar Fornecedor');
      setButton('Atualizar cadastro');
    } else {
      setTitle('Cadastrar Fornecedor');
      setButton('Cadastrar');
    }
  }, [state]);

  const [errorImage, setErrorImage] = useState(false);

  function handleImage({ target }) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const file = target.files[0];
    const id = target.id;

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => {
        setErrorImage(false);
      }, 2000);
      return;
    }

    setFormValues({ ...formValues, fotos: file });
  }

  const handleInputChange = (field) => (event) => {
    const { id, name, value } = event.target;
    onChange(name);
    setFormValues({
      ...formValues,
      [field]: {
        ...formValues[field],
        [name]: mask(name, value),
      },
    });
  };

  function handleRemove() {
    setFormValues({
      ...formValues,
      fotos: '',
    });
  }

  return (
    <Form title={title}>
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="fantasy_name"
              name="fantasy_name"
              value={formValues.supplier.fantasy_name}
              onChange={handleInputChange('supplier')}
              onBlur={onBlur}
              height="4.8rem"
            >
              Nome fantasia
              {error.fantasy_name && (
                <SpanError>{error.fantasy_name}</SpanError>
              )}
            </Input>

            <Input
              id="responsible"
              name="responsible"
              value={formValues.supplier.responsible}
              onChange={handleInputChange('supplier')}
              onBlur={onBlur}
              height="4.8rem"
            >
              Responsável
              {error.responsible && <SpanError>{error.responsible}</SpanError>}
            </Input>
          </FormsField>
          <File
            id={'fotoFornecedor'}
            error={errorImage}
            image={formValues.fotos}
            handleRemove={handleRemove}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <Input
          id="cnpj"
          name="cnpj"
          value={formValues.supplier.cnpj}
          onChange={handleInputChange('supplier')}
          onBlur={onBlur}
          height="4.8rem"
        >
          CNPJ
          {error.cnpj && <SpanError>{error.cnpj}</SpanError>}
        </Input>

        <FormsField variant="double">
          <Input
            id="corporate_reason"
            name="corporate_reason"
            value={formValues.supplier.corporate_reason}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Razão Social
            {error.corporate_reason && (
              <SpanError>{error.corporate_reason}</SpanError>
            )}
          </Input>
          <Input
            id="state_registration"
            name="state_registration"
            value={formValues.supplier.state_registration}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
          >
            Inscrição estadual
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="email"
            name="email"
            value={formValues.supplier.email}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
            type="email"
          >
            Email
            {error.email && <SpanError>{error.email}</SpanError>}
          </Input>
          <Input
            id="phone"
            name="phone"
            value={formValues.supplier.phone}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
            type="tel"
          >
            Telefone
            {error.phone && <SpanError>{error.phone}</SpanError>}
          </Input>
        </FormsField>

        <FormsField variant="triple">
          <Input
            id="municipal_registration"
            name="municipal_registration"
            value={formValues.supplier.municipal_registration}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
          >
            Inscrição municipal
          </Input>
          <Input
            id="taxpayer_type"
            name="taxpayer_type"
            value={formValues.supplier.taxpayer_type}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
          >
            Tipo de contribuinte
          </Input>
          <Input
            id="suframa_inscription"
            name="suframa_inscription"
            value={formValues.supplier.suframa_inscription}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
          >
            Inscrição SUFRAMA
          </Input>
        </FormsField>

        <Input
          type="select"
          id="produto"
          height="4.8rem"
          options={[
            { value: 'opcao2', label: 'Produto 1' },
            { value: 'opcao3', label: 'Produto 2' },
          ]}
          value={formValues.produto}
          onChange={(event) =>
            setFormValues({ ...formValues, produto: event.target.value })
          }
        >
          Produto
        </Input>
        <FormsField variant="double">
          <Input
            id="price"
            name="price"
            value={formValues.supplier.price}
            onChange={handleInputChange('supplier')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Preço
            {error.price && <SpanError>{error.price}</SpanError>}
          </Input>
          <Input
            id="freight"
            name="freight"
            value={formValues.supplier.freight}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
          >
            Frete
          </Input>
        </FormsField>

        <Input
          id="time"
          name="time"
          value={formValues.supplier.time}
          onChange={handleInputChange('supplier')}
          height="4.8rem"
        >
          Tempo de entrega
        </Input>
      </Card>

      <Card title="Endereço do fornecedor">
        <FormsField variant="triple">
          <Input
            id="street"
            name="street"
            value={formValues.address.street}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Logradouro
            {error.street && <SpanError>{error.street}</SpanError>}
          </Input>
          <Input
            id="number"
            name="number"
            value={formValues.address.number}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Número
            {error.number && <SpanError>{error.number}</SpanError>}
          </Input>
          <Input
            id="cep"
            name="cep"
            value={formValues.address.cep}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            CEP
            {error.cep && <SpanError>{error.cep}</SpanError>}
          </Input>
        </FormsField>

        <Input
          id="complement"
          name="complement"
          value={formValues.address.complement}
          onChange={handleInputChange('address')}
          height="4.8rem"
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="neighborhood"
            name="neighborhood"
            value={formValues.address.neighborhood}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Bairro
            {error.neighborhood && <SpanError>{error.neighborhood}</SpanError>}
          </Input>
          <Input
            id="city"
            name="city"
            value={formValues.address.city}
            onChange={handleInputChange('address')}
            onBlur={onBlur}
            height="4.8rem"
          >
            Cidade
            {error.city && <SpanError>{error.city}</SpanError>}
          </Input>
        </FormsField>
      </Card>

      <Card>
        <Button type="submit" height="4.8rem">
          {button}
        </Button>
      </Card>
    </Form>
  );
};
