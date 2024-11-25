import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
// import { StyledH1 } from '../../components/Forms/Card/style';
import { StyledTableContainer } from "../../components/Tables";
import { Button } from "../../components/Forms/Button";
import useClients from "../../hooks/useClients";

export const ViewTableClients = () => {
  const [clients, setClients] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const { getClient, deleteClient } = useClients();

  // Função para buscar clientes
  const fetchClients = async () => {
    try {
      const data = await getClient();
      console.log(data)
      // Adiciona um status inicial se não vier da API
      const updatedData = data.map((client) => {
        console.log(client.id)
        return{...client,
        status: client.situation || "Ativa"} // Adiciona "Ativa" como padrão, se não existir
      });
      setClients(updatedData);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  // useEffect para carregar os cadastros ao montar o componente
  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteClient(id);

        const updatedClients = clients.filter((client) => client.id !== id);
        setClients(updatedClients);
      } catch (error) {
        console.error("Erro ao deletar cliente:", error);
      }
    }
  };

  // Alternar entre "Ativa" e "Inativa"
  const toggleStatus = (id) => {
    const updatedClients = clients.map((client) =>
      client.id === id
        ? { ...client, status: client.status === "Ativa" ? "Inativa" : "Ativa" }
        : client
    );
    setClients(updatedClients);
  };

  // Colunas da tabela
  const columns = [
    { header: "Nome", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "RG", accessorKey: "rg" },
    { header: "CPF", accessorKey: "cpf" },
    { header: "CNPJ", accessorKey: "cnpj" },
    { header: "Nascimento", accessorKey: "date_birth" },
    { header: "CEP", accessorKey: "cep" },
    { header: "Logradouro", accessorKey: "logradouro" },
    { header: "Número", accessorKey: "numero" },
    { header: "Bairro", accessorKey: "bairro" },
    { header: "Cidade", accessorKey: "cidade" },
    { header: "Telefone", accessorKey: "telefone" },
    { header: "Celular", accessorKey: "celular" },
    { 
      header: "Situação", 
      accessorKey: "status",
      Cell: ({ row }) => (
        <span
          style={{
            color: row.original.status === "Ativa" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      header: "Ação",
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
    <StyledTableContainer>
      <MaterialReactTable
        columns={columns}
        data={clients}
        localization={MRT_Localization_PT_BR}
        state={{ pagination }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "#ECF5FF",
            color: "black",
            fontSize: "5.2rem",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            backgroundColor: "#ECF5FF",
            color: "#edf1f5",
            padding: "12px 15px",
            fontSize: "1.1rem",
            fontWeight: "500",
          },
        }}
        onPaginationChange={(newState) => setPagination(newState)}
      />
    </StyledTableContainer>
  );
};
