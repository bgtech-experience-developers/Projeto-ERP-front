import React from "react";
// Internos
import * as T from "../../../components/Table/style";
import useSupplierPf from "../../../hooks/useSupplier";
import useSupplierPj from "../../../hooks/useSupplierPj";
import { Table } from "../../../components/Table";
import { Modal } from "../../../components/Modal";
import { Title } from "../../../components/Texts/Title";
import { Text } from "../../../components/Texts/Text";
//Externos
import { NavLink, useNavigate } from "react-router-dom";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import { MdOutlineFilterList, MdOutlineFilterListOff } from "react-icons/md";

export const PfSupplierTable = () => {
  // Estados de interação
  const [selectedItem, setSelectedItem] = React.useState("active");
  const [isLoading, setIsLoading] = React.useState(false);
  const [fetchStatus, setFetchStatus] = React.useState(true);

  // Estados de controile
  const [supplierPF, setSupplierPF] = React.useState([]);
  const { getSupplierPf, deleteSupplierPf } = useSupplierPf();
  const navigate = useNavigate();

  // Função para buscar todos os fornecedores pessoa física
  const fetchSupplierPF = async () => {
    try {
      setIsLoading(true);

      const data = await getSupplierPf(`?status=${fetchStatus}`);

      setSupplierPF(data);
    } catch (error) {
      toast.error("Erro na busca de fornecedores.");
      console.error("Erro na busca de fornecedores: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSupplierPF();
  }, []);

  // Deletar (atualizado)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteSupplierPf(id);
        setSupplierPF((prev) => prev.filter((supplier) => supplier.id !== id));
        toast.success("Fornecedor excluído com sucesso!");
      } catch (error) {
        toast.error("Erro ao excluir o fornecedor.");
        console.error("Erro ao deletar fornecedor:", error);
      }
    }
  };

  const handleEdit = (row) => {
    navigate("/cadastrar/fornecedor/pessoa/fisica/editar", {
      state: { clients: row.original },
    });
  };

  const columns = React.useMemo(() => [
    { header: "Nome do fornecedor", accessorKey: "nomeFornecedor", size: 200 },
    { header: "Produto", accessorKey: "produto", size: 50 },
    { header: "Email", accessorKey: "emailFornecedor", size: 200 },
    { header: "Telefone", accessorKey: "telefoneFornecedor", size: 100 },
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
          <HiPencilAlt className="icon" onClick={() => handleEdit(props.row)} />
        </T.IconContainer>
      ),
    },
  ]);

  const filterModalItens = [
    {
      id: 1,
      icon: <MdOutlineFilterListOff />,
      text: "Limpar Filtros",
      value: "clear",
      query: "",
    },
    {
      id: 2,
      icon: <MdOutlineFilterList />,
      text: "Filtrar por ativos",
      value: "active",
      query: "true",
    },
    {
      id: 3,
      icon: <MdOutlineFilterList />,
      text: "Filtrar por Inativos",
      value: "inactive",
      query: "false",
    },
  ];

  return (
    <Table
      columns={columns}
      data={supplierPF}
      isLoading={isLoading}
      filterModal={
        <Modal
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setFetchStatus={setFetchStatus}
          filterModalItens={filterModalItens}
        />
      }
      title={
        <>
          <Title bold="bold" variant="small">
            Meus fornecedores - pessoa física
          </Title>

          <Text>
            <NavLink to="/cadastrar/funcionarios/novo">Cadastrar novo</NavLink>
          </Text>
        </>
      }
    />
  );
};

export const PjSupplierTable = () => {
  // Estados de interação
  const [selectedItem, setSelectedItem] = React.useState("active");
  const [isLoading, setIsLoading] = React.useState(false);
  const [fetchStatus, setFetchStatus] = React.useState(true);

  // Estados de controile
  const [supplierPj, setSupplierPj] = React.useState([]);
  const { getSupplierPj, deleteSupplierPj } = useSupplierPj();
  const navigate = useNavigate();

  const fetchSupplierPj = async () => {
    setIsLoading(true);
    try {
      const data = await getSupplierPj();

      setSupplierPj(data);
    } catch (error) {
      toast.error("Erro ao buscar fornecedores.");
      console.error("Erro na busca de fornecedores: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect para carregar os cadastros

  React.useEffect(() => {
    fetchSupplierPj();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteSupplierPj(id);
        setClients((prev) => prev.filter((client) => client.id !== id));
        toast.success("Cliente excluído com sucesso!");
      } catch (error) {
        toast.error("Erro ao excluir o fornecedor.");
        console.error("Erro ao deletar fornecedor:", error);
      }
    }
  };

  const handleEdit = (row) => {
    navigate("/cadastrar/fornecedor/pessoa/juridica/editar", {
      state: { clients: row.original },
    });
  };

  // Atualizar accessorKey de acordo com os dados do backend
  // Atualizar accessorKey de acordo com os dados do backend
  const columns = React.useMemo(
    () => [
      { header: "Nome", accessorKey: "nome" },
      { header: "Email", accessorKey: "email" },
      { header: "RG", accessorKey: "rg" },
      { header: "CPF", accessorKey: "cpf" },
      { header: "Nascimento", accessorKey: "nascimento" },
      { header: "Tipo", accessorKey: "tipo" },
      { header: "Situação", accessorKey: "situacao" },
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

  const filterModalItens = [
    {
      id: 1,
      icon: <MdOutlineFilterListOff />,
      text: "Limpar Filtros",
      value: "clear",
      query: "",
    },
    {
      id: 2,
      icon: <MdOutlineFilterList />,
      text: "Filtrar por ativos",
      value: "active",
      query: "true",
    },
    {
      id: 3,
      icon: <MdOutlineFilterList />,
      text: "Filtrar por Inativos",
      value: "inactive",
      query: "false",
    },
  ];

  return (
    <Table
      columns={columns}
      data={supplierPj}
      isLoading={isLoading}
      filterModal={
        <Modal
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setFetchStatus={setFetchStatus}
          filterModalItens={filterModalItens}
        />
      }
      title={
        <>
          <Title bold="bold" variant="small">
            Meus fornecedores - pessoa jurídica
          </Title>

          <Text>
            <NavLink to="/cadastrar/funcionarios/novo">Cadastrar novo</NavLink>
          </Text>
        </>
      }
    />
  );
};
