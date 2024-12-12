import React from "react";
import { Table } from "../../../components/Table";
import { Text } from "../../../components/Texts/Text";
import { Title } from "../../../components/Texts/Title";
import * as S from "./style";
import * as T from "../../../components/Table/style";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { theme } from "../../../theme/theme";
import { FaRegEdit } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import useForm from "../../../hooks/useForm";

export const ClientDashboard = () => {
  // Estados de estilos
  const { isActive } = React.useContext(SidebarContext);
  const [mask] = useForm();

  // Estados de dados
  const [companyData, setCompanyData] = React.useState({
    cliente: {
      corporate_reason: "",
      fantasy_name: "",
      cnpj: "",
      state_registration: "",
      type_contribuition: "",
      branch_activity: "",
      image_company: "",
    },
    endereco_empresa: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
    },
    endereco_entrega: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      neighborhood: "",
    },
    financeiro: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
    comercial: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
    contabil: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
    socio: {
      name: "",
      phone: "",
      cell_phone: "",
      rg: "",
      email: "",
      cpf: "",
      image: "",
    },
  });
  const contactTableData = React.useMemo(() => getTableData(), [companyData]);

  const { state } = useLocation();

  React.useState(() => {
    if (state?.data) {
      setCompanyData(state.data.clientResponseMap);
    }
    applyMasks();
  }, [state]);

  React.useEffect(() => {
    console.log(companyData);
  }, [companyData]);

  //? Ârea Funcional
  function handleEdit(row) {
    // adicionar lógica de editar no futuro
    console.log(row);
  }

  function applyMasks() {
    setCompanyData((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          cnpj: mask("cnpj", prevState.cliente.cnpj),
        },
        endereco_empresa: {
          ...prevState.endereco_empresa,
          cep: mask("cep", prevState.endereco_empresa.cep),
        },
        endereco_entrega: {
          ...prevState.endereco_entrega,
          cep: mask("cep", prevState.endereco_entrega.cep),
        },
        socio: {
          ...prevState.comercial,
          cpf: mask("cpf", prevState.comercial.cpf),
          phone: mask("phone", prevState.comercial.phone),
          cell_phone: mask("phone", prevState.comercial.cell_phone),
        },
        comercial: {
          ...prevState.comercial,
          cpf: mask("cpf", prevState.comercial.cpf),
          phone: mask("phone", prevState.comercial.phone),
          cell_phone: mask("phone", prevState.comercial.cell_phone),
        },
        contabil: {
          ...prevState.comercial,
          cpf: mask("cpf", prevState.comercial.cpf),
          phone: mask("phone", prevState.comercial.phone),
          cell_phone: mask("phone", prevState.comercial.cell_phone),
        },
        financeiro: {
          ...prevState.comercial,
          cpf: mask("cpf", prevState.comercial.cpf),
          phone: mask("phone", prevState.comercial.phone),
          cell_phone: mask("phone", prevState.comercial.cell_phone),
        },
      };
    });
  }

  function getTableData() {
    const sections = [
      { key: "socio", label: "Sócio Proprietário" },
      {
        key: "comercial",
        label: "Contato Comercial",
      },
      {
        key: "contabil",
        label: "Contato Contábil",
      },
      {
        key: "financeiro",
        label: "Contato Financeiro",
      },
    ];

    return sections.map(({ key, label, image }) => ({
      image: companyData[key].image,
      position: { label },
      name: companyData[key].name,
      email: companyData[key].email,
      phone: companyData[key].phone,
      rg: companyData[key].rg,
      cpf: companyData[key].cpf,
    }));
  }

  //? Ârea para defiições de estrutura
  const infoAreaData = [
    {
      id: 1,
      title: "Localização",
      data1:
        companyData.endereco_empresa.street +
        " - " +
        companyData.endereco_empresa.number +
        ", " +
        companyData.endereco_empresa.cep,
      data2: companyData.endereco_empresa.city,
    },
    {
      id: 2,
      title: "Informações",
      data1: `CNPJ: ${companyData.cliente.cnpj}`,
      data2: `Tipo: ${companyData.cliente.type_contribuition} `,
    },
  ];

  // Definições das colunas da tabela 1
  const columns1 = React.useMemo(
    () => [
      {
        accessorKey: "image",
        header: " ",
        size: 50,
        cell: ({ row }) => (
          <S.ContactImage>
            <img
              src={row.original.image ?? "../../public/BaseCircle.svg"}
              alt={`Foto do contato ${row.original.name}`}
            />
          </S.ContactImage>
        ),
      },
      {
        accessorKey: "position",
        header: "Posição",
      },
      { accessorKey: "name", header: "Nome" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Telefone" },
      { accessorKey: "rg", header: "RG" },
      { accessorKey: "cpf", header: "cpf" },
      {
        header: " ",
        size: 50,
        cell: ({ row }) => (
          <T.IconContainer onClick={() => handleEdit(row)}>
            <FaRegEdit />
          </T.IconContainer>
        ),
      },
    ],
    []
  );

  // Definições das colunas da tabela 2
  const columns2 = React.useMemo(
    () => [
      { accessorKey: "sale", header: "Venda" },
      { accessorKey: "type_sale", header: "Tipo de Venda" },
      { accessorKey: "date_sale", header: "Data da Venda" },
      { accessorKey: "payment", header: "Pagamento" },
      { accessorKey: "fabrication", header: "Fabricação" },
      { accessorKey: "delivery", header: "Entrega" },
      {
        accessorKey: "update",
        sort: false,
        header: "",
        cell: () => (
          <Text variant="small" color={theme.colors.lightGray}>
            atualizar
          </Text>
        ),
      },
    ],
    []
  );

  return (
    <>
      <S.CompanyArea $width={isActive ? "88%" : "97%"}>
        <div className="company-texts">
          <div>
            <Title variant="x-small" bold="bold">
              {companyData.cliente.fantasy_name ?? "Nome Fantasia"}
            </Title>
            <Text variant="small" color={theme.colors.lightGray}>
              {companyData.cliente.corporate_reason ?? "Razão Social"}
            </Text>
          </div>
          <div>
            {infoAreaData.map((item) => (
              <S.InfoArea key={item.id}>
                <Text variant="large" bold="bold">
                  {item.title}
                </Text>
                <Text variant="small" color={theme.colors.lightGray}>
                  {item.data1}
                </Text>
                <Text variant="small" color={theme.colors.lightGray}>
                  {item.data2}
                </Text>
              </S.InfoArea>
            ))}
          </div>
        </div>
        <div className="company-image">
          <S.CompanyImage
            src={
              companyData.cliente.image_company ??
              "../../public/BaseRetangle.svg"
            }
            alt="Imagem da Empresa"
          />
        </div>
      </S.CompanyArea>
      <S.TablesArea>
        <Table
          variant="contact-table"
          columns={columns1}
          data={contactTableData}
          sort={false}
          pagination={false}
          header={false}
          title={
            <Text variant="large" bold="bold">
              Contatos
            </Text>
          }
        />

        <Table columns={columns2} />
      </S.TablesArea>
    </>
  );
};
