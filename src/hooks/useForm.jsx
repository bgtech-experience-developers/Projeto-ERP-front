import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  cnpj: {
    regex: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/,
    message: 'CNPJ inválido',
  },
  inscricaoEstadual: {
    regex: /^\d{2,14}$/,
    message: 'Inscrição inválido',
  },
  telefone: {
    regex: /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/,
    message: 'Telefone inválido',
  },
};

const useForm = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value, type) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: (type) => validate(value, type),
    validate: (type) => validate(value, type),
  };
};

export default useForm;
