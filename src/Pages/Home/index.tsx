import React from 'react';
import Dashboard from '../../Components/Dashboard';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <div>
                <Sidebar />
                <Dashboard />
            </div>
        </Container>
    );
}

export default Home;