import {
  MaterialReactTable,
  MRT_Table, //import alternative sub-component if we do not want toolbars
  useMaterialReactTable,
} from "material-react-table";
import React from "react";
import useClients from "../../hooks/useClients";
import { HiEye, HiTrash, HiPencilAlt } from "react-icons/hi"; // Importando o novo ícone HiPencilAlt
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Aoba = styled.div`
  display: flex;
  gap: 10px;

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: #969696;
    &:hover {
      color: #000000;
    }
  }
`;

export const Example = () => {
  const [clients, setClients] = React.useState([]);

  const { getClient } = useClients();

  React.useEffect(() => {
    const fetchClients = async () => {
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
      }
    };
    fetchClients();
  }, []);

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
            <span
              style={{
                color: row.original.status === "Ativo" ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {row.original.status}
            </span>
          );
        },
      },
      {
        header: "Opções",
        size: 50,
        Cell: ({ row }) => (
          <Aoba>
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
          </Aoba>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: clients,

    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        caption: {
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
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        fontStyle: "italic",
        fontSize: "6rem",
        textAlign: "center",
        fontWeight: "Bold",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        fontSize: "1.5rem",
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
