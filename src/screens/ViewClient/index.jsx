import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import {
  StyledTableContainer,
  StyledTitleTable,
} from "../../components/Tables";
import { Button } from "../../components/Forms/Button";
import useClients from "../../hooks/useClients";
import { toast } from "react-toastify";
import { Text } from "../../components/Texts/Text";
import { Link } from "react-router-dom";

export const ViewTableClients = () => {
  const [clients, setClients] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [isLoading, setIsLoading] = useState(false);
  const { getClient, deleteClient } = useClients();

  // Função para buscar clientes
  const fetchClients = async () => {
    setIsLoading(true);
    try {
      const data = await getClient();

      const updatedData = data.map((client) => ({
        ...client,
        status: client.situtation ? "Ativo" : "Inativo", // Define status
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

  // Alternar status entre "Ativa" e "Inativa"
  const toggleStatus = async (id) => {
    const client = clients.find((c) => c.id === id);
    const newStatus = client.status === "Ativa" ? "Inativa" : "Ativa";

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

  // Colunas da tabela
  const columns = [
    { header: "Nome da Empresa", accessorKey: "corporate_reason", size: 150 },
    { header: "Serviço", accessorKey: "branch_activity", size: 100 },
    { header: "Responsável", accessorKey: "name", size: 100 },
    { header: "Email", accessorKey: "email", size: 100 },
    { header: "Celular", accessorKey: "cell_phone", size: 100 },

    // { header: "RG", accessorKey: "state_registration" },
    // { header: "CPF", accessorKey: "cpf" },
    // { header: "CNPJ", accessorKey: "cnpj" },
    // { header: "Tipo de Contribuinte", accessorKey: "type_contribuition" },
    // { header: "CEP", accessorKey: "cep" },
    // { header: "Logradouro", accessorKey: "street" },
    // { header: "Número", accessorKey: "number" },
    // { header: "Bairro", accessorKey: "bairro" },
    // { header: "Cidade", accessorKey: "city" },
    {
      header: "Situação",
      accessorKey: "status",
      size: 50,
      Cell: ({ row }) => (
        <span
          style={{
            color: row.original.status === "Ativa" ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      header: "Opções",
      size: 50,
      Cell: ({ row }) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant={"deleteRegister"}
            onClick={() => handleDelete(row.original.id)}
          >
            Excluir
          </Button>
          <Button
            variant={"toggleStatus"}
            onClick={() => toggleStatus(row.original.id)}
          >
            {row.original.status === "Ativa" ? "Desativar" : "Ativar"}
          </Button>
        </div>
      ),
    },
  ];

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
    </>
  );
};
