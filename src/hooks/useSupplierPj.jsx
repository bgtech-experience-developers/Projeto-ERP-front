import { api } from "../services/instance";

function useSupplierPj() {
  const postSupplierPj = async (json, formPhotos) => {
    try {
      const formData = new FormData();

      formPhotos?.forEach((photo) => {
        formData.append("photos", photo);
      });

      formData.append("json", JSON.stringify(json));

      const response = await api.post("/supplierPj/cadastrar", formData);

      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getSupplierPj = async (extraURL) => {
    try {
      const { data } = await api.get(`/supplierPj/${extraURL}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getSupplierPjById = async (id) => {
    try {
      const { data } = await api.get(`/supplierPj/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const deleteSupplierPj = async (id) => {
    try {
      const data = await api.delete(`/supplierPj/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // Fazer depois
  const patchSupplierPj = async (id, json, formPhotos) => {
    try {
    } catch (error) {}
  };

  return {
    postSupplierPj,
    getSupplierPj,
    getSupplierPjById,
    deleteSupplierPj,
    patchSupplierPj,
  };
}

export default useSupplierPj;
