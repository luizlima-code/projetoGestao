import React from 'react';
import Dashboard from '../../Components/Dashboard';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';

import { Container, MainContent } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <MainContent>
                <Sidebar />
                <Dashboard />
            </MainContent>
        </Container>
    );
}

export default Home;