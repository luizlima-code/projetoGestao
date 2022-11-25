import React, { useEffect } from 'react';

import {
  Hidden,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useMediaQuery,
  Drawer,
  ListItemButton,
} from '@mui/material';
import { Container, IconButtonResponsive } from './styles';
import ModalOptions from '../ModalOptions';
import { Link } from 'react-router-dom';
import {
  AssignmentInd,
  EventAvailable,
  Search,
  Home,
  Menu,
  StarBorder,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';

const Sidebar = (): React.ReactElement => {
  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const handleOpen = () => setOpenModal(true);

  // menu mobile
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:959px)');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenModalOptions = (data: string) => {
    handleOpen();
    setTitle(data);
  };

  useEffect(() => {
    if (isMobile) {
      setMobileOpen(true);
      setTimeout(() => {
        setMobileOpen(false);
      }, 3000);
    } else {
      setMobileOpen(false);
    }
  }, [isMobile]);

  const contentSideBar = (
    <>
      <Container>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton>
              <ListItemIcon>
                <Home style={{ color: 'black ' }} />
              </ListItemIcon>
              <ListItemText primary="Página Inicial" />
            </ListItemButton>
          </Link>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentInd style={{ color: 'black ' }} />
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
          <Link
            to={'/search'}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Search style={{ color: 'black ' }} />
              </ListItemIcon>
              <ListItemText primary="Pesquisar" />
            </ListItemButton>
          </Link>
          {/* <ListItemButton>
            <ListItemIcon>
              <EventAvailable style={{ color: 'black ' }} />
            </ListItemIcon>
            <ListItemText primary="Agendamentos" />
          </ListItemButton> */}
        </List>
        <p>© 2022</p>
      </Container>
    </>
  );

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="left"
          onClose={() => setMobileOpen(!mobileOpen)}
        >
          {contentSideBar}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer variant="permanent" anchor="left">
          {contentSideBar}
        </Drawer>
      </Hidden>
      {isMobile && (
        <IconButtonResponsive onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu />
        </IconButtonResponsive>
      )}
      <ModalOptions
        title={title}
        openModal={openModal}
        setOpenModal={(e: boolean) => setOpenModal(e)}
      />
    </>
  );
};

export default Sidebar;
