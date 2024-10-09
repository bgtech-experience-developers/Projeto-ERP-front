import React from 'react';
import Input from '../Formulario/Input';
import { ContainerForm, Formulario } from '../Formulario/Containers/style';
import { BotaoBase } from '../Botao/style';

function FormularioCliente() {
  const [formData, setFormData] = React.useState({
    nome: '',
    email: '',
    senha: '',
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContainerForm>
        <Input onChange={handleChange} reference={'nome'} label={'Nome'} />
        <Input onChange={handleChange} reference={'email'} label={'Email'} />
        <Input onChange={handleChange} reference={'senha'} label={'Senha'} />
        <BotaoBase>Enviar</BotaoBase>
      </ContainerForm>
    </Formulario>
  );
}

export default FormularioCliente;
