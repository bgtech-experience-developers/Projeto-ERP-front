
import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    background-color: violet;
    grid-template-areas: 
        "header header header header header"
        "aside main main main main"
        "aside main main main main"
        "footer footer footer footer footer";
`

export const GridHeader = styled.header`
    grid-area: header;
    background-color: #2C3E50;
    height: 10vh;
`

export const GridAside = styled.aside`
    grid-area: aside;
    background-color: #8C97A1;
    height: 80vh;
`

export const GridMain = styled.main`
    grid-area: main;
    background-color: #ECF0F1;
`

export const GridFooter = styled.footer`
    grid-area: footer;
    background-color: #111920;
    height: 10vh;
`
