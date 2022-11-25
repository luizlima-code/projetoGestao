import React, { useState, useEffect } from 'react';
import ModalClientes from './models/cliente';
import ModalEtapas from './models/etapa';
import ModalFunc from './models/funcionario';
import ModalItens from './models/item';
import ModalProjeto from './models/projeto';

interface PropsTypes {
  openModal: boolean;
  setOpenModal: (boolean: boolean) => void;
  title: string;
  id?: string;
}

const ModalOptions = ({
  openModal,
  setOpenModal,
  title,
  id,
}: PropsTypes): React.ReactElement => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(title);
  }, [title]);

  const renderModal = () => {
    switch (title) {
      case 'Cliente':
        return (
          <ModalClientes
            title={title}
            openModal={openModal}
            setOpenModal={setOpenModal}
            id={id}
          />
        );
      case 'Etapas':
        return (
          <ModalEtapas
            title={title}
            openModal={openModal}
            setOpenModal={setOpenModal}
            id={id}
          />
        );
      case 'Funcionário':
        return (
          <ModalFunc
            title={title}
            openModal={openModal}
            setOpenModal={setOpenModal}
            id={id}
          />
        );
      case 'Item':
        return (
          <ModalItens
            title={title}
            openModal={openModal}
            setOpenModal={setOpenModal}
            id={id}
          />
        );
      case 'Projeto':
        return (
          <ModalProjeto
            title={title}
            openModal={openModal}
            setOpenModal={setOpenModal}
            id={id}
          />
        );
    }
  };

  return renderModal() as React.ReactElement;
};

export default ModalOptions;
