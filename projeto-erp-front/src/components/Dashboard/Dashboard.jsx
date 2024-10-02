
import { GridContainer, GridHeader, GridAside, GridMain, GridFooter } from "./Dashboard.style"

export function Dashboard() {
    return (
        <>
            <GridContainer>
                <GridHeader>Header</GridHeader>
                <GridAside>Menu</GridAside>
                <GridMain>Conteudo</GridMain>
                <GridFooter>Footer</GridFooter>
            </GridContainer>
        </>
    )
}
