import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { MyRoutes } from './Routes/routes';

function App() {


  return (
    <>
      <ToastContainer
        pauseOnFocusLoss
      />
      <MyRoutes />
    </>
  );
}

export default App;
