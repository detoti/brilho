import React from 'react';
import {
  Page,
 } from 'framework7-react';
import HomeNavBar from '../../../components/NavBars/HomeNavBar';
import ToolbarPrimary from '../../../components/Toolbars/ToolbarPrimary';
import UserInfoBar from '../../../components/UserInfoBar';
import Div from '../../../components/Div'

const CouponDetailPage = () => (
  <Page name="coupon-detail">
		<HomeNavBar headerText='DETALHE DO CUPOM' />
		<Div>
			</Div>
<ToolbarPrimary selected={'2'} />
  </Page>
);
export default CouponDetailPage;