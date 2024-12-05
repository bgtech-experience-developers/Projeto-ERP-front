import React from "react";
import useClients from "../../hooks/useClients";
import { fuzzyFilter } from "../../utils/fuzzyFilter";
import { theme } from "../../theme/theme";

// Componentes
import * as T from "../../components/Tables";
import { Text } from "../../components/Texts/Text";
import { Input } from "../../components/Forms/Inputs/Input";
import { Button } from "../../components/Forms/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loader } from "../../../public/Loader";

// Externos
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuArrowDownAZ, LuArrowUpAZ, LuArrowDownUp } from "react-icons/lu";

export const ViewTableClients = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [fetchStatus, setFetchStatus] = React.useState(true);
  const { getClient, deleteClient } = useClients();
  const [clients, setClients] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 1,
    pageSize: 5,
  });

  const navigate = useNavigate();

  // Função para buscar clientes
  React.useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        const data = await getClient(`?status=${fetchStatus}`);

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
  }, [fetchStatus]);

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

  // Configurações da coluna
  const columns = React.useMemo(
    () => [
      { accessorKey: "corporate_reason", header: "Nome da empresa", size: 150 },
      { accessorKey: "branch_activity", header: "Ramo", size: 100 },
      { accessorKey: "name", header: "Contato", size: 100 },
      { accessorKey: "email", header: "Email", size: 100 },
      { accessorKey: "cell_phone", header: "Telefone", size: 150 },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,

        cell: (props) => (
          <Text
            bold="600"
            variant={"small"}
            align={"center"}
            color={props.getValue() === "Ativo" ? "green" : "red"}
          >
            {props.getValue()}
          </Text>
        ),
      },
      {
        header: "Opções",
        cell: (props) => (
          <T.IconContainer>
            <NavLink to={"/cadastrar/cliente/visualizar"}>
              <HiEye className="icon" />
            </NavLink>
            <HiTrash
              className="icon"
              onClick={() => handleDelete(props.row.original.id)}
            />
            <HiPencilAlt
              className="icon"
              onClick={() => handleEdit(props.row)}
            />
          </T.IconContainer>
        ),
      },
    ],
    []
  );

  //Definições da tabela
  const table = useReactTable({
    data: clients,
    columns,
    state: {
      pagination,
    },
    // Filtro global
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    onPaginationChange: setPagination,
  });

  return (
    <>
      {isLoading ? (
        <Loader id="loader" />
      ) : (
        <T.MainTableContainer>
          <T.TitleTable>
            <Text variant="large" bold="bold">
              Meus clientes
            </Text>
            <Link to="/cadastrar/cliente/novo">Cadastrar novo</Link>
          </T.TitleTable>

          <Header variant="table">
            <Input
              placeholder="Digite uma palavra-chave..."
              width="30rem"
              height="4.5rem"
              onChange={(e) => table.setGlobalFilter(e.target.value)}
            />
          </Header>

          <T.Container>
            <T.TableWrapper>
              <T.Table $width={`${table.getTotalSize()}px`}>
                <T.Thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <T.Tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <T.Th key={header.id} $width={`${header.getSize()}px`}>
                          <T.ThContent>
                            {/* Lógica de fazer a requisição pelo status */}
                            {header.column.columnDef.header === "Status" ? (
                              <Text
                                bold={"bold"}
                                variant="small"
                                style={{ cursor: "pointer" }}
                                onClick={() => setFetchStatus(!fetchStatus)}
                              >
                                {header.column.columnDef.header}
                              </Text>
                            ) : (
                              header.column.columnDef.header
                            )}
                            <T.Order>
                              {/* Lógica de sort (asc, desc) */}
                              <LuArrowUpAZ
                                className={` ${
                                  header.column.getIsSorted() === "asc"
                                    ? "asc"
                                    : ""
                                }`}
                              />
                              <LuArrowDownUp
                                className={`${
                                  header.column.getIsSorted() ? "" : "default"
                                }`}
                              />

                              <LuArrowDownAZ
                                onClick={header.column.getToggleSortingHandler()}
                                className={` ${
                                  header.column.getIsSorted() === "desc"
                                    ? "desc"
                                    : ""
                                }`}
                              />
                            </T.Order>
                          </T.ThContent>
                          {/* Tamanho dinâmico */}
                          <T.Resizer
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`${
                              header.column.getIsResizing() ? "isResizing" : ""
                            }`}
                          />
                        </T.Th>
                      ))}
                    </T.Tr>
                  ))}
                </T.Thead>
                <T.Tbody>
                  {table.getRowModel().rows.length === 0 ? (
                    <Text variant="medium" align={"center"}>
                      Nenhum registro encontrado
                    </Text>
                  ) : (
                    table.getRowModel().rows.map((row) => (
                      <T.Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <T.Td
                            key={cell.id}
                            $width={`${cell.column.getSize()}px`}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </T.Td>
                        ))}
                      </T.Tr>
                    ))
                  )}
                </T.Tbody>
              </T.Table>
            </T.TableWrapper>
          </T.Container>

          <Footer variant={"table"}>
            <Text variant="small" color={theme.colors.lightGray2}>
              {table.getState().pagination.pageIndex + 1} -{" "}
              {table.getPageCount()} de {table.getPageCount()}
            </Text>

            {/* Páginação */}
            <Button
              variant="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <IoIosArrowBack />
            </Button>
            <Button
              variant="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <IoIosArrowForward />
            </Button>
          </Footer>
        </T.MainTableContainer>
      )}
    </>
  );
};
