import React, { useEffect } from 'react';
import Dashboard from '../../Components/Dashboard';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { Validacao } from '../../config/redirect';

import { Container, MainContent } from './styles';

const Home: React.FC = () => {
  // useEffect(() => {
  //   console.log('erro');
  //   Validacao();
  // }, []);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Sidebar />
        <Dashboard />
      </MainContent>
    </Container>
  );
};

export default Home;
