import React, { useEffect } from 'react';
import {
  Page, useStore,
 } from 'framework7-react';
import HomeNavBar from '../../components/NavBars/HomeNavBar';
import ToolbarPrimary from '../../components/Toolbars/ToolbarPrimary';
import Div from '../../components/Div'
import { getCoupons } from '../../api/getCoupons';
import CouponsList from '../../components/Coupon/CouponList';

const CouponPage = () => {
	const couponData = async () => {
		const result = await getCoupons();
		console.log(result);
	};
	
	  useEffect(() => {
		couponData();
	  }, []);

	return (
	
	<Page name="coupon">
		<HomeNavBar />
		
			<CouponsList />
	
		<ToolbarPrimary selected={'2'} />
	</Page>
)
};
export default CouponPage;