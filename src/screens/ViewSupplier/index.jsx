// import React from "react";
// import axios from "axios";
// import useSupplierPf from "../../hooks/useSupplier";
// import useSupplierPj from "../../hooks/useSupplierPj";
// import { fuzzyFilter } from "../../utils/fuzzyFilter";
// import { theme } from "../../theme/theme";

// // Componentes
// import * as T from "../../components/Table";
// import { Text } from "../../components/Texts/Text";
// import { Input } from "../../components/Forms/Inputs/Input";
// import { Button } from "../../components/Forms/Button";
// import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";
// import { Loader } from "../../../public/Loader";
// import { SidebarContext } from "../../contexts/SidebarContext";
// import { Modal } from "../../components/Modal";

// // Externos
// import { toast } from "react-toastify";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
// } from "@tanstack/react-table";
// import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { LuArrowDownAZ, LuArrowUpAZ, LuArrowDownUp } from "react-icons/lu";
// import { IoSearch } from "react-icons/io5";

// export const ViewTableSupplierPF = () => {
//   const [supplierPF, setSupplierPF] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [pagination, setPagination] = React.useState({
//     pageIndex: 1,
//     pageSize: 6,
//   });

//   // States que controlam as animações
//   const [fetchStatus, setFetchStatus] = React.useState(true);
//   const [search, setSearch] = React.useState(false);
//   const [modal, setModal] = React.useState("active");

//   const { isActive } = React.useContext(SidebarContext);

//   const { getSupplierPf, deleteSupplierPf } = useSupplierPf();
//   const navigate = useNavigate();

//   // Função para buscar todos os fornecedores pessoa física
//   const fetchSupplierPF = async () => {
//     try {
//       setIsLoading(true);

//       const data = await getSupplierPf(`?status=${fetchStatus}`);

//       setSupplierPF(data);
//     } catch (error) {
//       toast.error("Erro na busca de fornecedores.");
//       console.error("Erro na busca de fornecedores: ", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     fetchSupplierPF();
//   }, []);

//   // Deletar (atualizado)
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Tem certeza que deseja excluir esse cadastro?"
//     );
//     if (confirmDelete) {
//       try {
//         await deleteSupplierPf(id);
//         setSupplierPF((prev) => prev.filter((supplier) => supplier.id !== id));
//         toast.success("Fornecedor excluído com sucesso!");
//       } catch (error) {
//         toast.error("Erro ao excluir o fornecedor.");
//         console.error("Erro ao deletar fornecedor:", error);
//       }
//     }
//   };

//   const handleEdit = (row) => {
//     navigate("/cadastrar/fornecedor/pessoa/fisica/editar", {
//       state: { clients: row.original },
//     });
//   };

//   //Cuida da animação do input
//   function handleSearch(e) {
//     e.stopPropagation();
//     setSearch(!search);
//   }

//   const columns = React.useMemo(() => [
//     { header: "Nome do fornecedor", accessorKey: "nomeFornecedor", size: 200 },
//     { header: "Produto", accessorKey: "produto", size: 50 },
//     { header: "Email", accessorKey: "emailFornecedor", size: 200 },
//     { header: "Telefone", accessorKey: "telefoneFornecedor", size: 100 },
//     {
//       header: "Opções",
//       cell: (props) => (
//         <T.IconContainer>
//           {/* Trocar rota */}
//           <NavLink to={"/home"}>
//             <HiEye className="icon" />
//           </NavLink>
//           <HiTrash
//             className="icon"
//             onClick={() => handleDelete(props.row.original.id)}
//           />
//           <HiPencilAlt className="icon" onClick={() => handleEdit(props.row)} />
//         </T.IconContainer>
//       ),
//     },
//   ]);

//   const table = useReactTable({
//     data: supplierPF,
//     columns,
//     state: {
//       pagination,
//     },
//     // Filtro global
//     filterFns: {
//       fuzzy: fuzzyFilter,
//     },
//     globalFilterFn: fuzzyFilter,

//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     columnResizeMode: "onChange",
//     onPaginationChange: setPagination,
//   });

//   return (
//     <>
//       {isLoading ? (
//         <Loader id="loader" />
//       ) : (
//         <T.MainTableContainer $padding={isActive ? "2rem" : "0"}>
//           <T.TitleTable>
//             <Text variant="large" bold="bold">
//               Meus clientes
//             </Text>
//             <Link to="/cadastrar/fornecedor/pessoa/fisica/novo">
//               Cadastrar novo
//             </Link>
//           </T.TitleTable>
//           <T.TableArea>
//             <Header variant="table">
//               <Input
//                 variant="expandable-input"
//                 placeholder="Digite uma palavra chave..."
//                 className={search ? "expand-input" : ""}
//                 onChange={(e) => table.setGlobalFilter(e.target.value)}
//               >
//                 <IoSearch onClick={handleSearch} />
//               </Input>

//               <Modal
//                 setFetchStatus={setFetchStatus}
//                 setSelectedItem={setModal}
//                 selectedItem={modal}
//               />
//             </Header>

//             <T.Container>
//               <T.TableWrapper>
//                 <T.Table $width={`${table.getTotalSize()}px`}>
//                   <T.Thead>
//                     {table.getHeaderGroups().map((headerGroup) => (
//                       <T.Tr key={headerGroup.id}>
//                         {headerGroup.headers.map((header) => (
//                           <T.Th
//                             key={header.id}
//                             $width={`${header.getSize()}px`}
//                           >
//                             <T.ThContent>
//                               {/* Lógica de fazer a requisição pelo status */}
//                               {header.column.columnDef.header === "Status" ? (
//                                 <Text
//                                   bold={"bold"}
//                                   variant="small"
//                                   style={{ cursor: "pointer" }}
//                                   onClick={() => setFetchStatus(!fetchStatus)}
//                                 >
//                                   {header.column.columnDef.header}
//                                 </Text>
//                               ) : (
//                                 header.column.columnDef.header
//                               )}
//                               <T.Order>
//                                 {/* Lógica de sort (asc, desc) */}
//                                 <LuArrowUpAZ
//                                   className={` ${
//                                     header.column.getIsSorted() === "desc"
//                                       ? "desc"
//                                       : ""
//                                   }`}
//                                 />
//                                 <LuArrowDownUp
//                                   className={`${
//                                     header.column.getIsSorted() ? "" : "default"
//                                   }`}
//                                 />

//                                 <LuArrowDownAZ
//                                   onClick={header.column.getToggleSortingHandler()}
//                                   className={` ${
//                                     header.column.getIsSorted() === "asc"
//                                       ? "asc"
//                                       : ""
//                                   }`}
//                                 />
//                               </T.Order>
//                             </T.ThContent>
//                             {/* Tamanho dinâmico */}
//                             <T.Resizer
//                               onMouseDown={header.getResizeHandler()}
//                               onTouchStart={header.getResizeHandler()}
//                               className={`${
//                                 header.column.getIsResizing()
//                                   ? "isResizing"
//                                   : ""
//                               }`}
//                             />
//                           </T.Th>
//                         ))}
//                       </T.Tr>
//                     ))}
//                   </T.Thead>
//                   <T.Tbody>
//                     {table.getRowModel().rows.length === 0 ? (
//                       <T.Tr>
//                         <T.Td colSpan={columns.length} $textAlign="center">
//                           Nenhum registro encontrado
//                         </T.Td>
//                       </T.Tr>
//                     ) : (
//                       table.getRowModel().rows.map((row) => (
//                         <T.Tr key={row.id}>
//                           {row.getVisibleCells().map((cell) => (
//                             <T.Td
//                               key={cell.id}
//                               $width={`${cell.column.getSize()}px`}
//                             >
//                               {flexRender(
//                                 cell.column.columnDef.cell,
//                                 cell.getContext()
//                               )}
//                             </T.Td>
//                           ))}
//                         </T.Tr>
//                       ))
//                     )}
//                   </T.Tbody>
//                 </T.Table>
//               </T.TableWrapper>
//             </T.Container>

//             <Footer variant={"table"}>
//               <Text variant="small" color={theme.colors.lightGray2}>
//                 {table.getState().pagination.pageIndex + 1} -{" "}
//                 {table.getPageCount()} de {table.getPageCount()}
//               </Text>

//               {/* Páginação */}
//               <Button
//                 variant="icon"
//                 onClick={() => table.previousPage()}
//                 disabled={!table.getCanPreviousPage()}
//               >
//                 <IoIosArrowBack />
//               </Button>
//               <Button
//                 variant="icon"
//                 onClick={() => table.nextPage()}
//                 disabled={!table.getCanNextPage()}
//               >
//                 <IoIosArrowForward />
//               </Button>
//             </Footer>
//           </T.TableArea>
//         </T.MainTableContainer>
//       )}
//     </>
//   );
// };

// export const ViewTableSupplierPJ = () => {
//   const [supplier, setSupplier] = React.useState([]);
//   const [pagination, setPagination] = React.useState({
//     pageIndex: 1,
//     pageSize: 6,
//   });
//   const [isLoading, setIsLoading] = React.useState(false);
//   const { getSupplierPj, deleteSupplierPj } = useSupplierPj();
//   const navigate = useNavigate();

//   // States que controlam as animações
//   const [fetchStatus, setFetchStatus] = React.useState(true);
//   const [search, setSearch] = React.useState(false);
//   const [modal, setModal] = React.useState("active");

//   const { isActive } = React.useContext(SidebarContext);

//   // Função para buscar todos os fornecedores pessoa jurídica
//   const fetchSupplierPj = async () => {
//     try {
//       const data = await getSupplierPj();

//       setSupplier(data);
//     } catch (error) {
//       toast.error("Erro ao buscar fornecedores.");
//       console.error("Erro na busca de fornecedores: ", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   // useEffect para carregar os cadastros

//   React.useEffect(() => {
//     fetchSupplierPj();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Tem certeza que deseja excluir esse cadastro?"
//     );
//     if (confirmDelete) {
//       try {
//         await deleteSupplierPj(id);
//         setClients((prev) => prev.filter((client) => client.id !== id));
//         toast.success("Cliente excluído com sucesso!");
//       } catch (error) {
//         toast.error("Erro ao excluir o fornecedor.");
//         console.error("Erro ao deletar fornecedor:", error);
//       }
//     }
//   };

//   const handleEdit = (row) => {
//     navigate("/cadastrar/fornecedor/pessoa/juridica/editar", {
//       state: { clients: row.original },
//     });
//   };

//   //Cuida da animação do input
//   function handleSearch(e) {
//     e.stopPropagation();
//     setSearch(!search);
//   }

//   // Atualizar accessorKey de acordo com os dados do backend
//   const columns = React.useMemo(
//     () => [
//       { header: "Nome", accessorKey: "nome" },
//       { header: "Email", accessorKey: "email" },
//       { header: "RG", accessorKey: "rg" },
//       { header: "CPF", accessorKey: "cpf" },
//       { header: "Nascimento", accessorKey: "nascimento" },
//       { header: "Tipo", accessorKey: "tipo" },
//       { header: "Situação", accessorKey: "situacao" },
//       { header: "CEP", accessorKey: "cep" },
//       { header: "Logradouro", accessorKey: "logradouro" },
//       { header: "Número", accessorKey: "numero" },
//       { header: "Bairro", accessorKey: "bairro" },
//       { header: "Cidade", accessorKey: "cidade" },
//       { header: "Telefone", accessorKey: "telefone" },
//       { header: "Celular", accessorKey: "celular" },
//       {
//         header: "Opções",
//         cell: (props) => (
//           <T.IconContainer>
//             {/* Trocar rota */}
//             <NavLink to={"/home"}>
//               <HiEye className="icon" />
//             </NavLink>
//             <HiTrash
//               className="icon"
//               onClick={() => handleDelete(props.row.original.id)}
//             />
//             <HiPencilAlt
//               className="icon"
//               onClick={() => handleEdit(props.row)}
//             />
//           </T.IconContainer>
//         ),
//       },
//     ],
//     []
//   );

//   const table = useReactTable({
//     data: supplier,
//     columns,
//     state: {
//       pagination,
//     },
//     // Filtro global
//     filterFns: {
//       fuzzy: fuzzyFilter,
//     },
//     globalFilterFn: fuzzyFilter,

//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     columnResizeMode: "onChange",
//     onPaginationChange: setPagination,
//   });

//   return (
//     <>
//       {isLoading ? (
//         <Loader id="loader" />
//       ) : (
//         <T.MainTableContainer $padding={isActive ? "2rem" : "0"}>
//           <T.TitleTable>
//             <Text variant="large" bold="bold">
//               Meus clientes
//             </Text>
//             <Link to="/cadastrar/fornecedor/pessoa/juridica/novo">
//               Cadastrar novo
//             </Link>
//           </T.TitleTable>
//           <T.TableArea>
//             <Header variant="table">
//               <Input
//                 variant="expandable-input"
//                 placeholder="Digite uma palavra chave..."
//                 className={search ? "expand-input" : ""}
//                 onChange={(e) => table.setGlobalFilter(e.target.value)}
//               >
//                 <IoSearch onClick={handleSearch} />
//               </Input>

//               <Modal
//                 setFetchStatus={setFetchStatus}
//                 setSelectedItem={setModal}
//                 selectedItem={modal}
//               />
//             </Header>

//             <T.Container>
//               <T.TableWrapper>
//                 <T.Table $width={`${table.getTotalSize()}px`}>
//                   <T.Thead>
//                     {table.getHeaderGroups().map((headerGroup) => (
//                       <T.Tr key={headerGroup.id}>
//                         {headerGroup.headers.map((header) => (
//                           <T.Th
//                             key={header.id}
//                             $width={`${header.getSize()}px`}
//                           >
//                             <T.ThContent>
//                               {/* Lógica de fazer a requisição pelo status */}
//                               {header.column.columnDef.header === "Status" ? (
//                                 <Text
//                                   bold={"bold"}
//                                   variant="small"
//                                   style={{ cursor: "pointer" }}
//                                   onClick={() => setFetchStatus(!fetchStatus)}
//                                 >
//                                   {header.column.columnDef.header}
//                                 </Text>
//                               ) : (
//                                 header.column.columnDef.header
//                               )}
//                               <T.Order>
//                                 {/* Lógica de sort (asc, desc) */}
//                                 <LuArrowUpAZ
//                                   className={` ${
//                                     header.column.getIsSorted() === "desc"
//                                       ? "desc"
//                                       : ""
//                                   }`}
//                                 />
//                                 <LuArrowDownUp
//                                   className={`${
//                                     header.column.getIsSorted() ? "" : "default"
//                                   }`}
//                                 />

//                                 <LuArrowDownAZ
//                                   onClick={header.column.getToggleSortingHandler()}
//                                   className={` ${
//                                     header.column.getIsSorted() === "asc"
//                                       ? "asc"
//                                       : ""
//                                   }`}
//                                 />
//                               </T.Order>
//                             </T.ThContent>
//                             {/* Tamanho dinâmico */}
//                             <T.Resizer
//                               onMouseDown={header.getResizeHandler()}
//                               onTouchStart={header.getResizeHandler()}
//                               className={`${
//                                 header.column.getIsResizing()
//                                   ? "isResizing"
//                                   : ""
//                               }`}
//                             />
//                           </T.Th>
//                         ))}
//                       </T.Tr>
//                     ))}
//                   </T.Thead>
//                   <T.Tbody>
//                     {table.getRowModel().rows.length === 0 ? (
//                       <T.Tr>
//                         <T.Td colSpan={columns.length} $textAlign="center">
//                           Nenhum registro encontrado
//                         </T.Td>
//                       </T.Tr>
//                     ) : (
//                       table.getRowModel().rows.map((row) => (
//                         <T.Tr key={row.id}>
//                           {row.getVisibleCells().map((cell) => (
//                             <T.Td
//                               key={cell.id}
//                               $width={`${cell.column.getSize()}px`}
//                             >
//                               {flexRender(
//                                 cell.column.columnDef.cell,
//                                 cell.getContext()
//                               )}
//                             </T.Td>
//                           ))}
//                         </T.Tr>
//                       ))
//                     )}
//                   </T.Tbody>
//                 </T.Table>
//               </T.TableWrapper>
//             </T.Container>

//             <Footer variant={"table"}>
//               <Text variant="small" color={theme.colors.lightGray2}>
//                 {table.getState().pagination.pageIndex + 1} -{" "}
//                 {table.getPageCount()} de {table.getPageCount()}
//               </Text>

//               {/* Páginação */}
//               <Button
//                 variant="icon"
//                 onClick={() => table.previousPage()}
//                 disabled={!table.getCanPreviousPage()}
//               >
//                 <IoIosArrowBack />
//               </Button>
//               <Button
//                 variant="icon"
//                 onClick={() => table.nextPage()}
//                 disabled={!table.getCanNextPage()}
//               >
//                 <IoIosArrowForward />
//               </Button>
//             </Footer>
//           </T.TableArea>
//         </T.MainTableContainer>
//       )}
//     </>
//   );
// };
