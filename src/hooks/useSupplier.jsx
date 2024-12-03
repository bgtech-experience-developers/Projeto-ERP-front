
import { supplierPf } from "../services/instance";

function useSupplierPf() {

    const postSupplierPf = async (json, formPhotos) => {
        try {
            const formData = new FormData();

            formPhotos?.forEach((photo) => {
                formData.append("photos", photo);
            });

            formData.append("json", JSON.stringify(json));

            const response = await supplierPf.post("/supplierPf/cadastrar", formData);

            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    const getSupplierPf = async () => {
        try {
            const { data } = await supplierPf.get("/supplierPf");            
            return data;            
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    const getSupplierPfById = async (id) => {
        try {
            const { data } = await supplierPf.get(`/supplierPf/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    const deleteSupplierPf = async (id) => {
        try {
            const data = await supplierPf.delete(`/supplierPf/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    // Fazer depois 
    const patchSupplierPf = async (id, json, formPhotos) => {
        try {

        } catch (error) {

        }
    };

    return {
        postSupplierPf,
        getSupplierPf,
        getSupplierPfById,
        deleteSupplierPf,
        patchSupplierPf
    };  
}

export default useSupplierPf;
