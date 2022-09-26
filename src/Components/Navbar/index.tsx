import { useMediaQuery } from '@mui/material';
import React from 'react';
import Example from '../IconLogout';

import { Container, MainContent, Title, StyledAppBarMobile, StyledAppBar } from './styles';

const Navbar: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:959px)');

    const content = (
        <Container>
            <MainContent>
                <Title>Titulo da página</Title>
                <Example />
            </MainContent>
        </Container>
    );

    return (
        <>
            {isMobile ? (
                <StyledAppBarMobile position="fixed" data-testid="appBar">
                    {content}
                </StyledAppBarMobile>
            ) : (
                <StyledAppBar position="fixed" data-testid="appBar">
                    {content}
                </StyledAppBar>
            )}
        </>
    );
}

export default Navbar;