import React from "react";
import { Table } from "../../../components/Table";
import { Text } from "../../../components/Texts/Text";
import { Title } from "../../../components/Texts/Title";
import * as S from "./style";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { theme } from "../../../theme/theme";

export const ClientDashboard = () => {
  // Estados de estilos
  const { isActive } = React.useContext(SidebarContext);

  const infoAreaData = [
    {
      id: 1,
      title: "Localização",
      data1: "logradouro",
      data2: "cidade",
    },
    {
      id: 2,
      title: "Informações",
      data1: `CNPJ: `,
      data2: `Data de abertura: `,
    },
  ];

  // Definições das colunas
  const columns = React.useMemo(
    () => [
      { accessorKey: "image", header: "" },
      { accessorKey: "position", header: "Posição" },
      { accessorKey: "name", header: "Nome" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Telefone" },
      { accessorKey: "rg", header: "RG" },
      { accessorKey: "cpf", header: "cpf" },
    ],
    []
  );
  return (
    <>
      <S.CompanyArea $width={isActive ? "88%" : "97%"}>
        {/* Isso é unma má prática?  */}
        <div className="company-texts">
          <div>
            <Title variant="x-small" bold="bold">
              Sabor & Essência
            </Title>
            <Text variant="small" color={theme.colors.lightGray}>
              LLT Sabor & Essência
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
            src="../../public/BaseRetangle.svg"
            alt="Imagem da Empresa"
          />
        </div>
      </S.CompanyArea>
      <Table
        style={{ paddingBottom: "10px" }}
        columns={columns}
        sort={false}
        title={
          <Text variant="large" bold="bold">
            Contatos
          </Text>
        }
      />
    </>
  );
};
