import HomePage from '../Pages/HomePage/Homepage';
import Order from '../Pages/Order/Order';
import Product from '../Pages/Product/Product';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: Order,
        isShowHeader: true
    },
    {
        path: '/product',
        page: Product,
        isShowHeader: true
    },
];
