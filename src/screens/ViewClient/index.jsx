import React from "react";
import axios from "axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import {
  StyledTableContainer,
  StyledTitleTable,
} from "../../components/Tables";
import useClients from "../../hooks/useClients";
import { toast } from "react-toastify";
import { Text } from "../../components/Texts/Text";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiEye, HiTrash, HiPencilAlt } from "react-icons/hi"; // Importando o novo ícone HiPencilAlt
import { width } from "@mui/system";

// Estilo para os ícones
const IconContainer = styled.div`
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
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const { getClient, deleteClient } = useClients();
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

  // Função para deletar cliente
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

  // Função para o botão de editar encaminhar para o form de cadastro com os dados do cliente
  const handleEdit = (row) => {
    navigate("/cadastrar/cliente/editar", { state: { clients: row.original } });
  };

  // Colunas da tabela
  const columns = React.useMemo(
    () => [
      { header: "Nome da Empresa", accessorKey: "corporate_reason", size: 150 },
      { header: "Serviço", accessorKey: "branch_activity", size: 100 },
      { header: "Responsável", accessorKey: "name", size: 100 },
      { header: "Email", accessorKey: "email", size: 100 },
      { header: "Celular", accessorKey: "cell_phone", size: 100 },
      {
        header: "Situação",
        accessorKey: "status",
        size: 50,
        Cell: ({ row }) => {
          return (
            <Text
              variant="small"
              bold="800"
              align="center"
              color={row.original.status === "Ativo" ? "green" : "red"}
            >
              {row.original.status}
            </Text>
          );
        },
      },
      {
        header: "Opções",
        size: 50,
        Cell: ({ row }) => (
          <IconContainer>
            <NavLink to="/cadastrar/cliente/visualizar">
              <HiEye
                className="icon"
                onClick={() => console.log("Visualizar", row.original.id)}
              />
            </NavLink>
            <HiTrash
              className="icon"
              onClick={() => handleDelete(row.original.id)}
            />
            <HiPencilAlt className="icon" onClick={() => handleEdit(row)} />
          </IconContainer>
        ),
      },
    ],
    []
  );

  // Definiçöes da tabela
  const table = useMaterialReactTable({
    columns,
    data: clients,
    enableHiding: true,
    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        textAlign: "center",

        caption: {
          backgroundColor: "red",
          textAlign: "center",
          captionSide: "top",
          fontSize: "5rem",
        },
      },
    },
    muiTopToolbarProps: {
      sx: {
        width: "100%",
        height: "5rem",
        svg: {
          width: "30px",
          height: "30px",
        },
        input: {
          width: "100%",
        },
      },
    },

    muiTableModalProps: {
      sx: {
        width: "20rem",
        "& .MuiDialog-paper": {
          minWidth: "6000px",
          minHeight: "400px",
          padding: "20px",
        },
      },
    },

    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        fontStyle: "italic",
        fontSize: "6.3rem",
        textAlign: "center",
        fontWeight: "Bold",

        svg: {
          width: "22x",
          height: "22px",
        },
        ".css-1w86f15": {
          alignItems: "center ",
          justifyContent: "center ",
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        textAlign: "center",
        fontSize: "1.5rem",
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
    muiToolbarAlertBannerProps: {
      sx: {
        width: "20rem",
        height: "20rem",
      },
    },

    muiBottomToolbarProps: {
      sx: {
        width: "100%",
        fontSize: "4rem",
        height: "6rem",
        div: {
          fontSize: "2rem",
        },

        label: {
          fontSize: "2rem",
        },
        span: {
          fontSize: "2rem",
        },
        svg: {
          width: "30px",
          height: "30px",
        },
      },
    },
  });

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
          <MaterialReactTable
            table={table}
            onPaginationChange={(newState) => setPagination(newState)}
          />
        )}
      </StyledTableContainer>
    </>
  );
};
