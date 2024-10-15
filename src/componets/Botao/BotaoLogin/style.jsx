import styled from "styled-components";

export const StyledBotaoLogin = styled.button `
    width: 37.3rem;
    height: 5.2rem;
    border-radius: 0.6rem;
    padding: 1rem 1.6rem ;
    gap: 0.4rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.8rem;
    background-color: ${({theme}) => theme.cores.black};
    color: ${({theme}) => theme.cores.white};


`