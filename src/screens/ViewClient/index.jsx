import React from "react";
import useClients from "../../hooks/useClients";
import { fuzzyFilter } from "../../utils/fuzzyFilter";
import { theme } from "../../theme/theme";
import { SidebarContext } from "../../contexts/SidebarContext";

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

import { Modal } from "../../components/Modal";
import { IoSearch } from "react-icons/io5";

export const ViewTableClients = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [fetchStatus, setFetchStatus] = React.useState(true);
  const [search, setSearch] = React.useState(false);

  const [modal, setModal] = React.useState("active");

  const { getClients, deleteClient, getClientByID } = useClients();
  const [clients, setClients] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 1,
    pageSize: 6,
  });

  const { isActive } = React.useContext(SidebarContext);

  const navigate = useNavigate();

  // Função para buscar clientes
  React.useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        const data = await getClients(`?status=${fetchStatus}`);

        setClients(data);
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

  const handleEdit = async (row) => {
    try {
      const clientResponse = await getClientByID(row.original.id);

      const clientResponseMap = clientFormMap(clientResponse);

      navigate("/cadastrar/cliente/editar", {
        state: { data: clientResponseMap }
      });

    } catch (error) {
      console.error("Erro ao buscar cliente:", error.message);
      alert("Não foi possível carregar os dados do cliente.")
    }
  };

  const clientFormMap = (clientResponse) => {
    const clientResponseMap = {
      imagens: [],
      cliente: {
        corporate_reason: clientResponse?.corporate_reason,
        fantasy_name: clientResponse?.fantasy_name,
        cnpj: clientResponse?.cnpj,
        state_registration: clientResponse?.state_registration,
        type_contribuition: clientResponse?.type_contribuition,
        branch_activity: clientResponse?.branch_activity
      },
      endereco_empresa: {
        cep: clientResponse.company_address[0].cep,
        street: clientResponse.company_address[0].street,
        number: clientResponse.company_address[0].number,
        complement: clientResponse.company_address[0].complement,
        city: clientResponse.company_address[0].city,
        neighborhood: clientResponse.company_address[0].neighborhood,
      },
      endereco_entrega: {
        cep: clientResponse.delivery_address[0].cep,
        street: clientResponse.delivery_address[0].street,
        number: clientResponse.delivery_address[0].number,
        complement: clientResponse.delivery_address[0].complement,
        city: clientResponse.delivery_address[0].city,
        neighborhood: clientResponse.delivery_address[0].neighborhood,
      },
      financeiro: {
        name: clientResponse.financinal_contact[0]?.name,
        phone: clientResponse.financinal_contact[0]?.phone,
        cell_phone: clientResponse.financinal_contact[0]?.cell_phone,
        rg: clientResponse.financinal_contact[0]?.rg,
        email: clientResponse.financinal_contact[0]?.email,
        cpf: clientResponse.financinal_contact[0]?.cpf,
      },
      comercial: {
        name: clientResponse.commercial_contact[0]?.name,
        phone: clientResponse.commercial_contact[0]?.phone,
        cell_phone: clientResponse.commercial_contact[0]?.cell_phone,
        rg: clientResponse.commercial_contact[0]?.rg,
        email: clientResponse.commercial_contact[0]?.email,
        cpf: clientResponse.commercial_contact[0]?.cpf,
      },
      contabil: {
        name: clientResponse.accounting_contact[0]?.name,
        phone: clientResponse.accounting_contact[0]?.phone,
        cell_phone: clientResponse.accounting_contact[0]?.cell_phone,
        rg: clientResponse.accounting_contact[0]?.rg,
        email: clientResponse.accounting_contact[0]?.email,
        cpf: clientResponse.accounting_contact[0]?.cpf,
      },
      socio: {
        name: clientResponse.owner_partner[0]?.name,
        phone: clientResponse.owner_partner[0]?.phone,
        cell_phone: clientResponse.owner_partner[0]?.cell_phone,
        rg: clientResponse.owner_partner[0]?.rg,
        email: clientResponse.owner_partner[0]?.email,
        cpf: clientResponse.owner_partner[0]?.cpf,
      },
    };


    const photosResponseMap =  {
      file1: { file: clientResponse.image_company, status: clientResponse.image_company  ? false : false },
      file2: { file: clientResponse.financinal_contact[0]?.image, status: clientResponse.financinal_contact[0]?.image ? false : false },
      file3: { file: clientResponse.commercial_contact[0]?.image, status: clientResponse.commercial_contact[0]?.image ? false : false },
      file4: { file: clientResponse.accounting_contact[0]?.image, status: clientResponse.accounting_contact[0]?.image ? false : false },
      file5: { file: clientResponse.owner_partner[0]?.image, status: clientResponse.owner_partner[0]?.image ? false : false },
    }

    console.log(photosResponseMap)

    const id = clientResponse?.id

    return {clientResponseMap, photosResponseMap, id};
  };

  //Cuida da animação do input
  function handleSearch(e) {
    e.stopPropagation();
    setSearch(!search);
  }

  // Configurações da coluna
  const columns = React.useMemo(
    () => [
      // { accessorKey: "corporate_reason", header: "Nome da empresa" },
      { accessorKey: "fantasy_name", header: "Nome da empresa" },
      { accessorKey: "branch_activity", header: "Ramo", size: 60 },
      { accessorKey: "name", header: "Contato" },

      { accessorKey: "telefone", header: "Telefone" },

      {
        header: "Opções",
        size: 30,
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
        <T.MainTableContainer $padding={isActive ? "2rem" : "0"}>
          <T.TitleTable>
            <Text variant="large" bold="bold">
              Meus clientes
            </Text>
            <Link to="/cadastrar/cliente/novo">Cadastrar novo</Link>
          </T.TitleTable>
          <T.TableArea>
            <Header variant="table">
              <Input
                variant="expandable-input"
                placeholder="Digite uma palavra chave..."
                className={search ? "expand-input" : ""}
                onChange={(e) => table.setGlobalFilter(e.target.value)}
              >
                <IoSearch onClick={handleSearch} />
              </Input>

              <Modal
                setFetchStatus={setFetchStatus}
                setSelectedItem={setModal}
                selectedItem={modal}
              />
            </Header>

            <T.Container>
              <T.TableWrapper>
                <T.Table $width={`${table.getTotalSize()}px`}>
                  <T.Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <T.Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <T.Th
                            key={header.id}
                            $width={`${header.getSize()}px`}
                          >
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
                                  className={` ${header.column.getIsSorted() === "desc"
                                    ? "desc"
                                    : ""
                                    }`}
                                />
                                <LuArrowDownUp
                                  className={`${header.column.getIsSorted() ? "" : "default"
                                    }`}
                                />

                                <LuArrowDownAZ
                                  onClick={header.column.getToggleSortingHandler()}
                                  className={` ${header.column.getIsSorted() === "asc"
                                    ? "asc"
                                    : ""
                                    }`}
                                />
                              </T.Order>
                            </T.ThContent>
                            {/* Tamanho dinâmico */}
                            <T.Resizer
                              onMouseDown={header.getResizeHandler()}
                              onTouchStart={header.getResizeHandler()}
                              className={`${header.column.getIsResizing()
                                ? "isResizing"
                                : ""
                                }`}
                            />
                          </T.Th>
                        ))}
                      </T.Tr>
                    ))}
                  </T.Thead>
                  <T.Tbody>
                    {table.getRowModel().rows.length === 0 ? (
                      <T.Tr>
                        <T.Td colSpan={columns.length} $textAlign="center">
                          Nenhum registro encontrado
                        </T.Td>
                      </T.Tr>
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
          </T.TableArea>
        </T.MainTableContainer>
      )}
    </>
  );
};
