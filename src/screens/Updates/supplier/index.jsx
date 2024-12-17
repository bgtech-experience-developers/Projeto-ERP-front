// Interno

import { SpanError } from '../style';
import useForm from '../../../hooks/useForm';
import { Card } from '../../../components/Forms/Card';
import { Form } from '../../../components/Forms/Form';
import { Button } from '../../../components/Forms/Button';
import { Input } from '../../../components/Forms/Inputs/Input';
import { FileInput } from '../../../components/Forms/Inputs/File';
import { FormsField } from '../../../components/Forms/FormsField';
// Externo

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Checkbox from '../../../components/Forms/Inputs/Checkbox';

export const UpdateSupplier = () => {
  const { state } = useLocation();

  const { mask, onBlur, removeErrorOnChange, error } = useForm();
  const [formValues, setFormValues] = useState({
    supplier: {
      name: '',
      code: '',
      email: '',
      phone: '',
      cell_phone: '',
      rg: '',
      cpf: '',
      birth_date: '',
      imagem: '',
      // Adicionar no futuro
      state: '',
    },
    product: {
      name: '',
      price: '',
      deadline: '',
      stock: '',
      tax: '',
    },
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      neighborhood: '',
      state: '',
    },
  });

  useEffect(() => {
    console.log(state);

    if (state?.clients) {
      setFormValues({
        ...formValues,
        supplier: {
          name: state.clients.supplier_name,
          email: state.clients.email,
          phone: state.clients.phone,
          cell_phone: mask('phone', state.clients.phone),
          rg: state.clients.rg,
          cpf: mask('cpf', state.clients.cpf),
          birth_date: '',
          imagem: state.clients.image,
        },
      });
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
    removeErrorOnChange(name);

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
    <Form title={'Editar Fornecedor'}>
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
          </FormsField>
          <FileInput
            id={'fotoProduto'}
            error={errorImage}
            image={formValues.supplier_imagem}
            handleRemove={handleRemove}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <FormsField variant="double">
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
            value={formValues.supplier.birth_date}
            onChange={handleInputChange('supplier')}
            height="4.8rem"
            type="date"
          >
            Data de nascimento
          </Input>
        </FormsField>
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

        <Input
          id="state"
          name="state"
          value={formValues.address.state}
          onChange={handleInputChange('address')}
          onBlur={onBlur}
          height="4.8rem"
        >
          Estado
          {error.city && <SpanError>{error.state}</SpanError>}
        </Input>

        <FormsField>
          <Checkbox text={'Sim, desativar'} />
        </FormsField>
      </Card>
      <Card>
        <Button type="submit" height="4.8rem">
          Atualizar Cadastro
        </Button>
      </Card>
    </Form>
  );
};
