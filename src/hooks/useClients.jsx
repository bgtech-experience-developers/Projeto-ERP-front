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

      const response = await client.post("/cliente/criarCliente", formData);

      console.log(response);
    } catch (error) {
      console.error(error);

      return error;
    }
  };

  const getClient = async (extraUrl) => {
    try {
      // API original
      // const { data } = await client.get(`/cliente${extraUrl}`);

      // Teste na minha mock (Carlos)
      const { data } = await client.get(`/api/cliente${extraUrl}`);

      if (data) {
        return data;
      }
      return "Não foi possível trazes os dados do cliente";
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const deleteClient = async (cpf) => {
    try {
      // const data = await client.delete(`/cliente/deletar/${cpf}`);
      const data = await client.delete(`/cliente/${cpf}`);
      return data;
    } catch (error) {
      console.error(error);
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
