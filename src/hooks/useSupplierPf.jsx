import { api } from "../services/instance";

function useSupplierPf() {
  const postSupplierPf = async (json, formPhotos) => {
    try {
      const formData = new FormData();

      formPhotos?.forEach((photo) => {
        formData.append("photos", photo);
      });

      formData.append("json", JSON.stringify(json));

      const response = await api.post("/supplierPf/cadastrar", formData);

      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const getSupplierPf = async (extraURL) => {
    try {
      //Colocando um endpoint genérico apenas para montar a estrutura
      const response = await api.get(`/fornecedor/fisico/${extraURL}`);

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 204) {
        console.log("Nenhum fornecedor encontrado.");
      } else {
        console.log(`Status inesperado: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Erro do servidor: ",
          error.response.status,
          error.response.data
        );
        if (error.response.status === 404) {
          console.log("Endpoint não encontrado (404). Verifique a URL.");
        } else if (error.response.status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        } else {
          console.log(`Erro inesperado: ${error.response.status}`);
        }
      } else if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    }
  };

  const getSupplierPfById = async (id) => {
    try {
      //Colocando um endpoint genérico apenas para montar a estrutura
      const response = await api.get(`/colabInterno/${id}`);

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 204) {
        console.log(`Nenhum colaborador encontrado com o ID ${id}.`);
      } else {
        console.log(`Status inesperado: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        console.error("Erro ao buscar colaboradores: ", error);
        if (error.response.status === 404) {
          console.log(`Colaborador com o ID ${id} não foi encontrado (404).`);
        } else if (error.response.status === 400) {
          console.log(
            "Requisição inválida. Verifique se o ID está correto (400)."
          );
        } else if (error.response.status === 500) {
          console.log(
            "Erro interno do servidor (500). Tente novamente mais tarde."
          );
        } else {
          console.log(`Erro inesperado: ${error.response.status}`);
        }
      } else if (error.request) {
        console.error("Sem resposta do servidor:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    }
  };

  const deleteSupplierPf = async (id) => {
    try {
      const data = await api.delete(`/supplier/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // Fazer depois
  const patchSupplierPf = async (id, json, formPhotos) => {
    try {
    } catch (error) {}
  };

  return {
    postSupplierPf,
    getSupplierPf,
    getSupplierPfById,
    deleteSupplierPf,
    patchSupplierPf,
  };
}

export default useSupplierPf;
