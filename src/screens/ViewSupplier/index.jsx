import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { StyledTableContainer, StyledTitleTable } from "../../components/Tables";
import { Text } from "../../components/Texts/Text";
import { Link, useNavigate } from "react-router-dom";

export const ViewTableSupplierPF = () => {
  const [supplierPF, setSupplierPF] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const navigate = useNavigate();


  // Fetch usando o arquivo json como teste
  const fetchSupplierPF = async () => {
    try {
      const { data } = await axios.get("/fornecedorespf.json");
      setSupplierPF(data);
    } catch (error) {
      console.error("Erro na busca de fornecedores: ", error);
    }
  };

  // useEffect para carregar os cadastros
  useEffect(() => {
    fetchSupplierPF();
  }, []);

  // Deletar um cadastro
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

  // Função para o botão de editar encaminhar para o form de cadastro com os dados do fornecedor
  const handleEdit = (row) => {
    navigate('/cadastrar/fornecedor/pessoa/fisica/editar', {
      state: { supplier: row.original }
    });
  };

  const columns = [
    { header: "Nome do fornecedor", accessorKey: "nomeFornecedor", size: 200 },
    { header: "Produto", accessorKey: "produto", size: 50 },
    { header: "Email", accessorKey: "emailFornecedor", size: 200 },
    { header: "Telefone", accessorKey: "telefoneFornecedor", size: 100 },
    {
      header: "Opções", size: 150,
      Cell: ({ row }) => (
        <div>
          <Link to="/cadastrar/fornecedor/pessoa/fisica/visualizar"><img style={{ paddingRight: "2rem" }} src="/src/assets/view.svg" alt="" /></Link>
          <Link onClick={() => handleDelete(row.original.id)}><img style={{ paddingRight: "2rem" }} src="/src/assets/delete.svg" alt="" /></Link>
          <button style={{ all: "unset", cursor: "pointer" }} onClick={() => handleEdit(row)}><img src="/src/assets/edit.svg" alt="" /></button>
        </div>
      )
    },
  ];

  return (
    <StyledTableContainer>
      <StyledTitleTable>
        <Text variant="large" bold="bold">Meus fornecedores - pessoa física</Text>
        <Link to="/cadastrar/fornecedor/pessoa/fisica/novo">Cadastrar novo</Link>
      </StyledTitleTable>
      <MaterialReactTable
        columns={columns}
        data={supplierPF}
        localization={MRT_Localization_PT_BR}
        state={{ pagination }}
        defaultColumn={
          {
            sx: {
              color: "#000",
              fontSize: "5.2rem",
            },
          }
        }
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
  const navigate = useNavigate();

  // Fetch clientes usando o arquivo json como teste
  const fetchSupplier = async () => {
    try {
      const { data } = await axios.get("/fornecedorespj.json");
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

  // Função para o botão de editar encaminhar para o form de cadastro com os dados do fornecedor
  const handleEdit = (row) => {
    navigate('/cadastrar/fornecedor/pessoa/juridica/editar', {
      state: { supplier: row.original }
    });
  };

  const columns = [
    { header: "Fornecedor", accessorKey: "nomeFantasia", size: 200 },
    { header: "Produto", accessorKey: "produto", size: 100 },
    { header: "Responsável", accessorKey: "responsavelEmpresa", size: 100 },
    { header: "Email", accessorKey: "emailEmpresa", size: 100 },
    { header: "Telefone", accessorKey: "telefoneEmpresa", size: 150 },
    {
      header: "Opções", size: 200,
      Cell: ({ row }) => (
        <div>
          <Link to="/cadastrar/fornecedor/pessoa/juridica/visualizar"><img style={{ paddingRight: "2rem" }} src="/src/assets/view.svg" alt="" /></Link>
          <Link onClick={() => handleDelete(row.original.id)}><img style={{ paddingRight: "2rem" }} src="/src/assets/delete.svg" alt="" /></Link>
          <button style={{ all: "unset", cursor: "pointer" }} onClick={() => handleEdit(row)}><img src="/src/assets/edit.svg" alt="" /></button>
        </div>
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
            fontSize: "5.5rem",
            padding: '1rem',
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "400",
          },
        }}
        onPaginationChange={(newState) => setPagination(newState)}
      />
    </StyledTableContainer>
  );
};
