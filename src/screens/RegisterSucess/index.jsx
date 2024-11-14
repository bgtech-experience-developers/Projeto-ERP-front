// import { Card } from "../../components/Forms/Card";
// import { Button } from "../../components/Forms/Button";
// import { StyledH3 } from "../../components/Forms/Card/style";
// import { FormFieldContainer } from "../../components/Forms/FormFieldContainer";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";

// export const RegisterSucess = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Define qual tipo de formulário foi preenchido
//     const formType = location.state?.formType || 'client';

//     // Retornar para a URL correta com base no formulário
//     const getFormUrl = () => {
//         switch (formType) {
//             case 'client':
//                 return '/register-client';
//             case 'employee':
//                 return '/register-employee';
//             case 'supplier':
//                 return '/register-supplier';
//             default:
//                 return '/'
//         }
//     };

//     // Função para redirecionar de forma absoluta
//     const handleNewUrl = () => {
//         navigate(getFormUrl(), { replace: true });
//     }

//     return (
//         <>
//             <Card
//                 variant={"titleRegister"}
//                 title={"Cadastro realizado"}
//                 width={"78rem"}
//                 height={"8rem"}
//             />
//             <Card
//                 variant={"cardSucess"}
//                 width={"78rem"}
//                 height={"60rem"}
//             >
//                 <img style={{ width: "22rem", height: "22rem", margin: "5rem 0 3rem" }} src="src/assets/sucess.svg" alt="" />
//                 <StyledH3>Cadastro realizado com sucesso!</StyledH3>
//                 <FormFieldContainer variant="buttonDuplo">
//                     <Link to={'/'}>
//                         <Button variant={"returnHome"}>Home</Button>
//                     </Link>
//                     <Button variant={"returnRegister"} onClick={handleNewUrl}>Adicionar mais</Button>
//                 </FormFieldContainer>

//             </Card>

//         </>
//     )
// };
