import React from "react";
import { client } from "../services/instance";

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

  const getClient = async () => {
    try {
      const { data } = await client.get("/cliente");
      console.log(data);
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
