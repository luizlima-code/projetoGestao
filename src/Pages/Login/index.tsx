import React from 'react';

import { Container, ContainerContent, MainContent, Input, ButtonLogin, LogoImg } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <ContainerContent>
                <MainContent>
                    <LogoImg src="/logo.svg" alt='logoTipo' />
                    <Input placeholder='Email' />
                    <Input placeholder='Password' />
                    <ButtonLogin>Login</ButtonLogin>
                </MainContent>
            </ContainerContent>
        </Container>
    );
}

export default Login;