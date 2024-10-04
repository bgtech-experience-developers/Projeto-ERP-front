import { TituloLogin } from "../../Textos/Titulo"
import { StyledLogin } from "./style"
import { Paragrafo } from "../../Textos/Paragrafo"
import { FormLogin } from "../../Formulario/Login"
import { BotaoLogin } from "../../Botao/BotaoLogin"


export function CardLogin() {
    return (
        <>
            <StyledLogin>
                <TituloLogin/>
                <Paragrafo/>
                <FormLogin/>
                <BotaoLogin/>
                <Paragrafo/>
            </StyledLogin>

        </>

    )

}