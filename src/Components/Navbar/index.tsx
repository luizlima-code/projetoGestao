import React from 'react';
import Example from '../IconLogout';

import { Container, MainContent, Title } from './styles';

const Navbar: React.FC = () => {
    return (
        <Container>
            <MainContent>
                <Title>Titulo da página</Title>
                <Example />
            </MainContent>
        </Container>
    );
}

export default Navbar;