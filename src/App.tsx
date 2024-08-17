import React from 'react'
import Form from './components/Form/index'
import ResetGlobalstyle from './globals/resetGlobalStyle'
import Globalstyle from './globals/globalstyle';
import styled from 'styled-components';
import ListaDeLembretes from './components/ListaLembrete/index';
import LembretesProvider from './context/lembretes';

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
