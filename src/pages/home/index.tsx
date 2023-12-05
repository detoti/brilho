import React from 'react';
import {
  Page,
 } from 'framework7-react';
import HomeNavBar from '../../components/NavBars/HomeNavBar';
import ToolbarPrimary from '../../components/Toolbars/ToolbarPrimary';
import UserInfoBar from '../../components/UserInfoBar';
import Div from '../../components/Div'
import OngsButtonsContainer from '../../components/OngsButtonsContainer';

const HomePage = () => (
  <Page name="home">
		<HomeNavBar />
		<Div>
		<h1>Cupons que recuperam o brilho de cada um!</h1>

			<p>Sempre que você resgata um cupom, você pode escolher qual das ONGs deseja ajudar, com isso os ganhos com anuncios são revertidos para ajudar quem realmente precisa! Faça parte dessa grande ação.</p>
			<h2>Conheça o trabalho das ONGs que você pode ajudar utilizando o Brilho:</h2>
			<OngsButtonsContainer />
			<UserInfoBar />
			</Div>
<ToolbarPrimary selected={'1'} />
  </Page>
);
export default HomePage;