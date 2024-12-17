import styled from "styled-components";
import { Header } from "../../components/Header";
import { LogoLogin } from "../../components/Logo";
import { StepEmail } from "../../components/ResetPassword/StepEmail";
import { StepCode } from "../../components/ResetPassword/StepCode";
import { StepPassword } from "../../components/ResetPassword/StepPassword";
import { StepCard } from "../../components/ResetPassword/StepCard";
import Logo from "../../assets/logoafk.svg";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PasswordReset = () => {
    return (
        <>
            <PageWrapper>
                <Header variant="login">
                    <LogoLogin
                        src={Logo}
                        alt="Logo da empresa AFK"
                        // Isso não parecia estar sendo utilizado
                        // margin="0 0 0 9.6rem"
                        href=""
                    />
                </Header>

                {/* <StepEmail /> */}
                {/* <StepCode/> */}
                {/* <StepPassword/> */}
                <StepCard/>
            </PageWrapper>
        </>
    );
}
