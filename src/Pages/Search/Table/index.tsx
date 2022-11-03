import React from 'react';

import TableCliente from './models/cliente';
import TableEtapa from './models/etapa';
import TableFuncionario from './models/funcionario';
import TableItemProjeto from './models/itemProjeto';
import TableProjeto from './models/projeto';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface OwnProps {
  handleFilter: (filter: any) => void;
  tipoFiltro: string;
  filter: any;
}

type Props = OwnProps;

const TableData = (props: Props): React.ReactElement => {
  const { handleFilter, tipoFiltro, filter } = props;

  const renderModal = () => {
    switch (tipoFiltro) {
      case 'Cliente':
        return <TableCliente filter={filter} />;
      case 'Etapa':
        return <TableEtapa filter={filter} />;
      case 'Funcionario':
        return <TableFuncionario filter={filter} />;
      case 'Item':
        return <TableItemProjeto filter={filter} />;
      case 'Projeto':
        return <TableProjeto filter={filter} />;
    }
  };

  return renderModal() as ReactJSXElement;
};

export default TableData;
