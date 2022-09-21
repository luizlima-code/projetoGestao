import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Home from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from './styles';
import ModalOptions from '../ModalOptions';

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const handleOpen = () => setOpenModal(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenModalOptions = (data: string) => {
    handleOpen();
    setTitle(data);
  };

  return (
    <>
      <Container>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton>
            <ListItemIcon>
              <Home style={{ color: 'black ' }} />
            </ListItemIcon>
            <ListItemText primary="Página Inicial" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndIcon style={{ color: 'black ' }} />
            </ListItemIcon>
            <ListItemText primary="Cadastros" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleOpenModalOptions('Cliente')}
              >
                <ListItemIcon>
                  <StarBorder style={{ color: 'black ' }} />
                </ListItemIcon>
                <ListItemText primary="Cliente" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleOpenModalOptions('Etapas')}
              >
                <ListItemIcon>
                  <StarBorder style={{ color: 'black ' }} />
                </ListItemIcon>
                <ListItemText primary="Etapas" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleOpenModalOptions('Funcionário')}
              >
                <ListItemIcon>
                  <StarBorder style={{ color: 'black ' }} />
                </ListItemIcon>
                <ListItemText primary="Funcionário" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleOpenModalOptions('Item')}
              >
                <ListItemIcon>
                  <StarBorder style={{ color: 'black ' }} />
                </ListItemIcon>
                <ListItemText primary="Item" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => handleOpenModalOptions('Projeto')}
              >
                <ListItemIcon>
                  <StarBorder style={{ color: 'black ' }} />
                </ListItemIcon>
                <ListItemText primary="Projeto" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon style={{ color: 'black ' }} />
            </ListItemIcon>
            <ListItemText primary="Pesquisar" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <EventAvailableIcon style={{ color: 'black ' }} />
            </ListItemIcon>
            <ListItemText primary="Agendamentos" />
          </ListItemButton>
        </List>
        <p>© 2022</p>
      </Container>
      <ModalOptions
        title={title}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
    </>
  );
}
