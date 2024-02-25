import Form from './components/Form'
import ResetGlobalstyle from './globals/resetGlobalStyle'
import Globalstyle from './globals/globalstyle.js';
import styled from 'styled-components';
import ListaDeLembretes from './components/ListaLembrete/index.jsx';
import { useState } from 'react';
import LembretesProvider from './context/lembretes.jsx';

const H1 = styled.h1`
  font-weight:bold;
  font-size:20px;
`


function App() {


  return (
    <>
      <H1>Novo Lembrete</H1>
      <LembretesProvider>
        <Form />
        <ListaDeLembretes />
      </LembretesProvider>
      <ResetGlobalstyle />
      <Globalstyle />
    </>
  )
}

export default App
