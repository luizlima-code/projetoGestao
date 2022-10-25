import React, { useState } from 'react';

import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import FilterData from './Filter';

import { Container, ContentSearch, MainContent } from './styles';
import TableData from './Table';

const Search: React.FC = () => {
  const [tipoFiltro, setTipoFiltro] = useState('Cliente');
  const [filter, setFilter] = useState<any>({
    pageNumber: 0,
    pageSize: 10,
  });

  const handleFilter = (filtered: string) => {
    setFilter(filtered);
  };

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Sidebar />
        <ContentSearch>
          <FilterData
            handleFilter={handleFilter}
            setTipoFiltro={setTipoFiltro}
          />
          <TableData handleFilter={handleFilter} tipoFiltro={tipoFiltro} />
        </ContentSearch>
      </MainContent>
    </Container>
  );
};

export default Search;
