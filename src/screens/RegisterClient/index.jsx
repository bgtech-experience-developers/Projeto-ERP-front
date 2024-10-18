import { Button } from '../../components/Forms/Button';
import { Card } from '../../components/Forms/Card';
import { FormFieldContainer } from '../../components/Forms/FormFieldContainer';
import { Input } from '../../components/Forms/Input';
import { Label } from '../../components/Forms/Label';
import { StyledForm } from '../../components/Forms/style';
import React, { useState } from 'react';
import useClients from '../../hooks/useClients';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterClient = () => {
  const navigate = useNavigate();

  const notify = (errorMessage) => {
    toast.error(errorMessage, {
      position: 'bottom-right',
      style: {
        fontSize: '4rem',
      },
    });
  };

  // Uso das funções do hook useClients
  const { postClient } = useClients();

  // Estado que vai armazenar o valor dos campos
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    rg: '',
    cpf: '',
    nascimento: '',
    tipo: '',
    situacao: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    telefone: '',
    celular: '',
  });

  // Estado que vai armazenar os erros
  const [errors, setErrors] = useState({});

  // Função chamada quando o usuário digita nos campos obrigatórios
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  // Validação quando o usuário sai do campo obrigatório sem preencher
  const handleBlur = (event) => {
    const { id } = event.target;
    const newErrors = { ...errors };

    if (id === 'nome') {
      if (!formValues.nome) {
        newErrors.nome = '*o preenchimento desse campo é obrigatório';
      } else {
        delete newErrors.nome;
      }
    }

    if (id === 'email') {
      if (!formValues.email) {
        newErrors.email = '*o preenchimento desse campo é obrigatório';
      } else {
        delete newErrors.email;
      }
    }

    if (id === 'cpf') {
      if (!formValues.cpf) {
        newErrors.cpf = '*o preenchimento desse campo é obrigatório';
      } else {
        delete newErrors.cpf;
      }
    }

    setErrors(newErrors);
  };

  // Função de validação quando envia o formulário sem preencher algum campo obrigatório
  const validateFields = () => {
    const newErrors = {};

    if (!formValues.nome) {
      newErrors.nome = '*o preenchimento desse campo é obrigatório';
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
      newErrors.email = '*o preenchimento desse campo é obrigatório';
    }

    if (formValues.cpf.length !== 14) {
      newErrors.cpf = '*o preenchimento desse campo é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se todos os campos tem algum valor
    const allFieldsReceived = Object.keys(formValues).every(
      (key) => formValues[key] !== undefined,
    );

    if (allFieldsReceived && validateFields()) {
      // Fazer a lógica da integração aqui, coloquei o alert genérico pra testar

      postClient({
        cpf: formValues.cpf,
        situacao: formValues.situacao,
        name: formValues.nome,
        rg: formValues.rg,
        date_birth: formValues.nascimento,
        email: formValues.email,
        telefone: formValues.telefone,
        celular: formValues.celular,
        cep: formValues.cep,
        logradouro: formValues.logradouro,
        numero: formValues.numero,
        complemento: formValues.complemento,
        bairro: formValues.bairro,
        cidade: formValues.cidade,
      })
        .then(({ response }) => {
          console.log(response);
          if (response && response.status !== 201) {
            notify(response.data.message);
            return;
          }

          navigate('/register-sucess', {
            state: { formType: 'client' },
            replace: true,
          });

          // Limpa o formulário após o envio
          setFormValues({
            nome: '',
            email: '',
            rg: '',
            cpf: '',
            nascimento: '',
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            telefone: '',
            celular: '',
          });

          // Limpa os erros
          setErrors({});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Card
        variant={'titleRegister'}
        title="Cadastrar Cliente"
        width="78rem"
        height="8rem"
      />
      <Card variant={'cardRegister'} width="78rem">
        <StyledForm onSubmit={handleSubmit}>
          <FormFieldContainer>
            <Label htmlFor={'nome'}>Nome</Label>
            {errors.nome && (
              <p style={{ color: 'red', fontSize: '1rem' }}>{errors.nome}</p>
            )}
            <Input
              id={'nome'}
              type={'text'}
              value={formValues.nome}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor={'email'}>Email</Label>
            {errors.email && (
              <p style={{ color: 'red', fontSize: '1rem' }}>{errors.email}</p>
            )}
            <Input
              id={'email'}
              type={'email'}
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </FormFieldContainer>

          <FormFieldContainer variant="inputDuplo">
            <FormFieldContainer>
              <Label htmlFor={'rg'}>RG</Label>
              {errors.rg && (
                <p style={{ color: 'red', fontSize: '1rem' }}>{errors.rg}</p>
              )}
              <Input
                id={'rg'}
                type={'text'}
                value={formValues.rg}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'cpf'}>CPF</Label>
              {errors.cpf && (
                <p style={{ color: 'red', fontSize: '1rem' }}>{errors.cpf}</p>
              )}
              <Input
                id={'cpf'}
                type={'text'}
                value={formValues.cpf}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'nascimento'}>Data de nascimento</Label>
              <Input
                id={'nascimento'}
                type={'date'}
                value={formValues.nascimento}
                onChange={handleInputChange}
              />
            </FormFieldContainer>
          </FormFieldContainer>

          <FormFieldContainer variant="inputDuplo">
            <FormFieldContainer>
              <Label htmlFor={'tipo'}>Tipo</Label>
              <Input
                type="select"
                options={[
                  { value: '', label: 'Seleciona...' },
                  // Opções genéricas, no figma não tem especificado o que tem que ser, apenas entendi que deveria ser um select
                  { value: 'opcao1', label: 'Opção 1' },
                  { value: 'opcao2', label: 'Opção 2' },
                ]}
                value={formValues.tipo}
                onChange={handleInputChange}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'situacao'}>Situação</Label>
              <Input
                type="select"
                options={[
                  { value: '', label: 'Selecione...' },
                  { value: 'opcao1', label: 'Opção 1' },
                  { value: 'opcao2', label: 'Opção 2' },
                ]}
                value={formValues.situacao}
                onChange={handleInputChange}
              />
            </FormFieldContainer>
          </FormFieldContainer>

          <FormFieldContainer variant="inputDuplo">
            <FormFieldContainer>
              <Label htmlFor={'cep'}>CEP</Label>
              <Input
                id={'cep'}
                type={'text'}
                value={formValues.cep}
                onChange={handleInputChange}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'logradouro'}>Logradouro</Label>
              <Input
                id={'logradouro'}
                type={'text'}
                value={formValues.logradouro}
                onChange={handleInputChange}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'numero'}>Número</Label>
              <Input
                id={'numero'}
                type={'text'}
                value={formValues.numero}
                onChange={handleInputChange}
              />
            </FormFieldContainer>
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor={'complemento'}>Complemento</Label>
            <Input
              id={'complemento'}
              type={'text'}
              value={formValues.complemento}
              onChange={handleInputChange}
            />
          </FormFieldContainer>

          <FormFieldContainer variant="inputDuplo">
            <FormFieldContainer>
              <Label htmlFor={'bairro'}>Bairro</Label>
              <Input
                id={'bairro'}
                type={'text'}
                value={formValues.bairro}
                onChange={handleInputChange}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'cidade'}>Cidade</Label>
              <Input
                id={'cidade'}
                type={'text'}
                value={formValues.cidade}
                onChange={handleInputChange}
              />
            </FormFieldContainer>
          </FormFieldContainer>

          <FormFieldContainer variant="inputDuplo">
            <FormFieldContainer>
              <Label htmlFor={'telefone'}>Telefone</Label>
              <Input
                id={'telefone'}
                type={'text'}
                placeholder={'(xx) xxxx-xxxx'}
                value={formValues.telefone}
                onChange={handleInputChange}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor={'celular'}>Celular</Label>
              <Input
                id={'celular'}
                type={'text'}
                placeholder={'(xx) x xxxx-xxxx'}
                value={formValues.celular}
                onChange={handleInputChange}
              />
            </FormFieldContainer>
          </FormFieldContainer>

          <Button onClick={notify} variant={'btRegister'} type="submit">
            Cadastrar
          </Button>
        </StyledForm>
      </Card>

      <ToastContainer />
    </>
  );
};
