import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    handleFilter(filter);
  }, []);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Sidebar />
        <ContentSearch>
          <FilterData
            handleFilter={(e) => handleFilter(e)}
            setTipoFiltro={setTipoFiltro}
          />
          <TableData
            handleFilter={handleFilter}
            tipoFiltro={tipoFiltro}
            filter={filter}
          />
        </ContentSearch>
      </MainContent>
    </Container>
  );
};

export default Search;
