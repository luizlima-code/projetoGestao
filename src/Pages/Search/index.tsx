import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import FilterData from './Filter';

import { Container, ContentSearch, MainContent } from './styles';
import TableData from './Table';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [tipoFiltro, setTipoFiltro] = useState('Cliente');
  const [filter, setFilter] = useState<any>({
    pageNumber: 0,
    pageSize: 10,
  });

  const handleFilter = (filtered: string) => {
    setFilter(filtered);
    console.log('este é o filter: ', filtered)
    // dispatch(getFuncionariosRequest(filtered));
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
          <TableData
            handleFilter={handleFilter}
            tipoFiltro={tipoFiltro}
            headers={['header1', 'header2', 'header3', 'headerpao']}
          />
        </ContentSearch>
      </MainContent>
    </Container>
  );
};

export default Search;
