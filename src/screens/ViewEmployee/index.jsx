import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
// import { StyledH1 } from "../../components/Forms/Card/style";
import { StyledTableContainer } from "../../components/Tables";
import { Button } from "../../components/Forms/Button";

export const ViewTableEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  // Fetch clientes usando o arquivo json como teste
  const fetchSupplier = async () => {
    try {
      const { data } = await axios.get("/clientes.json");
      setEmployee(data);
    } catch (error) {
      console.error("Erro na busca de funcionarios: ", error);
    }
  };

  // useEffect para carregar os cadastros
  useEffect(() => {
    fetchSupplier();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      // Atualizar a lista sem o usuário deletado
      const updateEmployee = employee.filter((employee) => employee.id !== id);
      setEmployee([...updateEmployee]); // vai atualizar a lista sem o usuário excluído
    }
  };

  const columns = [
    { header: "Nome", accessorKey: "nome" },
    { header: "Email", accessorKey: "email" },
    { header: "CPF", accessorKey: "cpf" },
    { header: "Nascimento", accessorKey: "nascimento" },
    { header: "CEP", accessorKey: "cep" },
    { header: "Logradouro", accessorKey: "logradouro" },
    { header: "Número", accessorKey: "numero" },
    { header: "Bairro", accessorKey: "bairro" },
    { header: "Cidade", accessorKey: "cidade" },
    { header: "Telefone", accessorKey: "telefone" },
    { header: "Celular", accessorKey: "celular" },
    {
      header: "Actions",
      Cell: ({ row }) => (
        <Button
          variant={"deleteRegister"}
          onClick={() => handleDelete(row.original.id)}
        >
          Excluir cadastro
        </Button>
      ),
    },
  ];

  return (
    <StyledTableContainer>
      {/* Aqui */}
      {/* <StyledH1>Funcionários cadastrados</StyledH1> */}
      <MaterialReactTable
        columns={columns}
        data={employee}
        localization={MRT_Localization_PT_BR}
        state={{ pagination }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: "#223548",
            color: "white",
            fontSize: "5.2rem",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            backgroundColor: "#ECF5FF",
            color: "223548",
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
