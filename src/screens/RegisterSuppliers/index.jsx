import { FormsField } from '../../components/Forms/FormsField';
import { Input } from '../../components/Forms/Inputs/Input';
import { Card } from '../../components/Forms/Card';
import { Form } from '../../components/Forms/Form';
import { File } from '../../components/Forms/Inputs/File';
import { Button } from '../../components/Forms/Button';
import { useState } from 'react';

export const RegisterSupplierPF = () => {
  const [formValues, setFormValues] = useState({
    fotoProduto: '',
  });
  const [errorImage, setErrorImage] = useState(false);
  function handleImage({ target }) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
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
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Form title="Cadastrar Fornecedor" width="78rem">
        <Card>
          <File
            id={'fotoProduto'}
            error={errorImage}
            image={formValues.fotoProduto}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={65}
          />
          <Input id="nomeFornecedor" height="4.8rem">
            Nome do fornecedor
          </Input>

          <Input id="codigoFornecedor" height="4.8rem">
            Código do fornecedor
          </Input>

          <FormsField variant="double">
            <Input id="emailFornecedor" height="4.8rem" type="email">
              Email
            </Input>
            <Input id="telefoneFornecedor" height="4.8rem">
              Telefone
            </Input>
          </FormsField>

          <FormsField variant="triple">
            <Input id="rgFornecedor" height="4.8rem">
              RG
            </Input>
            <Input id="cpfFornecedor" height="4.8rem">
              CPF
            </Input>
            <Input id="nascimentoFornecedor" height="4.8rem" type="date">
              Data de nascimento
            </Input>
          </FormsField>

          <FormsField variant="triple">
            <Input id="cepFornecedor" height="4.8rem">
              CEP
            </Input>
            <Input id="numeroFornecedor" height="4.8rem">
              Número
            </Input>
            <Input id="logradouroFornecedor" height="4.8rem">
              Logradouro
            </Input>
          </FormsField>

          <Input
            type="select"
            id="produto"
            height="4.8rem"
            options={[
              { value: 'opcao2', label: 'Produto 1' },
              { value: 'opcao3', label: 'Produto 2' },
            ]}
          >
            Produto
          </Input>

          <FormsField variant="double">
            <Input id="precoProduto" height="4.8rem">
              Preço
            </Input>
            <Input id="impostoProduto" height="4.8rem">
              Imposto sobre compra
            </Input>
          </FormsField>

          <Input id="tempoEntrega" height="4.8rem">
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

        <Button variant="secondary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export const RegisterSupplierPJ = () => {
  const [formValues, setFormValues] = useState({
    fotoProduto: '',
  });
  const [errorImage, setErrorImage] = useState(false);
  function handleImage({ target }) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
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
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Form title="Cadastrar Fornecedor" width="78rem">
        <Card>
          <File
            id={'fotoProduto'}
            error={errorImage}
            image={formValues.fotoProduto}
            onChange={handleImage}
            variant="secondary"
            text="Foto do Produto"
            smileSize={65}
          />
          <Input id="nomeFantasia" height="4.8rem">
            Nome fantasia
          </Input>

          <Input id="responsavelFornecedor" height="4.8rem">
            Responsável
          </Input>

          <Input id="cnpjFornecedor" height="4.8rem">
            CNPJ
          </Input>

          <FormsField variant="double">
            <Input id="razaoSocial" height="4.8rem">
              Razão Social
            </Input>
            <Input id="inscricaoEstadual" height="4.8rem">
              Inscrição estadual
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input id="emailFornecedor" height="4.8rem" type="email">
              Email
            </Input>
            <Input id="telefoneFornecedor" height="4.8rem" type="tel">
              Telefone
            </Input>
          </FormsField>

          <FormsField variant="triple">
            <Input id="inscricaoMunicipal" height="4.8rem">
              Inscrição municipal
            </Input>
            <Input id="tipoContribuinte" height="4.8rem">
              Tipo de contribuinte
            </Input>
            <Input id="inscricaoSuframa" height="4.8rem">
              Inscrição SUFRAMA
            </Input>
          </FormsField>

          <FormsField variant="triple">
            <Input id="cepFornecedor" height="4.8rem">
              CEP
            </Input>
            <Input id="numeroFornecedor" height="4.8rem">
              Número
            </Input>
            <Input id="logradouroFornecedor" height="4.8rem">
              Logradouro
            </Input>
          </FormsField>

          <Input
            type="select"
            id="produto"
            height="4.8rem"
            options={[
              { value: 'opcao2', label: 'Produto 1' },
              { value: 'opcao3', label: 'Produto 2' },
            ]}
          >
            Produto
          </Input>
          <FormsField variant="double">
            <Input id="precoProduto" height="4.8rem">
              Preço
            </Input>
            <Input id="impostoProduto" height="4.8rem">
              Imposto sobre compra
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input id="freteProduto" height="4.8rem">
              Frete
            </Input>
            <Input id="ncmProduto" height="4.8rem">
              NCM
            </Input>
          </FormsField>

          <Input id="tempoEntrega" height="4.8rem">
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

        <Button variant="secondary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};