import React from "react";
// Internos
import * as T from "./style";
import { Header } from "../Header";
import { Input } from "../Forms/Inputs/Input";
import { Text } from "../Texts/Text";
import { Footer } from "../Footer";
import { Button } from "../Forms/Button";
import { fuzzyFilter } from "../../utils/fuzzyFilter";

// Externos
import { IoSearch } from "react-icons/io5";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { LuArrowDownAZ, LuArrowDownUp, LuArrowUpAZ } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { theme } from "../../theme/theme";
import { FaRegEdit } from "react-icons/fa";
import { Title } from "../Texts/Title";

// modalItens é responsável para por filtros diversificados no componente
export const Table = ({
  data,
  columns,
  title,
  filterModal,
  variant = "main-table",
}) => {
  // Estados de interatividade
  // const [selectedItem, setSelectedItem] = React.useState("active");
  const [search, setSearch] = React.useState(false);

  // Estados de funcionamento da tabela
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const tableData = React.useMemo(() => (data?.length > 0 ? data : []), [data]);

  // Apenas demonstração
  const tableColumns = React.useMemo(() => {
    if (columns && columns.length > 0) {
      return columns.map((col) => ({
        ...col,
        size: col.size,
      }));
    } else {
      return [
        {
          accessorKey: "corporate_reason",
          header: "Nome da empresa",
          size: 150,
        },
        { accessorKey: "branch_activity", header: "Ramo", size: 100 },
        { accessorKey: "name", header: "Contato", size: 150 },
        { accessorKey: "cell_phone", header: "Telefone", size: 120 },
        {
          header: "Ação",
          Cell: ({ row }) => (
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleEdit(row)} // Passa a linha inteira
            >
              <FaRegEdit
                style={{ fontSize: "20px", width: "100%", height: "100%" }}
              />
            </div>
          ),
        },
      ];
    }
  }, [columns]);

  // Funções de interatividade
  function handleSearch(e) {
    e.stopPropagation();
    setSearch(!search);
  }

  // Configurações da tabela

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
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
    <T.MainTableContainer $variant={variant}>
      <T.TitleTable>
        <Title bold="600" fontSize="42px">
          {title}
        </Title>
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
          {filterModal}
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
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          <T.Order>
                            {/* Lógica de sort (asc, desc) */}
                            <LuArrowUpAZ
                              className={` ${
                                header.column.getIsSorted() === "desc"
                                  ? "desc"
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
                                header.column.getIsSorted() === "asc"
                                  ? "asc"
                                  : ""
                              }`}
                            />
                          </T.Order>
                        </T.ThContent>
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
                {table?.getRowModel()?.rows?.length === 0 ? (
                  <T.Tr>
                    <T.Td colSpan={tableColumns.length} $textAlign="center">
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
            {table.getState().pagination.pageIndex + 1} - {table.getPageCount()}{" "}
            de {table.getPageCount()}
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
  );
};
