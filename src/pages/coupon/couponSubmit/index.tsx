import React, { useState } from 'react';
import {
  Page,
} from 'framework7-react';
import HomeNavBar from '../../../components/NavBars/HomeNavBar';
import ToolbarPrimary from '../../../components/Toolbars/ToolbarPrimary';
import UserInfoBar from '../../../components/UserInfoBar';
import Div from '../../../components/Div';
import CouponForm from '../../../components/Coupon/CouponSubmit';

const CouponSubmitPage = () => {
  const [coupons, setCoupons] = useState([]);

  const handleCouponSubmit = (newCoupon) => {
    setCoupons((prevCoupons) => [...prevCoupons, newCoupon]);
  };

  return (
    <Page name="coupon-submit">
      <HomeNavBar />
      <Div>
        <CouponForm onCouponSubmit={handleCouponSubmit} />
      </Div>
      <ToolbarPrimary selected={'3'} />
    </Page>
  );
};

export default CouponSubmitPage;
