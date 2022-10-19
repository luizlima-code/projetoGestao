import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { getClientesRequest } from '../../store/ducks/clientes/actions';
import { RootState } from '../../store/ducks/rootReducer';
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

  const { isLoading, clientes } = useSelector(
    (state: RootState) => state.clientes
  );


  useEffect(() => {
    dispatch(getClientesRequest());
  }, [getClientesRequest]);
  console.log(clientes);
  console.log(isLoading);

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
            data={clientes}
            headers={['header1', 'header2', 'header3', 'headerpao']}
          />
        </ContentSearch>
      </MainContent>
    </Container>
  );
};

export default Search;
