import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import FilterData from './Filter';

import { Container, ContentSearch, MainContent } from './styles';
import TableData from './Table';

const Search: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <MainContent>
        <Sidebar />
        <ContentSearch>
          <FilterData />
          <TableData
            titulo="Filtro Selecionado"
            headers={['header1', 'header2', 'header3']}
          />
        </ContentSearch>
      </MainContent>
    </Container>
  );
};

export default Search;
