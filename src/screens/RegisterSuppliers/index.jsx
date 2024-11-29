import { FormsField } from "../../components/Forms/FormsField";
import { Input } from "../../components/Forms/Inputs/Input";
import { Card } from "../../components/Forms/Card";
import { Form } from "../../components/Forms/Form";
import { File } from "../../components/Forms/Inputs/File";
import { Button } from "../../components/Forms/Button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RegisterSupplierPF = () => {
  const { state } = useLocation();
  const [formValues, setFormValues] = useState({
    fotoProduto: "",
    nomeFornecedor: "",
    codigoFornecedor: "",
    emailFornecedor: "",
    telefoneFornecedor: "",
    rgFornecedor: "",
    cpfFornecedor: "",
    nascimentoFornecedor: "",
    produto: "",
    precoProduto: "",
    impostoCompra: "",
    tempoEntrega: "",
    logradouroFornecedor: "",
    numeroFornecedor: "",
    cepFornecedor: "",
    complemento: "",
    bairroFornecedor: "",
    cidadeFornecedor: "",
    situacao: "",
  });

  const [title, setTitle] = useState("Cadastrar Fornecedor");
  const [button, setButton] = useState("Cadastrar");

  useEffect(() => {
    if (state?.supplier) {
      setFormValues(state.supplier);
      setTitle("Editar Fornecedor");
      setButton("Atualizar cadastro");
    } else {
      setTitle("Cadastrar Fornecedor");
      setButton("Cadastrar");

    }
  }, [state]);

  const [errorImage, setErrorImage] = useState(false);

  function handleImage({ target }) {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const file = target.files[0];
    const id = target.id;
    console.log(file);

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => {
        setErrorImage(false);
      }, 2000);
      return;
    }
    console.log(formValues.fotoProduto);

    setFormValues({ ...formValues, [id]: file });
  };

  return (
    <Form title={title}>
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="nomeFornecedor"
              height="4.8rem"
              value={formValues.nomeFornecedor}
              onChange={(event) =>
                setFormValues({ ...formValues, nomeFornecedor: event.target.value })
              }
            >
              Nome do fornecedor
            </Input>

            <Input
              id="codigoFornecedor"
              height="4.8rem"
              value={formValues.codigoFornecedor}
              onChange={(event) =>
                setFormValues({ ...formValues, codigoFornecedor: event.target.value })
              }
            >
              Código do fornecedor
            </Input>
          </FormsField>
          <File
            id={"fotoProduto"}
            error={errorImage}
            image={formValues.fotoProduto}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <FormsField variant="double">
          <Input
            id="emailFornecedor"
            height="4.8rem"
            type="email"
            value={formValues.emailFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, emailFornecedor: event.target.value })
            }
          >
            Email
          </Input>
          <Input
            id="telefoneFornecedor"
            height="4.8rem"
            value={formValues.telefoneFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, telefoneFornecedor: event.target.value })
            }
          >
            Telefone
          </Input>
        </FormsField>

        <FormsField variant="triple">
          <Input
            id="rgFornecedor"
            height="4.8rem"
            value={formValues.rgFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, rgFornecedor: event.target.value })
            }
          >
            RG
          </Input>
          <Input
            id="cpfFornecedor"
            height="4.8rem"
            value={formValues.cpfFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, cpfFornecedor: event.target.value })
            }
          >
            CPF
          </Input>
          <Input
            id="nascimentoFornecedor"
            height="4.8rem"
            type="date"
            value={formValues.nascimentoFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, nascimentoFornecedor: event.target.value })
            }
          >
            Data de nascimento
          </Input>
        </FormsField>

        <Input
          type="select"
          id="produto"
          height="4.8rem"
          options={[
            { value: "opcao2", label: "Produto 1" },
            { value: "opcao3", label: "Produto 2" },
          ]}
          value={formValues.produto}
          onChange={(event) =>
            setFormValues({ ...formValues, produto: event.target.value })
          }
        >
          Produto
        </Input>

        <FormsField variant="double">
          <Input
            id="precoProduto"
            height="4.8rem"
            value={formValues.precoProduto}
            onChange={(event) =>
              setFormValues({ ...formValues, precoProduto: event.target.value })
            }
          >
            Preço
          </Input>
          <Input
            id="impostoCompra"
            height="4.8rem"
            value={formValues.impostoCompra}
            onChange={(event) =>
              setFormValues({ ...formValues, impostoCompra: event.target.value })
            }
          >
            Imposto sobre compra
          </Input>
        </FormsField>

        <Input
          id="tempoEntrega"
          height="4.8rem"
          value={formValues.tempoEntrega}
          onChange={(event) =>
            setFormValues({ ...formValues, tempoEntrega: event.target.value })
          }
        >
          Tempo de entrega
        </Input>
      </Card>

      <Card title="Endereço do fornecedor">
        <FormsField variant="triple">
          <Input
            id="logradouroFornecedor"
            height="4.8rem"
            value={formValues.logradouroFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, logradouroFornecedor: event.target.value })
            }
          >
            Logradouro
          </Input>
          <Input
            id="numeroFornecedor"
            height="4.8rem"
            value={formValues.numeroFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, numeroFornecedor: event.target.value })
            }
          >
            Número
          </Input>
          <Input
            id="cepFornecedor"
            height="4.8rem"
            value={formValues.cepFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, cepFornecedor: event.target.value })
            }
          >
            CEP
          </Input>
        </FormsField>

        <Input
          id="complemento"
          height="4.8rem"
          value={formValues.complemento}
          onChange={(event) =>
            setFormValues({ ...formValues, complemento: event.target.value })
          }
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="bairroFornecedor"
            height="4.8rem"
            value={formValues.bairroFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, bairroFornecedor: event.target.value })
            }
          >
            Bairro
          </Input>
          <Input
            id="cidadeFornecedor"
            height="4.8rem"
            value={formValues.cidadeFornecedor}
            onChange={(event) =>
              setFormValues({ ...formValues, cidadeFornecedor: event.target.value })
            }
          >
            Cidade
          </Input>
        </FormsField>
      </Card>
      <Card>
        <Button variant="secondary" type="submit" height="4.8rem">
          {button}
        </Button>
      </Card>
    </Form>
  );
};

export const RegisterSupplierPJ = () => {
  const { state } = useLocation();
  const [formValues, setFormValues] = useState({
    fotoProduto: "",
    nomeFantasia: "",
    responsavelEmpresa: "",
    cnpj: "",
    razaoSocial: "",
    inscricaoEstadual: "",
    emailEmpresa: "",
    telefoneEmpresa: "",
    inscricaoMunicipal: "",
    tipoContribuinte: "",
    inscricaoSuframa: "",
    produto: "",
    precoProduto: "",
    frete: "",
    tempoEntrega: "",
    logradouroEmpresa: "",
    numeroEmpresa: "",
    cepEmpresa: "",
    complementoEmpresa: "",
    bairroEmpresa: "",
    cidadeEmpresa: ""
  });

  const [title, setTitle] = useState("Cadastrar Fornecedor");
  const [button, setButton] = useState("Cadastrar");

  useEffect(() => {
    if (state?.supplier) {
      setFormValues(state.supplier);
      setTitle("Editar Fornecedor");
      setButton("Atualizar cadastro");
    } else {
      setTitle("Cadastrar Fornecedor");
      setButton("Cadastrar")
    }
  }, [state]);

  const [errorImage, setErrorImage] = useState(false);

  function handleImage({ target }) {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const file = target.files[0];
    const id = target.id;
    console.log(file);

    if (!allowedTypes.includes(file.type)) {
      setErrorImage(true);
      setTimeout(() => {
        setErrorImage(false);
      }, 2000);
      return;
    }
    console.log(formValues.fotoProduto);

    setFormValues({ ...formValues, [id]: file });
  };

  return (
    <Form title={title}>
      <Card>
        <FormsField variant="file" align="flex-end">
          <FormsField>
            <Input
              id="nomeFantasia"
              height="4.8rem"
              value={formValues.nomeFantasia}
              onChange={(event) =>
                setFormValues({ ...formValues, nomeFantasia: event.target.value })}
            >
              Nome fantasia
            </Input>

            <Input
              id="responsavelEmpresa"
              height="4.8rem"
              value={formValues.responsavelEmpresa}
              onChange={(event) =>
                setFormValues({ ...formValues, responsavelEmpresa: event.target.value })}
            >
              Responsável
            </Input>
          </FormsField>
          <File
            id={"fotoProduto"}
            error={errorImage}
            image={formValues.fotoProduto}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={55}
          />
        </FormsField>

        <Input
          id="cnpj"
          height="4.8rem"
          value={formValues.cnpj}
          onChange={(event) =>
            setFormValues({ ...formValues, cnpj: event.target.value })}
        >
          CNPJ
        </Input>

        <FormsField variant="double">
          <Input
            id="razaoSocial"
            height="4.8rem"
            value={formValues.razaoSocial}
            onChange={(event) =>
              setFormValues({ ...formValues, razaoSocial: event.target.value })}
          >
            Razão Social
          </Input>
          <Input
            id="inscricaoEstadual"
            height="4.8rem"
            value={formValues.inscricaoEstadual}
            onChange={(event) =>
              setFormValues({ ...formValues, inscricaoEstadual: event.target.value })}
          >
            Inscrição estadual
          </Input>
        </FormsField>

        <FormsField variant="double">
          <Input
            id="emailEmpresa"
            height="4.8rem"
            type="email"
            value={formValues.emailEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, emailEmpresa: event.target.value })}>
            Email
          </Input>
          <Input
            id="telefoneEmpresa"
            height="4.8rem"
            type="tel"
            value={formValues.telefoneEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, telefoneEmpresa: event.target.value })}
          >
            Telefone
          </Input>
        </FormsField>

        <FormsField variant="triple">
          <Input
            id="inscricaoMunicipal"
            height="4.8rem"
            value={formValues.inscricaoMunicipal}
            onChange={(event) =>
              setFormValues({ ...formValues, inscricaoMunicipal: event.target.value })}
          >
            Inscrição municipal
          </Input>

          {/* Mudar esse input para select, ver quais as opções */}
          <Input
            id="tipoContribuinte"
            height="4.8rem"
            value={formValues.tipoContribuinte}
            onChange={(event) =>
              setFormValues({ ...formValues, tipoContribuinte: event.target.value })}
          >
            Tipo de contribuinte
          </Input>
          <Input
            id="inscricaoSuframa"
            height="4.8rem"
            value={formValues.inscricaoSuframa}
            onChange={(event) =>
              setFormValues({ ...formValues, inscricaoSuframa: event.target.value })}
          >
            Inscrição SUFRAMA
          </Input>
        </FormsField>

        <Input
          type="select"
          id="produto"
          height="4.8rem"
          options={[
            { value: "opcao2", label: "Produto 1" },
            { value: "opcao3", label: "Produto 2" },
          ]}
          value={formValues.produto}
          onChange={(event) =>
            setFormValues({ ...formValues, produto: event.target.value })}
        >
          Produto
        </Input>
        <FormsField variant="double">
          <Input
            id="precoProduto"
            height="4.8rem"
            value={formValues.precoProduto}
            onChange={(event) =>
              setFormValues({ ...formValues, precoProduto: event.target.value })}
          >
            Preço
          </Input>
          <Input
            id="frete"
            height="4.8rem"
            value={formValues.frete}
            onChange={(event) =>
              setFormValues({ ...formValues, frete: event.target.value })}
          >
            Frete
          </Input>
        </FormsField>

        <Input
          id="tempoEntrega"
          height="4.8rem"
          value={formValues.tempoEntrega}
          onChange={(event) =>
            setFormValues({ ...formValues, tempoEntrega: event.target.value })}
        >
          Tempo de entrega
        </Input>
      </Card>

      <Card title="Endereço do fornecedor">
        <FormsField variant="triple">
          <Input
            id="logradouroEmpresa"
            height="4.8rem"
            value={formValues.logradouroEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, logradouroEmpresa: event.target.value })}
          >
            Logradouro
          </Input>
          <Input
            id="numeroEmpresa"
            height="4.8rem"
            value={formValues.numeroEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, numeroEmpresa: event.target.value })}
          >
            Número
          </Input>
          <Input
            id="cepEmpresa"
            height="4.8rem"
            value={formValues.cepEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, cepEmpresa: event.target.value })}
          >
            CEP
          </Input>
        </FormsField>

        <Input
          id="complementoEmpresa"
          height="4.8rem"
          value={formValues.complementoEmpresa}
          onChange={(event) =>
            setFormValues({ ...formValues, complementoEmpresa: event.target.value })}
        >
          Complemento
        </Input>

        <FormsField variant="double">
          <Input
            id="bairroEmpresa"
            height="4.8rem"
            value={formValues.bairroEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, bairroEmpresa: event.target.value })}
          >
            Bairro
          </Input>
          <Input
            id="cidadeEmpresa"
            height="4.8rem"
            value={formValues.cidadeEmpresa}
            onChange={(event) =>
              setFormValues({ ...formValues, cidadeEmpresa: event.target.value })}
          >
            Cidade
          </Input>
        </FormsField>
      </Card>

      <Card>
        <Button type="submit" height="4.8rem">
          {button}
        </Button>
      </Card>
    </Form>
  );
};
