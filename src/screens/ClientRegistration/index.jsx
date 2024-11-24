import React, { useState } from 'react';
import { useClients } from '../hooks/useClients';

const CadastroClientes = () => {
  const { postClient, patchClient, loading, error } = useClients();
  const [formData, setFormData] = useState({
    company: {
      razaoSocial: '',
      nomeFantasia: '',
      ramoAtuacao: '',
      cnpj: '',
      inscricaoEstadual: '',
      tipoContribuinte: '',
    },
    enderecoEmpresa: {
      logradouro: '',
      numero: '',
      cep: '',
      complemento: '',
      bairro: '',
      cidade: '',
    },
    enderecoEntrega: {
      logradouro: '',
      numero: '',
      cep: '',
      complemento: '',
      bairro: '',
      cidade: '',
    },
    socioProprietario: { nome: '', email: '', telefone: '', celular: '', rg: '', cpf: '' },
    contatoComercial: { nome: '', email: '', telefone: '', celular: '', rg: '', cpf: '' },
    contatoFinanceiro: { nome: '', email: '', telefone: '', celular: '', rg: '', cpf: '' },
    contatoContabil: { nome: '', email: '', telefone: '', celular: '', rg: '', cpf: '' },
  });

  const handleChange = (e, section, field) => {
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postClient(formData);
      alert('Cliente cadastrado com sucesso!');
    } catch (err) {
      alert('Erro ao cadastrar cliente: ' + err.message);
    }
  };

  const handlePatch = async (identifier, isCNPJ = false) => {
    try {
      await patchClient(identifier, formData, isCNPJ);
      alert('Cliente atualizado com sucesso!');
    } catch (err) {
      alert('Erro ao atualizar cliente: ' + err.message);
    }
  };

  return (
    <div>
      <h1>Cadastro de Clientes</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h2>Dados da Empresa</h2>
        <input
          type="text"
          placeholder="Razão Social"
          value={formData.company.razaoSocial}
          onChange={(e) => handleChange(e, 'company', 'razaoSocial')}
        />
        <input
          type="text"
          placeholder="Nome Fantasia"
          value={formData.company.nomeFantasia}
          onChange={(e) => handleChange(e, 'company', 'nomeFantasia')}
        />
        <input
          type="text"
          placeholder="Ramo de Atuação"
          value={formData.company.ramoAtuacao}
          onChange={(e) => handleChange(e, 'company', 'ramoAtuacao')}
        />
        <input
          type="text"
          placeholder="CNPJ"
          value={formData.company.cnpj}
          onChange={(e) => handleChange(e, 'company', 'cnpj')}
        />
        <input
          type="text"
          placeholder="Inscrição Estadual"
          value={formData.company.inscricaoEstadual}
          onChange={(e) => handleChange(e, 'company', 'inscricaoEstadual')}
        />
        <select
          value={formData.company.tipoContribuinte}
          onChange={(e) => handleChange(e, 'company', 'tipoContribuinte')}
        >
          <option value="">Selecione o Tipo de Contribuinte</option>
          <option value="Contribuinte ICMS">Contribuinte ICMS</option>
          <option value="Contribuinte Isento">Contribuinte Isento</option>
          <option value="Não Contribuinte">Não Contribuinte</option>
        </select>

        <h2>Endereço da Empresa</h2>
        <input
          type="text"
          placeholder="Logradouro"
          value={formData.enderecoEmpresa.logradouro}
          onChange={(e) => handleChange(e, 'enderecoEmpresa', 'logradouro')}
        />
        {/* Outros campos de endereço e contato seguem o mesmo padrão */}

        <button type="submit">Cadastrar Cliente</button>
        <button type="button" onClick={() => handlePatch('12345678900')}>
          Atualizar Cliente (CPF)
        </button>
        <button type="button" onClick={() => handlePatch('12345678000199', true)}>
          Atualizar Cliente (CNPJ)
        </button>
      </form>
    </div>
  );
};

export default CadastroClientes;
