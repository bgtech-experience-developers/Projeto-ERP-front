import React from "react";
import { api } from "../services/instance";
import { useNavigate } from "react-router-dom";

function useClients() {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const postClient = async (json, formPhotos) => {
    try {
      // Verifique se as fotos e o JSON estão definidos
      if (!json || !formPhotos || formPhotos.length === 0) {
        throw new Error("Dados inválidos: JSON ou fotos não fornecidos.");
      }

      // Criação do FormData
      const formData = new FormData();

      // Adicionando as fotos ao FormData
      formPhotos.forEach((photo) => {
        formData.append("photos", photo);
      });

      // Adicionando o JSON ao FormData
      formData.append("json", JSON.stringify(json));

      console.log("photos: ", formData.getAll("photos"));
      console.log("json: ", formData.get("json"));

      // Enviando a requisição
      const response = await api.post("/clientes/registro", formData);

      // Redirecionamento após sucesso
      navigate("/cadastrar/cliente/novo/sucesso");

      return response;
    } catch (error) {
      // Em caso de erro, loga uma mensagem mais clara
      console.error("Erro ao enviar os dados do cliente:", error);

      // Pode retornar o erro com uma mensagem mais amigável
      return {
        error: error.message || "Erro desconhecido ao registrar o cliente",
      };
    }
  };

  const getClients = async (extraUrl) => {
    try {
      // API original

      const response = await api.get(`/clientes/${extraUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      const { data } = await api.get(`clientes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
      const data = await api.delete(`/clientes/remover/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const patchClient = async (id, updatedInfo, updatePhoto) => {
    console.log("info: ", updatedInfo);
    console.log("photos: ", updatePhoto);

    try {
      const formData = new FormData();
      formData.append("json", JSON.stringify(updatedInfo));

      updatePhoto?.forEach((photo) => {
        formData.append("photos", photo);
      });

      const endpoint = `/clientes/atualizar/${id}`;
      const { data } = await api.patch(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
