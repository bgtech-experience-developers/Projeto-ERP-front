import { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { StyledTableContainer, StyledTitleTable } from "../../components/Tables";
import { Text } from "../../components/Texts/Text";
import { Link, useNavigate } from "react-router-dom";
import useSupplierPf from "../../hooks/useSupplier";
import useSupplierPj from "../../hooks/useSupplierPj";
import { toast } from "react-toastify";

export const ViewTableSupplierPF = () => {
  const [supplierPF, setSupplierPF] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [isLoading, setIsLoading] = useState(false);
  const { getSupplierPf, deleteSupplierPf } = useSupplierPf();
  const navigate = useNavigate();

  // Função para buscar todos os fornecedores pessoa física
  const fetchSupplierPF = async () => {

    setIsLoading(true);

    try {
      const data = await getSupplierPf();

      const updatedData = data.map((supplier) => ({
        ...supplier,
        status: supplier.situation ? "Ativo" : "Inativo",
        cpf: supplier.cpf || "Não informado",
      }));

      setSupplierPF(updatedData);

    } catch (error) {
      toast.error("Erro na busca de fornecedores.")
      console.error("Erro na busca de fornecedores: ", error);
    } finally {
      setIsLoading(false)
    }
  };

  // useEffect para carregar os cadastros
  useEffect(() => {
    fetchSupplierPF();
  }, []);

  // Deletar um cadastro
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteSupplierPf(id);
        setSupplierPF((prev) => prev.filter((supplier) => supplier.id !== id));
        toast.success("Fornecedor excluído com sucesso!")
      } catch (error) {
        toast.error("Erro ao excluir o fornecedor.");
        console.error("Erro ao deletar fornecedor:", error);
      }
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
  const [isLoading, setIsLoading] = useState(false);
  const { getSupplierPj, deleteSupplierPj } = useSupplierPj();
  const navigate = useNavigate();

  // Função para buscar todos os fornecedores pessoa jurídica
  const fetchSupplierPj = async () => {

    setIsLoading(true);

    try {
      const data = await getSupplierPj();

      const updatedData = data.map((supplier) => ({
        ...supplier,
        status: supplier.situation ? "Ativo" : "Inativo",
        cpf: supplier.cpf || "Não informado",
      }));

      setSupplier(updatedData);

    } catch (error) {
      toast.error("Erro ao buscar fornecedores.");
      console.error("Erro na busca de fornecedores: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect para carregar os cadastros
  useEffect(() => {
    fetchSupplierPj();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esse cadastro?"
    );
    if (confirmDelete) {
      try {
        await deleteSupplierPj(id);
        setSupplier((prev) => prev.filter((supplier) => supplier.id !== id));
        toast.success("Fornecedor excluído com sucesso!")
      } catch (error) {
        toast.error("Erro ao excluir o fornecedor.");
        console.error("Erro ao deletar fornecedor:", error);
      }
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
