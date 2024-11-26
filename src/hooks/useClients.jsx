import React from "react";
import { client } from "../services/instance";

function useClients() {
  const postClient = async (json, formPhotos) => {
    try {
      // Lógica de guardar a imagem e o json
      const formData = new FormData();

      formPhotos?.forEach((photo) => {
        formData.append("photos", photo);
      });

      formData.append("json", JSON.stringify(json));

      const response = await client.post("/cliente/criarCliente", formData);

      return response;
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
      console.error(error);
      return error;
    }
  };

  const getClientById = async (id) => {
    try {
      const { data } = await client.get(`/client/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const deleteClient = async (cpf) => {
    try {
      const data = await client.delete(`/cliente/deletar/${cpf}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // Novo método PATCH com suporte para CPF e CNPJ
  const patchClient = async (id, json, formPhotos) => {
    try {
      // const formData = new FormData();

      // formPhotos?.forEach((photo) => {
      //   formData.append("photos", photo);
      // });

      // formData.append("json", JSON.stringify(json));
      console.log(id);

      const { data } = await client.put(`/client/${id}`, json);

      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  return {
    postClient,
    getClientById,
    getClient,
    deleteClient,
    patchClient,
  };
}

export default useClients;
