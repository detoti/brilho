import React from 'react';
import { Page } from 'framework7-react';
import HomeNavBar from '../../components/NavBars/HomeNavBar';
import ToolbarPrimary from '../../components/Toolbars/ToolbarPrimary';
import CouponsList from '../../components/Coupon/CouponList';

const CouponPage = () => {
  return (
    <Page name="coupon">
      <HomeNavBar />
      <CouponsList />
      <ToolbarPrimary selected={'2'} />
    </Page>
  );
};

export default CouponPage;
