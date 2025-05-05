import HomePage from "../Pages/HomePage/Homepage";
import Order from "../Pages/Order/Order";
import Product from "../Pages/Product/Product";
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import TypeProductPage from "../Pages/TypeProductPage/TypeProductPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: Order,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: Product,
    isShowHeader: true,
  },
  {
    path: "/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: true,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: true,
  },
  {
    path: "/product-detail",
    page: ProductDetailPage,
    isShowHeader: true,
  },
];
