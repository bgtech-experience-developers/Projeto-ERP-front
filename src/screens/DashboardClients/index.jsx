import React from "react";
import useClients from "../../hooks/useClients";
import { fuzzyFilter } from "../../utils/fuzzyFilter";
import { theme } from "../../theme/theme";
import { SidebarContext } from "../../contexts/SidebarContext";
import { BsImage } from "react-icons/bs"; // Importando o ícone

// Componentes
import * as T from "../../components/Tables";
import { Text } from "../../components/Texts/Text";
import { Button } from "../../components/Forms/Button";
import { Header } from "../../components/Header";
import { Loader } from "../../../public/Loader";

// Externos
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

export const DashboardClients = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [clients, setClients] = React.useState([]);
  const [companyData, setCompanyData] = React.useState({
    corporateReason: "Nome da Empresa",
    fantasyName: "Nome Fantasia",
    cnpj: "00.000.000/0000-00",
    address: "Endereço da Empresa",
    city: "Cidade",
    neighborhood: "Bairro",
    cep: "00000-000",
    complement: "Complemento"
  });

  const { isActive } = React.useContext(SidebarContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchClients = async () => {
      setIsLoading(true);
      try {
        const data = await useClients(); // Função para buscar dados dos clientes
        const companyDataFromServer = await fetchCompanyData(); // Função para buscar dados da empresa
        setClients(data || []); // Atualizar os clientes
        setCompanyData(companyDataFromServer); // Atualizar os dados da empresa
      } catch (error) {
        toast.error("Erro ao buscar dados.");
        console.error("Erro ao buscar dados:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchClients();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch("URL_DO_BACKEND/api/companyData");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da empresa");
      }
      const companyData = await response.json();
      return {
        corporateReason: companyData.cliente.corporate_reason,
        fantasyName: companyData.cliente.fantasy_name,
        cnpj: companyData.cliente.cnpj,
        address: `${companyData.endereco_empresa.street}, ${companyData.endereco_empresa.number} - ${companyData.endereco_empresa.complement}`,
        city: companyData.endereco_empresa.city,
        neighborhood: companyData.endereco_empresa.neighborhood,
        cep: companyData.endereco_empresa.cep,
        complement: companyData.endereco_empresa.complement
      };
    } catch (error) {
      console.error(error);
      return {
        corporateReason: "Erro ao carregar",
        fantasyName: "Erro ao carregar",
        cnpj: "Erro ao carregar",
        address: "Erro ao carregar",
        city: "Erro ao carregar",
        neighborhood: "Erro ao carregar",
        cep: "Erro ao carregar",
        complement: "Erro ao carregar"
      };
    }
  };

  const handleEdit = (row) => {
    if (!row?.original) return;
    navigate("/cadastrar/cliente/editar", { state: { clients: row.original } });
  };

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "position",
        id: "position",
        header: "Posição",
        size: 150,
        cell: ({ row }) => {
          const position = row.original.position;
          switch (position) {
            case "socio":
              return (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img
                    src="URL_DA_IMAGEM_SOCIO"
                    alt="Sócio Proprietário"
                    style={{ width: "24px", height: "24px" }}
                  />
                  Sócio Proprietário
                </div>
              );
            case "comercial":
              return (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img
                    src="URL_DA_IMAGEM_COMERCIAL"
                    alt="Contato Comercial"
                    style={{ width: "24px", height: "24px" }}
                  />
                  Contato Comercial
                </div>
              );
            default:
              return "Não especificado";
          }
        },
      },
      { accessorKey: "name", id: "name", header: "Nome", size: 100 },
      { accessorKey: "email", id: "email", header: "E-mail", size: 100 },
      { accessorKey: "phone", id: "phone", header: "Telefone", size: 100 },
      { accessorKey: "rg", id: "rg", header: "RG", size: 150 },
      { accessorKey: "cpf", id: "cpf", header: "CPF", size: 150 },
      {
        id: "actions",
        header: "",
        size: 100,
        cell: ({ row }) => (
          <button onClick={() => handleEdit(row)} style={{ cursor: 'pointer' }}>
            Editar
          </button>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: clients,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <T.MainTableContainer
          $padding={isActive ? "2rem" : "0"}
          style={{ maxWidth: "100%", overflowX: "auto" }}
        >
          <T.TitleTable>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", justifyContent: "space-between" }}>
              <div style={{ flex: 1 }}>
                <Text variant="large" bold="bold">
                  {companyData.corporateReason}
                  <span style={{ fontSize: "1rem", fontWeight: "normal", marginLeft: "8px" }}>
                    {companyData.fantasyName}
                  </span>
                </Text>
                <div style={{ display: "flex", gap: "4rem", marginTop: "0.5rem" }}>
                  <div>
                    <Text variant="medium" bold="bold">
                      Localização
                    </Text>
                    <Text variant="small">
                      {companyData.address}
                    </Text>
                    <Text variant="small">
                      {companyData.city} - {companyData.neighborhood}
                    </Text>
                    <Text variant="small">
                      CEP: {companyData.cep}
                    </Text>
                  </div>
                  <div>
                    <Text variant="medium" bold="bold">
                      Informações
                    </Text>
                    <Text variant="small">
                      CNPJ: {companyData.cnpj}
                    </Text>
                  </div>
                </div>
              </div>
              <div style={{ width: "321px", height: "192px", background: "#f5f5f5", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "2rem" }}>
                <BsImage style={{ fontSize: "100px", color: "#aaa" }} />
              </div>
            </div>
          </T.TitleTable>

          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <Text variant="large" bold="bold">
              Contatos
            </Text>
          </div>
          <T.TableArea>
            <hr style={{ margin: "1rem 0", border: "none", borderTop: "1px solid #ccc" }} />
            <Header />
            <T.Container>
              <T.TableWrapper>
                <T.Table style={{ width: "100%", tableLayout: "auto" }}>
                  <T.Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <T.Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <T.Th
                            key={header.id}
                            style={{
                              fontSize: "1.5rem",
                              textAlign: "center",
                              textTransform: "none",
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </T.Th>
                        ))}
                      </T.Tr>
                    ))}
                  </T.Thead>
                  <T.Tbody>
                    {table.getRowModel().rows.length === 0 ? (
                      <T.Tr>
                        <T.Td colSpan={columns.length} style={{ textAlign: 'center' }}>
                          Nenhum registro encontrado
                        </T.Td>
                      </T.Tr>
                    ) : (
                      table.getRowModel().rows.map((row) => (
                        <T.Tr key={row.id}>
                          {row.getVisibleCells().map((cell) => (
                            <T.Td key={cell.id}>
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
          </T.TableArea>
        </T.MainTableContainer>
      )}
    </>
  );
};
