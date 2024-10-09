import React from 'react';
import Input from '../Formulario/Input';
import { ContainerForm, Formulario } from '../Formulario/Containers/style';
import { BotaoBase } from '../Botao/style';
import { BotaoForm, Flex, FlexGap } from './style';
import { campos } from './campos';
import Select from '../Formulario/Select';
import Textarea from '../Formulario/Textarea';

function FormularioCliente() {
  const [formDataGerais, setformDataGerais] = React.useState({
    tipoCliente: '',
    situacao: '',
    ...campos[0].inputs.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  });
  const [formData, setFormData] = React.useState({
    ...campos[1].inputs.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  });

  const [image, setImage] = React.useState('');
  const [observacao, setObservacao] = React.useState('');

  const [todasInformacoes, setTodasInformacoes] = React.useState({});

  function handleChangeDadosGerais(event) {
    setformDataGerais({
      ...formDataGerais,
      [event.target.name]: event.target.value,
    });
  }

  function handleChangeEndereco(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const everyObjects = [formDataGerais, formData, image, observacao];
    setTodasInformacoes(everyObjects);
  }

  return (
    <Formulario style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
      <ContainerForm>
        <h2>Dados gerais</h2>
        <FlexGap>
          <Flex>
            <Select
              label="Tipo de cliente"
              items={['item 1', 'item 2', 'item 3']}
              value={formDataGerais.tipoCliente}
              handleChange={handleChangeDadosGerais}
              reference="tipoCliente"
            />
            <Select
              label="Situação"
              items={['item 1', 'item 2', 'item 3']}
              value={formDataGerais.situacao}
              handleChange={handleChangeDadosGerais}
              reference="situacao"
            />
          </Flex>
          <Input
            onChange={handleChangeDadosGerais}
            reference={'nome'}
            label={'Nome'}
          />
          <Input
            onChange={handleChangeDadosGerais}
            reference={'email'}
            label={'Email'}
          />
          <Input
            onChange={handleChangeDadosGerais}
            reference={'telefone'}
            label={'Telefone Comercial'}
          />
          <Input
            onChange={handleChangeDadosGerais}
            reference={'celular'}
            label={'Telefone Celular'}
          />
        </FlexGap>

        <h2>Endereços</h2>
        <FlexGap>
          <Input
            onChange={handleChangeEndereco}
            reference={'cep'}
            label={'CEP'}
          />
          <Flex>
            <Input
              onChange={handleChangeEndereco}
              reference={'logradouro'}
              label={'Logradouro'}
            />
            <Input
              onChange={handleChangeEndereco}
              reference={'numero'}
              label={'Número'}
            />
          </Flex>
          <Input
            onChange={handleChangeEndereco}
            reference={'complemento'}
            label={'Complemento'}
          />
        </FlexGap>

        <FlexGap>
          <h2>Foto</h2>
          <input
            onChange={({ target }) =>
              setImage(URL.createObjectURL(target.files[0]))
            }
            type="file"
          />
          <img style={{ width: '300px' }} src={image} alt="" />
        </FlexGap>

        <FlexGap>
          <h2>Observações</h2>
          <Textarea
            label="Observações"
            setValue={({ target }) => setObservacao(target.value)}
            value={observacao}
          />
        </FlexGap>

        <BotaoForm>Enviar</BotaoForm>
      </ContainerForm>
    </Formulario>
  );
}

export default FormularioCliente;
