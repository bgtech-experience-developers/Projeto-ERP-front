
import { Card } from "../../components/Forms/Card";
import { Button } from "../../components/Forms/Button";
import { StyledH3 } from "../../components/Forms/Card/style";
import { FormFieldContainer } from "../../components/Forms/FormFieldContainer";
import { Link } from "react-router-dom";

export const RegisterSucess = () => {
    return (
        <>
            <Card
                variant={"titleRegister"}
                title={"Cadastro realizado"}
                width={"78rem"}
                height={"8rem"}
            />
            <Card
                variant={"cardSucess"}
                width={"78rem"}
                height={"60rem"}
            >
                <img style={{ width: "22rem", height: "22rem", margin: "5rem 0 3rem" }} src="src/assets/sucess.svg" alt="" />
                <StyledH3>Cadastro realizado com sucesso!</StyledH3>
                <FormFieldContainer variant="buttonDuplo">
                    <Link to={'/'}>
                        <Button variant={"returnHome"}>Home</Button>
                    </Link>
                    {/* No botão de adicionar mais precisa ajustar para ir para a tela de cadastro de acordo com o tipo de cadastro que ele estiver */}
                    <Link to={'/'}>
                        <Button variant={"returnRegister"}>Adicionar mais</Button>
                    </Link>
                </FormFieldContainer>

            </Card>

        </>
    )
};
