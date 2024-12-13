import React from "react";
import { client } from "../services/instance";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useClients() {
  const navigate = useNavigate();

  const postClient = async (json, formPhotos) => {
    try {
      // Lógica de guardar a imagem
      const formData = new FormData();

      formPhotos?.forEach((photo) => {
        formData.append("photos", photo);
      });

      // Lógica de guardar o JSON
      formData.append("json", JSON.stringify(json));

      const response = await client.post("/clientes/registro", formData);

      navigate("/cadastrar/cliente/novo/sucesso");

      console.log(response);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getClients = async (extraUrl) => {
    try {
      // API original

      const response = await client.get(`/clientes/${extraUrl}`);

      if (response.status === 200) {
        return response.data;
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
      const { data } = await client.get(`clientes/${id}`);

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
      const data = await client.delete(`/clientes/remover/${id}`);

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const patchClient = async (id, updatedInfo, updatePhoto) => {
    try {
      const formData = new FormData();
      formData.append("json", JSON.stringify(updatedInfo));

      updatePhoto?.forEach((photo) => {
        formData.append("photos", photo);
      });

      const endpoint = `/clientes/atualizar/${id}`;
      const { data } = await client.patch(endpoint, formData);

      navigate("/cadastrar/cliente/editar/sucesso");
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  };

  return {
    postClient,
    getClients,
    getClientByID,
    deleteClient,
    patchClient,
  };
}

export default useClients;
