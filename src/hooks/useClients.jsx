import React from 'react';
import { client } from '../services/instance';

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
      const data = await client.get('/clientes/todos-clientes');
      return data;
    } catch (error) {
      return error;
    }
  };

  const deleteClient = async (cpf) => {
    try {
      const data = await client.delete(`/clientes/deletar/${cpf}`);
      
      return data;
    } catch (error) {
      return error;
    }
  };
  return {
    postClient, getClient, deleteClient
  };
}

export default useClients;
