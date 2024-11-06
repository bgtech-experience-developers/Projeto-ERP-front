import { useEffect, useState } from 'react';
import axios from 'axios';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
import { StyledH1 } from '../../components/Forms/Card/style';
import { StyledTableContainer } from '../../components/Tables';
import { Button } from '../../components/Forms/Button';
import useClients from '../../hooks/useClients';

export const ViewTableClients = () => {
    const [clients, setClients] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const { getClient, deleteClient } = useClients();

    // Função para buscar clientes
    const fetchClients = async () => {
        try {
            const { data } = await getClient();
            setClients(data); // Atualiza o estado com os dados recebidos
            console.log(data); // Confirma que os dados estão sendo recebidos
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    // useEffect para carregar os cadastros ao montar o componente
    useEffect(() => {
        fetchClients();
    }, []);

    const handleDelete = async (cpf) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esse cadastro?');
        if (confirmDelete) {
            try {
                // Requisição DELETE para o servidor utilizando o CPF
                await deleteClient(cpf); // Função que envia o CPF para o servidor

                // Atualiza a lista local de clientes removendo o cliente deletado
                const updatedClients = clients.filter((client) => client.cpf !== cpf);
                setClients(updatedClients); // Atualiza o estado com a lista filtrada
            } catch (error) {
                console.error('Erro ao deletar cliente:', error);
            }
        }
    };
    
    // Colunas da tabela
    const columns = [
        { header: 'Nome', accessorKey: 'name' },
        { header: 'Email', accessorKey: 'email' },
        { header: 'RG', accessorKey: 'rg' },
        { header: 'CPF', accessorKey: 'cpf' },
        { header: 'Nascimento', accessorKey: 'date_birth' },
        { header: 'CEP', accessorKey: 'cep' },
        { header: 'Logradouro', accessorKey: 'logradouro' },
        { header: 'Número', accessorKey: 'numero' },
        { header: 'Bairro', accessorKey: 'bairro' },
        { header: 'Cidade', accessorKey: 'cidade' },
        { header: 'Telefone', accessorKey: 'telefone' },
        { header: 'Celular', accessorKey: 'celular' },
        {
            header: 'Actions',
            Cell: ({ row }) => (
                <Button variant={"deleteRegister"} onClick={() => handleDelete(row.original.cpf)}>
                    Excluir cadastro
                </Button>
            ),
        },
    ];

    return (
        <StyledTableContainer>
            <StyledH1>Clientes cadastrados</StyledH1>
            <MaterialReactTable
                columns={columns}
                data={clients}
                localization={MRT_Localization_PT_BR}
                state={{ pagination }}
                muiTableHeadCellProps={{
                    sx: {
                        backgroundColor: '#223548',
                        color: 'white',
                        fontSize: '5.2rem',
                    },
                }}
                muiTableBodyCellProps={{
                    sx: {
                        backgroundColor: '#ECF5FF',
                        color: '#223548',
                        padding: '12px 15px',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                    },
                }}
                onPaginationChange={(newState) => setPagination(newState)}
            />
        </StyledTableContainer>
    );
};
