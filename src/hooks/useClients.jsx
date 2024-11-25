import React from 'react';
import { client } from '../services/instance';
import axios from 'axios';

function useClients() {
  const postClient = async (info) => {
    try {
      const data = await client.post('/clientes/cadastro', info);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  const getClient = async () => {
    try {
      const { data } = await client.get('/cliente');
      console.log(data)
      return data;
    } catch (error) {
      return error;
    }
  };

  const deleteClient = async (cpf) => {
    try {
      const data = await client.delete(`/cliente/deletar/${cpf}`);
      return data;
    } catch (error) {
      return error;
    }
  };

  // Novo método PATCH com suporte para CPF e CNPJ
  const patchClient = async (identifier, updatedInfo, isCNPJ = false) => {
    try {
      const endpoint = isCNPJ
        ? `/cliente/atualizar?contribuinte=${identifier}` // Endpoint para CNPJ
        : `/cliente/atualizar?contribuinte=${identifier}`; // Endpoint para CPF

      const data = await client.patch(endpoint, updatedInfo);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
    postClient,
    getClient,
    deleteClient,
    patchClient, 
  };
}

export default useClients;
