
import { FormsField } from "../../components/Forms/FormsField";
import { Input } from "../../components/Forms/Inputs/Input";
import { Card } from "../../components/Forms/Card";
import { Form } from "../../components/Forms/Form";
import { File } from "../../components/Forms/Inputs/File";
import { Button } from "../../components/Forms/Button";

export const RegisterSupplierPF = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Form title="Cadastrar Fornecedor" width="78rem">
                <Card>
                    <File variant="secondary" text="Foto do Produto" />
                    <Input
                        id="nomeFornecedor"
                        height="4.8rem"
                    >
                        Nome do fornecedor
                    </Input>

                    <Input
                        id="codigoFornecedor"
                        height="4.8rem"
                    >
                        Código do fornecedor
                    </Input>

                    <FormsField variant="double">
                        <Input
                            id="emailFornecedor"
                            height="4.8rem"
                            type="email"
                        >
                            Email
                        </Input>
                        <Input
                            id="telefoneFornecedor"
                            height="4.8rem"
                        >
                            Telefone
                        </Input>
                    </FormsField>

                    <FormsField variant="triple">
                        <Input
                            id="rgFornecedor"
                            height="4.8rem"
                        >
                            RG
                        </Input>
                        <Input
                            id="cpfFornecedor"
                            height="4.8rem"
                        >
                            CPF
                        </Input>
                        <Input
                            id="nascimentoFornecedor"
                            height="4.8rem"
                            type="date"
                        >
                            Data de nascimento
                        </Input>
                    </FormsField>

                    <FormsField variant="triple">
                        <Input
                            id="cepFornecedor"
                            height="4.8rem"
                        >
                            CEP
                        </Input>
                        <Input
                            id="numeroFornecedor"
                            height="4.8rem"
                        >
                            Número
                        </Input>
                        <Input
                            id="logradouroFornecedor"
                            height="4.8rem"
                        >
                            Logradouro
                        </Input>
                    </FormsField>

                    <Input
                        id="produto"
                        height="4.8rem"
                        placeholder="Selecione"
                    >
                        Produto
                    </Input>

                    <FormsField variant="double">
                        <Input
                            id="precoProduto"
                            height="4.8rem"
                        >
                            Preço
                        </Input>
                        <Input
                            id="impostoProduto"
                            height="4.8rem"
                        >
                            Imposto sobre compra
                        </Input>
                    </FormsField>

                    <Input
                        id="tempoEntrega"
                        height="4.8rem"
                    >
                        Tempo de entrega
                    </Input>
                </Card>

                {/* Interessante rever, pois tem duas vezes campos para logradouro, número e cep */}
                <Card title="Endereço do fornecedor">
                    <FormsField variant="triple">
                        <Input id="logradouroEntrega" height="4.8rem">
                            Logradouro
                        </Input>
                        <Input id="numeroEntrega" height="4.8rem">
                            Número
                        </Input>
                        <Input id="cepEntrega" height="4.8rem">
                            CEP
                        </Input>
                    </FormsField>

                    <Input id="complementoEntrega" height="4.8rem">
                        Complemento
                    </Input>

                    <FormsField variant="double">
                        <Input id="bairroEntrega" height="4.8rem">
                            Bairro
                        </Input>
                        <Input id="cidadeEntrega" height="4.8rem">
                            Cidade
                        </Input>
                    </FormsField>
                </Card>

                <Button
                    variant="secondary"
                    type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    )
}

export const RegisterSupplierPJ = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Form title="Cadastrar Fornecedor" width="78rem">
                <Card>
                    <File variant="secondary" text="Foto do Produto" />
                    <Input
                        id="nomeFantasia"
                        height="4.8rem"
                    >
                        Nome fantasia
                    </Input>

                    <Input
                        id="responsavelFornecedor"
                        height="4.8rem"
                    >
                        Responsável
                    </Input>

                    <Input
                        id="cnpjFornecedor"
                        height="4.8rem"
                    >
                        CNPJ
                    </Input>

                    <FormsField variant="double">
                        <Input
                            id="razaoSocial"
                            height="4.8rem"
                        >
                            Razão Social
                        </Input>
                        <Input
                            id="inscricaoEstadual"
                            height="4.8rem"
                        >
                            Inscrição estadual
                        </Input>
                    </FormsField>

                    <FormsField variant="double">
                        <Input
                            id="emailFornecedor"
                            height="4.8rem"
                            type="email"
                        >
                            Email
                        </Input>
                        <Input
                            id="telefoneFornecedor"
                            height="4.8rem"
                            type="tel"
                        >
                            Telefone
                        </Input>
                    </FormsField>

                    <FormsField variant="triple">
                        <Input
                            id="inscricaoMunicipal"
                            height="4.8rem"
                        >
                            Inscrição municipal
                        </Input>
                        <Input
                            id="tipoContribuinte"
                            height="4.8rem"
                        >
                            Tipo de contribuinte
                        </Input>
                        <Input
                            id="inscricaoSuframa"
                            height="4.8rem"
                        >
                            Inscrição SUFRAMA
                        </Input>
                    </FormsField>

                    <FormsField variant="triple">
                        <Input
                            id="cepFornecedor"
                            height="4.8rem"
                        >
                            CEP
                        </Input>
                        <Input
                            id="numeroFornecedor"
                            height="4.8rem"
                        >
                            Número
                        </Input>
                        <Input
                            id="logradouroFornecedor"
                            height="4.8rem"
                        >
                            Logradouro
                        </Input>
                    </FormsField>

                    <Input
                        id="produto"
                        height="4.8rem"
                        placeholder="Selecione"
                    >
                        Produto
                    </Input>

                    <FormsField variant="double">
                        <Input
                            id="precoProduto"
                            height="4.8rem"
                        >
                            Preço
                        </Input>
                        <Input
                            id="impostoProduto"
                            height="4.8rem"
                        >
                            Imposto sobre compra
                        </Input>
                    </FormsField>

                    <FormsField variant="double">
                        <Input
                            id="freteProduto"
                            height="4.8rem"
                        >
                            Frete
                        </Input>
                        <Input
                            id="ncmProduto"
                            height="4.8rem"
                        >
                            NCM
                        </Input>
                    </FormsField>

                    <Input
                        id="tempoEntrega"
                        height="4.8rem"
                    >
                        Tempo de entrega
                    </Input>
                </Card>

                {/* Interessante rever, pois tem duas vezes campos para logradouro, número e cep */}
                <Card title="Endereço do fornecedor">
                    <FormsField variant="triple">
                        <Input id="logradouroEntrega" height="4.8rem">
                            Logradouro
                        </Input>
                        <Input id="numeroEntrega" height="4.8rem">
                            Número
                        </Input>
                        <Input id="cepEntrega" height="4.8rem">
                            CEP
                        </Input>
                    </FormsField>

                    <Input id="complementoEntrega" height="4.8rem">
                        Complemento
                    </Input>

                    <FormsField variant="double">
                        <Input id="bairroEntrega" height="4.8rem">
                            Bairro
                        </Input>
                        <Input id="cidadeEntrega" height="4.8rem">
                            Cidade
                        </Input>
                    </FormsField>
                </Card>

                <Button
                    variant="secondary"
                    type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    )
}

