import React from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable
} from 'material-react-table'
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR'

import mock from './mock'
import { Container } from './style'

const columns = [
    {
        header: 'nome',
        accessorKey: 'nome'
    },
    {
        header: 'tipo',
        accessorKey: 'tipo'
    },
    {
        header: 'email',
        accessorKey: 'email'
    },
    {
        header: 'telefone',
        accessorKey: 'telefone'
    },
]



function Tabela() {
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5
    })
    
    const table = useMaterialReactTable({
        columns,
        data: mock,
        enableFullScreenToggle: false,
        localization: MRT_Localization_PT_BR,
        onPaginationChange: setPagination,
        state: {pagination}

    })

  return (
    <Container>
        <MaterialReactTable table={table} />
    </Container>
    
  )
}

export default Tabela