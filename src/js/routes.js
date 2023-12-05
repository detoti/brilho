import HomePage from "../pages/home";
import CouponPage from "../pages/coupon";
import CouponDetailPage from "../pages/coupon/couponDetail";
import CouponSubmitPage from "../pages/coupon/couponSubmit";


var routes = [
	{
		path: '/home',
		component: HomePage,
	},
	{
		path: '/coupon',
		component: CouponPage,
	},
	{
		path: '/coupon-detail',
		component: CouponDetailPage,
	},
	{
		path: '/coupon-submit',
		component: CouponSubmitPage,
	},
];

export default routes;
