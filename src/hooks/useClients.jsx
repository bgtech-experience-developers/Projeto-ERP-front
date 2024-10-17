import React from 'react';
import { client } from '../services/instance';

function useClients() {
  const postClient = async (data) => {
    const response = client.post('/clientes/cadastro', data);
    console.log(data);
  };
  return {
    postClient,
  };
}

export default useClients;
