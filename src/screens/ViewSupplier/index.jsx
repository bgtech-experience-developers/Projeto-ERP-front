import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { StyledTableContainer, StyledTitleTable } from "../../components/Tables";
import { Button } from "../../components/Forms/Button";
import { Text } from "../../components/Texts/Text";
import { Link } from "react-router-dom";

export const ViewTableSupplierPF = () => {
  const [supplierPF, setSupplierPF] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  // Fetch clientes usando o arquivo json como teste
  const fetchSupplierPF = async () => {
    try {
      const { data } = await axios.get("/fornecedorpf.json");
      setSupplierPF(data);
    } catch (error) {
      console.error("Erro na busca de fornecedores: ", error);
    }
  };

  // useEffect para carregar os cadastros
  useEffect(() => {
    fetchSupplierPF();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      // Atualizar a lista sem o usuário deletado
      const updateSupplier = supplierPF.filter((supplier) => supplier.id !== id);
      setSupplierPF([...updateSupplier]); // vai atualizar a lista sem o usuário excluído
    }
  };

  const columns = [
    { header: "Fornecedor", accessorKey: "nomeFornecedor", size: 150 },
    // { header: "Código", accessorKey: "codigoFornecedor", size: 100 },
    { header: "Email", accessorKey: "emailFornecedor", size: 150 },
    { header: "Telefone", accessorKey: "telefoneFornecedor", size: 120 },
    // { header: "RG", accessorKey: "rgFornecedor", size: 100 },
    // { header: "CPF", accessorKey: "cpfFornecedor", size: 120 },
    // // { header: "Nascimento", accessorKey: "nascimentoFornecedor", size: 100 },
    // { header: "CEP", accessorKey: "cepFornecedor", size: 80 },
    // { header: "Logradouro", accessorKey: "logradouroFornecedor", size: 150 },
    // { header: "Número", accessorKey: "numeroFornecedor", size: 80 },
    // { header: "Bairro", accessorKey: "bairroFornecedor", size: 150 },
    // { header: "Cidade", accessorKey: "cidadeFornecedor", size: 150 },
    // { header: "Produto", accessorKey: "produto", size: 150 },
    // { header: "Preço do Produto", accessorKey: "precoProduto", size: 100 },
    // { header: "Imposto de Compra", accessorKey: "impostoCompra", size: 100 },
    // { header: "Tempo de Entrega", accessorKey: "tempoEntrega", size: 100 },
    {
      header: "Opções", size: 80,
      Cell: ({ row }) => (
        <Link to="/cadastrar/fornecedor/pessoa/fisica/novo">
          Ver mais
        </Link>
      )
    },
    {
      header: "Ação", size: 80,
      Cell: ({ row }) => (
        <Button
          variant={"deleteRegister"}
          onClick={() => handleDelete(row.original.id)}
        >
          Excluir cadastro
        </Button>
      ),
    },
  ];

  return (
    <StyledTableContainer>
      <StyledTitleTable>
        <Text variant="large" bold="bold">Meus fornecedores - pessoa física</Text>
        <Link to="/cadastrar/fornecedor/pessoa/fisica/novo">Novo cadastro</Link>
      </StyledTitleTable>
      <MaterialReactTable
        columns={columns}
        data={supplierPF}
        localization={MRT_Localization_PT_BR}
        state={{ pagination }}
        muiTableHeadCellProps={{
          sx: {
            color: "#000",
            fontSize: "5.2rem",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            padding: "12px 15px",
            fontSize: "1.1rem",
            fontWeight: "500",
          },
        }}
        onPaginationChange={(newState) => setPagination(newState)}
      />
    </StyledTableContainer>
  );
};

export const ViewTableSupplierPJ = () => {
  const [supplier, setSupplier] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  // Fetch clientes usando o arquivo json como teste
  const fetchSupplier = async () => {
    try {
      const { data } = await axios.get("/clientes.json");
      setSupplier(data);
    } catch (error) {
      console.error("Erro na busca de fornecedores: ", error);
    }
  };

  // useEffect para carregar os cadastros
  useEffect(() => {
    fetchSupplier();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      // Atualizar a lista sem o usuário deletado
      const updateSupplier = supplier.filter((supplier) => supplier.id !== id);
      setSupplier([...updateSupplier]); // vai atualizar a lista sem o usuário excluído
    }
  };

  const columns = [
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
      header: "Actions",
      Cell: ({ row }) => (
        <Button
          variant={"deleteRegister"}
          onClick={() => handleDelete(row.original.id)}
        >
          Excluir cadastro
        </Button>
      ),
    },
  ];

  return (
    <StyledTableContainer>
      <StyledTitleTable>
        <Text variant="large" bold="bold">Meus fornecedores - pessoa jurídica</Text>
        <Link to="/cadastrar/fornecedor/pessoa/juridica/novo">Novo cadastro</Link>
      </StyledTitleTable>
      <MaterialReactTable
        columns={columns}
        data={supplier}
        localization={MRT_Localization_PT_BR}
        state={{ pagination }}
        muiTableHeadCellProps={{
          sx: {
            color: "#000",
            fontSize: "5.2rem",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            padding: "12px 15px",
            fontSize: "1.1rem",
            fontWeight: "500",
          },
        }}
        onPaginationChange={(newState) => setPagination(newState)}
      />
    </StyledTableContainer>
  );
};
