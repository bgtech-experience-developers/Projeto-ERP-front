import React from "react";
import styled from "styled-components";
import { _DivWrapper } from "../../components/Login/style";

import { Header } from "../../components/Header";
import { LogoLogin } from "../../components/Logo";
import Logo from "../../assets/logoafk.svg";

import { Login } from "../../components/Login";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const UserLogin = () => {
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

        <Login />
      </PageWrapper>
    </>
  );
};

export default UserLogin;
