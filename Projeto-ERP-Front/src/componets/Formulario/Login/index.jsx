import { Label } from "../Label";
import { InputCpf } from "../Input/InputCpf";
import { InputSenha } from "../Input/InputSenha";
import { StyledFormLogin } from "./style";

export function FormLogin () {
    return (
        <>
        <StyledFormLogin>
            <Label />
            <InputCpf />
            <Label />
            <InputSenha />
        </StyledFormLogin>
        </>
    )
}