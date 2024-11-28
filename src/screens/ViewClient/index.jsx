import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { StyledTableContainer, StyledTitleTable } from "../../components/Tables";
import { Button } from "../../components/Forms/Button";
import useClients from "../../hooks/useClients";
import { toast } from "react-toastify";
import { Text } from "../../components/Texts/Text";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiEye, HiTrash, HiPencilAlt } from "react-icons/hi"; // Importando o novo ícone HiPencilAlt
import { Navigate } from "react-router-dom";

// Estilo para os ícones
const IconContainer = styled.div`
  display: flex;
  gap: 10px;

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: #969696;
    ;

    &:hover {
      color: #000000;
    }
  }
`;

export const ViewTableClients = () => {
  const [clients, setClients] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [isLoading, setIsLoading] = useState(false);
  const { getClient, deleteClient } = useClients();
  const navigate = useNavigate();

  // Função para buscar clientes
  const fetchClients = async () => {
    setIsLoading(true);
    try {
      const data = await getClient();

      const updatedData = data.map((client) => ({
        ...client,
        status: client.situtation ? "Ativo" : "Inativo", // Define status
        cnpj: client.cnpj || "Não informado", // Inclui o CNPJ
      }));
      setClients(updatedData);
    } catch (error) {
      toast.error("Erro ao buscar clientes.");
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect para carregar os clientes ao montar o componente
  useEffect(() => {
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
    navigate('/cadastrar/cliente/editar', { state: { clients: row.original } });
  }
  // Colunas da tabela
  const columns = [
    { header: "Nome da Empresa", accessorKey: "fantasy_name", size: 150 },
    { header: "Serviço", accessorKey: "branch_activity", size: 100 },
    { header: "Responsável", accessorKey: "name", size: 100 },
    { header: "Email", accessorKey: "email", size: 100 },
    { header: "Celular", accessorKey: "telefone", size: 100 },
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
          <HiPencilAlt
              className="icon"
              onClick={() => handleEdit(row)}
            />
        </IconContainer>
      ),
    },
  ];

  return (
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
          columns={columns}
          data={clients}
          localization={MRT_Localization_PT_BR}
          state={{ pagination }}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: "#FFFFFF",
              color: "black",
              fontSize: "5.2rem",
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              backgroundColor: "#FFFFFF",
              color: "#0e0f0f",
              padding: "12px 15px",
              fontSize: "1.1rem",
              fontWeight: "500",
            },
          }}
          onPaginationChange={(newState) => setPagination(newState)}
        />
      )}
    </StyledTableContainer>
  );
};
