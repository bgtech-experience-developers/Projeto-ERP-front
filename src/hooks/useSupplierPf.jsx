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
      const { data } = await api.get(`/suppliers/${extraURL}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const getSupplierPfById = async (id) => {
    try {
      const { data } = await api.get(`/supplier/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
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
