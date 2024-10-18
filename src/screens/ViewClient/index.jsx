import { useEffect, useState } from 'react';
import axios from 'axios';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
import { StyledH1 } from '../../components/Forms/Card/style';
import { StyledTableContainer } from '../../components/Tables';
import { Button } from '../../components/Forms/Button';

export const ViewTableClients = () => {
    const [clients, setClients] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

    // Fetch clientes usando o arquivo json como teste
    const fetchClients = async () => {
        try {
            const { data } = await axios.get('/clientes.json');
            setClients(data);
        }
        catch (error) {
            console.error('Erro na busca de clientes: ', error);
        }
    };

    // useEffect para carregar os cadastros
    useEffect(() => {
        fetchClients();
    }, []);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esse cadastro?');
        if (confirmDelete) {
            // Atualizar a lista sem o usuário deletado
            const updateClients = clients.filter((client) => client.id !== id)
            setClients([...updateClients]); // vai atualizar a lista sem o usuário excluído

        }
    };

    const columns = [
        { header: 'Nome', accessorKey: 'nome' },
        { header: 'Email', accessorKey: 'email' },
        { header: 'RG', accessorKey: 'rg' },
        { header: 'CPF', accessorKey: 'cpf' },
        { header: 'Nascimento', accessorKey: 'nascimento' },
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

                <Button variant={"deleteRegister"} onClick={() => handleDelete(row.original.id)}>
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
                    }
                }}
                muiTableBodyCellProps={{
                    sx: {
                        backgroundColor: '#ECF5FF', 
                        color: '223548',
                        padding: '12px 15px',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                    }
                }}
                onPaginationChange={(newState) => setPagination(newState)}
            />
        </StyledTableContainer>
    );
};
