import { FormsField } from '../../components/Forms/FormsField';
import { Input } from '../../components/Forms/Inputs/Input';
import { Card } from '../../components/Forms/Card';
import { Form } from '../../components/Forms/Form';
import { File } from '../../components/Forms/Inputs/File';
import { Button } from '../../components/Forms/Button';
import { useState } from 'react';

export const RegisterClients = () => {
  const [formValues, setFormValues] = useState({
    razaoSocial: '',
    fotoCliente: '',
    fotoProprietario: '',
    fotoFinanceiro: '',
    fotoContabil: '',
  });
  const [errorImage, setErrorImage] = useState(false);

  const [errors, setErrors] = useState({});

  // Função chamada quando o usuário digita nos campos obrigatórios
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  // Validação quando o usuário sai do campo obrigatório sem preencher
  const handleBlur = (event) => {
    const { id } = event.target;
    const newErrors = { ...errors };

    if (id === 'razaoSocial') {
      if (!formValues.razaoSocial) {
        newErrors.razaoSocial = '*o preenchimento desse campo é obrigatório';
      } else {
        delete newErrors.razaoSocial;
      }
    }

    if (id === 'nomeFantasia') {
      if (!formValues.nomeFantasia) {
        newErrors.nomeFantasia = '*o preenchimento desse campo é obrigatório';
      } else {
        delete newErrors.nomeFantasia;
      }
    }

    if (id === 'cnpj') {
      if (!formValues.cnpj) {
        newErrors.cnpj = '*o preenchimento desse campo é obrigatório';
      } else {
        delete newErrors.cnpj;
      }
    }

    setErrors(newErrors);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

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
      <Form onSubmit={handleSubmit} title="Cadastrar Cliente" width="87.8rem">
        <Card>
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input
                id="razaoSocial"
                height="4.8rem"
                value={formValues.razaoSocial}
                onChange={handleInputChange}
                onBlur={handleBlur}
              >
                Razão social
                {errors.razaoSocial && (
                  <span
                    style={{
                      color: 'red',
                      fontSize: '1rem',
                      paddingLeft: '21rem',
                    }}
                  >
                    {errors.razaoSocial}
                  </span>
                )}
              </Input>
              <Input
                id="nomeFantasia"
                height="4.8rem"
                value={formValues.nomeFantasia}
                onChange={handleInputChange}
                onBlur={handleBlur}
              >
                Nome fantasia
                {errors.nomeFantasia && (
                  <span
                    style={{
                      color: 'red',
                      fontSize: '1rem',
                      paddingLeft: '20rem',
                    }}
                  >
                    {errors.nomeFantasia}
                  </span>
                )}
              </Input>
            </FormsField>
            <File
              id={'fotoCliente'}
              error={errorImage}
              image={formValues.fotoCliente}
              onChange={handleImage}
              text="Adicionar foto"
            />
          </FormsField>

          <Input id="ramoAtuacao" height="4.8rem">
            Ramo de atuação
          </Input>

          <FormsField variant="double">
            <Input
              id="cnpj"
              height="4.8rem"
              value={formValues.cnpj}
              onChange={handleInputChange}
              onBlur={handleBlur}
            >
              CNPJ
              {errors.cnpj && (
                <span
                  style={{
                    color: 'red',
                    fontSize: '1rem',
                    paddingLeft: '8rem',
                  }}
                >
                  {errors.cnpj}
                </span>
              )}
            </Input>
            <Input id="inscricaoEstadual" height="4.8rem">
              Inscrição estadual
            </Input>
          </FormsField>

          <Input
            type="select"
            id="tipoContribuinte"
            height="4.8rem"
            options={[
              { value: 'opcao2', label: 'Opção 1' },
              { value: 'opcao3', label: 'Opção 2' },
            ]}
          >
            Tipo de contribuinte
          </Input>
        </Card>

        <Card title="Endereço da Empresa">
          <FormsField variant="triple">
            <Input id="logradouro" height="4.8rem">
              Logradouro
            </Input>
            <Input id="numero" height="4.8rem">
              Número
            </Input>
            <Input id="cep" height="4.8rem">
              CEP
            </Input>
          </FormsField>

          <Input id="complemento" height="4.8rem">
            Complemento
          </Input>

          <FormsField variant="double">
            <Input id="bairro" height="4.8rem">
              Bairro
            </Input>
            <Input id="cidade" height="4.8rem">
              Cidade
            </Input>
          </FormsField>
        </Card>

        <Card title="Endereço de Entrega">
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

        <Card title="Sócio Proprietário">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input id="nomeSocio" height="4.8rem">
                Nome
              </Input>
              <Input id="emailSocio" height="4.8rem" type="email">
                Email
              </Input>
            </FormsField>
            <File
              id={'fotoProprietario'}
              error={errorImage}
              image={formValues.fotoProprietario}
              onChange={handleImage}
              text="Adicionar foto"
            />
          </FormsField>

          <FormsField variant="double">
            <Input id="telefoneSocio" height="4.8rem">
              Telefone
            </Input>
            <Input id="celularSocio" height="4.8rem">
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input id="rgSocio" height="4.8rem">
              RG
            </Input>
            <Input id="cpfSocio" height="4.8rem">
              CPF
            </Input>
          </FormsField>
        </Card>

        <Card title="Contato Financeiro">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input id="nomeFinanceiro" height="4.8rem">
                Nome
              </Input>
              <Input id="emailFinanceiro" height="4.8rem" type="email">
                Email
              </Input>
            </FormsField>
            <File
              id={'fotoFinanceiro'}
              error={errorImage}
              image={formValues.fotoFinanceiro}
              onChange={handleImage}
              text="Adicionar foto"
            />
          </FormsField>

          <FormsField variant="double">
            <Input id="telefoneFinanceiro" height="4.8rem">
              Telefone
            </Input>
            <Input id="celularFinanceiro" height="4.8rem">
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input id="rgFinanceiro" height="4.8rem">
              RG
            </Input>
            <Input id="cpfFinanceiro" height="4.8rem">
              CPF
            </Input>
          </FormsField>
        </Card>

        <Card title="Contato Contábil">
          <FormsField variant="file" align="flex-end">
            <FormsField>
              <Input id="nomeContabil" height="4.8rem">
                Nome
              </Input>
              <Input id="emailContabil" height="4.8rem" type="email">
                Email
              </Input>
            </FormsField>
            <File
              id={'fotoContabil'}
              error={errorImage}
              image={formValues.fotoContabil}
              onChange={handleImage}
              text="Adicionar foto"
            />
          </FormsField>

          <FormsField variant="double">
            <Input id="telefoneContabil" height="4.8rem">
              Telefone
            </Input>
            <Input id="celularContabil" height="4.8rem">
              Celular
            </Input>
          </FormsField>

          <FormsField variant="double">
            <Input id="rgContabil" height="4.8rem">
              RG
            </Input>
            <Input id="cpfContabil" height="4.8rem">
              CPF
            </Input>
          </FormsField>
        </Card>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </div>
  );
};
