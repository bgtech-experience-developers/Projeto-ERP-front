import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../api'; // Configuração da API

const TableWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: white;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;


const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get('/clientes')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  const deleteCliente = (id) => {
    api
      .delete(`/clientes/${id}`)
      .then(() => setData((prevData) => prevData.filter((item) => item.id !== id)))
      .catch((error) => console.error('Erro ao excluir cliente:', error));
  };

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Posição</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>E-mail</TableHeader>
            <TableHeader>Telefone</TableHeader>
            <TableHeader>RG</TableHeader>
            <TableHeader>CPF</TableHeader>
            
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableData>{item.nome}</TableData>
              <TableData>{item.cnpj}</TableData>
              <TableData>{item.ativo ? 'Ativo' : 'Inativo'}</TableData>
              <TableData>
                <DeleteButton onClick={() => deleteCliente(item.id)}>
                  Excluir
                </DeleteButton>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableComponent;
