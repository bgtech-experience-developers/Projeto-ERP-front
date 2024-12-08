import React from "react";
import { client } from "../services/instance";
import axios from "axios";

function useClients() {
  const postClient = async (json, formPhotos) => {
    try {
      // Lógica de guardar a imagem
      const formData = new FormData();

      formPhotos?.forEach((photo) => {
        formData.append("photos", photo);
      });

      // const photos = formData.getAll("photos");

      // Lógica de guardar o JSON
      formData.append("json", JSON.stringify(json));

      // json = formData.get("json");

      // const body = {
      //   json,
      //   photos,
      // };

      // console.log(body);
      console.log(formData.getAll("photos"));

      const response = await client.post("/clientes/registro", formData);

      console.log(response);
    } catch (error) {
      console.error(error);

      return error;
    }
  };

  const getClients = async (extraUrl ) => {
    try {
      // API original

      const { data } = await client.get(`/clientes/${extraUrl}`);


      console.log(data)
      if (data) {
        return data;
      }
      return "Não foi possível trazes os dados do cliente";
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getClientByID = async (id) => {
    try {
      // API original
      const { data } = await client.get(`/clientes/${id}`);

      // Teste na minha mock (Carlos)
      // const { data } = await client.get(`/api/cliente/${id}`);

      if (data) {
        return data;
      }
      return "Não foi possível trazes os dados do cliente";
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const deleteClient = async (id) => {
    try {
      // API Original

      const data = await client.delete(`/clientes/remover/${id}`);


      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // Novo método PATCH com suporte para CPF e CNPJ
  const patchClient = async (id, updatedInfo) => {
    try {
      // const endpoint = isCNPJ
      //   ? `/clientes/atualizar?contribuinte=${identifier}` // Endpoint para CNPJ
      //   : `/clientes/atualizar?contribuinte=${identifier}`; // Endpoint para CPF

      // Usando o id em vez do cnpj ou cpf
      const endpoint = `/clientes/atualizar/${id}`;
      const data = await client.patch(endpoint, updatedInfo);
      alert('Cliente atualizado com sucesso!')
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      return error;
    }
  };

  return {
    postClient,
    getClients,
    getClientByID,
    deleteClient,
    patchClient,
  };
};

export default useClients;
