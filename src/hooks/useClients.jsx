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
  return {
    postClient,
  };
}

export default useClients;
