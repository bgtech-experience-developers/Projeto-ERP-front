import React from "react";
import * as S from "./style";
import useClients from "../../hooks/useClients";

// Externos
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiEye, HiTrash, HiPencilAlt } from "react-icons/hi";

export const TableActions = ({ row, data, setData }) => {
  const navigate = useNavigate();
  const { deleteClient } = useClients();

  // Função para deletar o Cliente
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteClient(id);
        setData((prev) => prev.filter((data) => data.id !== id));
        toast.success("Cliente excluído com sucesso!");
      } catch (error) {
        toast.error("Erro ao excluir cliente.");
        console.error("Erro ao deletar cliente:", error);
      }
    }
  };

  // Função para o botão de editar encaminhar para o form de cadastro com os dados do cliente
  const handleEdit = (row) => {
    navigate("/cadastrar/cliente/editar", { state: { clients: row.original } });
  };

  function handleClick() {
    navigate("/cadastrar/cliente/visualizar");
  }

  return (
    <S.IconContainer>
      <HiEye className="icon" onClick={handleClick} />
      <HiTrash className="icon" onClick={() => handleDelete(row.original.id)} />
      <HiPencilAlt className="icon" onClick={() => handleEdit(row)} />
    </S.IconContainer>
  );
};
