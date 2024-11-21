import * as S from "./style"
import { _ContentWrapper } from "./style"
import { Header } from "../Header"
import { Form } from "../Forms/Form"
import { Card } from "../../components/Forms/Card"
import { Input } from "../../components/Forms/Inputs/Input"
import { Button } from "../../components/Forms/Button"
import { Text } from "../../components/Texts/Text"




export const Login = () => {
    return (
        <>
            <S._ContentWrapper>
                <Card variant="form-container-login" width='38%' letterSpacing='0px'>
                    <Form variant='secondary'>
                        <S._DivWrapper>
                            {/* <FormsField $variant="file"> */}

                            <Input
                                style={{
                                    fontSize: '14px',
                                    letterSpacing: '0px'
                                }}
                                variant='secondary'
                                placeholder='CNPJ'>
                                CNPJ</Input>


                            <Input
                                variant='secondary'
                                placeholder='Senha'
                                type="password"
                                style={{
                                    fontSize: '14px',
                                    letterSpacing: '0px'
                                }}
                            >Senha</Input>
                            {/* </FormsField> */}
                        </S._DivWrapper>

                        <S._DivWrapper $margin='1.4rem 0 0 0' >

                            <Button fontSize='14px' width='100%'>Entrar</Button>

                            <Text
                                variant='x-small'
                                color='#5B5B5B'
                                style={{
                                    fontSize: '14px',
                                    letterSpacing: '0px'
                                }}

                            >Esqueceu a senha?

                                <S._LinkText href=''>Recuperar</S._LinkText>
                            </Text>



                        </S._DivWrapper>
                    </Form>



                </Card>
                </S._ContentWrapper>

        </>
    )
}