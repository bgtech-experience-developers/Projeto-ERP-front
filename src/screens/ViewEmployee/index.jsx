import React from "react";
import axios from "axios";
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

// Exrernos
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

export const ViewTableEmployee = () => {
  const [employee, setEmployee] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({
    pageIndex: 1,
    pageSize: 5,
  });

  const navigate = useNavigate();

  // Fetch clientes usando o arquivo json como teste
  const fetchEmployee = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/fornecedorespf.json");
      setEmployee(data);
    } catch (error) {
      console.error("Erro na busca de fornecedores: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect para carregar os cadastros
  React.useEffect(() => {
    fetchEmployee();
  }, []);

  //Função antiga, não vou apagar, vai que ne D;

  // const handleDelete = (id) => {
  //   const confirmDelete = window.confirm(
  //     "Tem certeza que deseja excluir esse cadastro?"
  //   );
  //   if (confirmDelete) {
  //     // Atualizar a lista sem o usuário deletado
  //     const updateEmployee = employee.filter((employee) => employee.id !== id);
  //     setEmployee([...updateEmployee]); // vai atualizar a lista sem o usuário excluído
  //   }
  // };

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

  const handleEdit = (row) => {
    navigate("/cadastrar/cliente/editar", { state: { clients: row.original } });
  };

  const columns = React.useMemo(
    () => [
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
        header: "Opções",
        cell: (props) => (
          <T.IconContainer>
            {/* Trocar rota */}
            <NavLink to={"/home"}>
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

  const table = useReactTable({
    data: employee,
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
              {/* Atualizar */}
              Meus fornecedores - pessoa jurídica
            </Text>
            <Link to="/cadastrar/fornecedor/pessoa/juridica/novo">
              Novo cadastro
            </Link>
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
                            {header.column.columnDef.header}
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
                  {table.getRowModel().rows.map((row) => (
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
                  ))}
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
