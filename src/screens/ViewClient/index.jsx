import React from "react";
import {
  StyledTableContainer,
  StyledTitleTable,
} from "../../components/Tables";
import useClients from "../../hooks/useClients";

// Externos
import "gridjs/dist/theme/mermaid.css";
import { toast } from "react-toastify";
import { Text } from "../../components/Texts/Text";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "gridjs-react";
import { ptBR } from "gridjs/l10n";
import { css } from "@emotion/css";
import { _ } from "gridjs-react";
import styled from "styled-components";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import { SidebarContext } from "../../contexts/SidebarContext";

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 2rem;
    cursor: pointer;
    color: #969696;
    &:hover {
      color: #000000;
    }
  }
`;

export const ViewTableClients = () => {
  const [clients, setClients] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { getClient, deleteClient } = useClients();
  const [key, setKey] = React.useState(0);

  const { isActive, isHover } = React.useContext(SidebarContext);
  const gridRef = React.useRef(null);

  const navigate = useNavigate();

  // Função para buscar clientes
  React.useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        const data = await getClient();

        const updatedData = data.map((client) => ({
          ...client,
          status: client.status ? "Ativo" : "Inativo", // Define status
          cnpj: client.cnpj || "Não informado", // Inclui o CNPJ - Ranyer
        }));

        setClients(updatedData);
      } catch (error) {
        toast.error("Erro ao buscar clientes.");
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClients();
  }, []);

  React.useEffect(() => {
    const handleForceRender = () => {
      setKey(key + 1);
    };
    handleForceRender();
  }, [isActive, isHover]);

  // Alternar status entre "Ativo" e "Inativo"
  const toggleStatus = async (id) => {
    const client = clients.find((c) => c.id === id);
    const newStatus = client.status === "Ativo" ? "Inativo" : "Ativo";

    try {
      await axios.patch(`/api/clients/${id}`, { status: newStatus });
      setClients((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
      );
      toast.success("Status atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao atualizar status.");
      console.error("Erro ao alternar status:", error);
    }
  };

  // Excluir usuário
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteClient(id);
        setClients((prev) => prev.filter((client) => client.id !== id));
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

  // Definições da tabela
  const table = {
    columns: [
      { id: "id", name: "ID", hidden: true },
      { id: "corporate_reason", name: "Nome da Empresa" },
      { id: "branch_activity", name: "Serviço" },
      { id: "name", name: "Responsável" },
      { id: "email", name: "Email", width: "auto" },
      { id: "cell_phone", name: "Celular", width: "15%" },
      {
        name: "Opções",
        formatter: (cell, row) => {
          return _(
            <IconContainer>
              <HiEye className="icon" onClick={handleClick} />
              <HiTrash
                className="icon"
                onClick={() => handleDelete(row.cells[0].data)}
              />
              <HiPencilAlt
                className="icon"
                onClick={() => handleEdit(row.id)}
              />
            </IconContainer>
          );
        },
      },
    ],

    data: clients,

    className: {
      table: css`
        font-size: 6rem;
      `,
      th: css`
        font-weight: bold;
        font-size: 3rem;
      `,
      td: css``,
      tr: css`
        &:hover td {
          background-color: rgba(0, 0, 0, 0.1);
          border: rgba(0, 0, 0, 0.1);
        }
      `,
      footer: css`
        font-size: 5.5rem;
      `,
    },

    language: ptBR,

    pagination: {
      limit: 5,
      summary: true,
    },
  };

  return (
    <>
      <StyledTableContainer>
        <StyledTitleTable>
          <Text variant="large" bold="bold">
            Meus clientes
          </Text>
          <Link to="/cadastrar/cliente/novo">Cadastrar novo</Link>
        </StyledTitleTable>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <Grid
            search={true}
            sort={true}
            resizable={true}
            data={table.data}
            key={key}
            columns={table.columns}
            className={table.className}
            language={table.language}
            pagination={table.pagination}
            ref={gridRef}
          />
        )}
      </StyledTableContainer>
    </>
  );
};
