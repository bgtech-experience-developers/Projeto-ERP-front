
import { supplierPj } from "../services/instance";

function useSupplierPj() {

    const postSupplierPj = async (json, formPhotos) => {
        try {
            const formData = new FormData();

            formPhotos?.forEach((photo) => {
                formData.append("photos", photo);
            });

            formData.append("json", JSON.stringify(json));

            const response = await supplierPj.post("/supplierPj/cadastrar", formData);

            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    const getSupplierPj = async () => {
        try {
            const { data } = await supplierPj.get("/supplierPj");
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    const getSupplierPjById = async (id) => {
        try {
            const { data } = await supplierPj.get(`/supplierPj/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    const deleteSupplierPj = async (id) => {
        try {
            const data = await supplierPj.delete(`/supplierPj/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    // Fazer depois 
    const patchSupplierPj = async (id, json, formPhotos) => {
        try {

        } catch (error) {

        }
    };

    return {
        postSupplierPj,
        getSupplierPj,
        getSupplierPjById,
        deleteSupplierPj,
        patchSupplierPj
    };
}

export default useSupplierPj
    ;
