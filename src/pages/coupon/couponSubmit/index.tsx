import React from 'react';
import {
  Page,
 } from 'framework7-react';
import HomeNavBar from '../../../components/NavBars/HomeNavBar';
import ToolbarPrimary from '../../../components/Toolbars/ToolbarPrimary';
import UserInfoBar from '../../../components/UserInfoBar';
import Div from '../../../components/Div'

const CouponSubmitPage = () => (
  <Page name="coupon-submit">
		<HomeNavBar headerText='ENVIE SEU CUPOM' />
		<Div>
			</Div>
<ToolbarPrimary selected={'3'} />
  </Page>
);
export default CouponSubmitPage;