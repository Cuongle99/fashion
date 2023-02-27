import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AdminLogin from "../pages/admin/AdminLogin";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Cart from "../pages/Cart";
import Favourites from "../pages/Favourites";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import ProductSearch from "../pages/ProductSearch";
import { getListBlog } from "../redux/Blog/blogSlice";
import { getListEmailClient } from "../redux/ClientEmail/EmailSlice";
import { getCartProduct, getListProduct } from "../redux/Product/productSlice";
import ProtectRouter from "./ProtectRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <ProtectRouter><Cart /></ProtectRouter>,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: '/blog/:blogId',
    element: <BlogDetail />,
  },
  {
    path: "/product/:category",
    element: <Product />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetail />,
  },
  {
    path: '/favourite',
    element: <ProtectRouter><Favourites /></ProtectRouter>,
  },
  {
    path: '/product-search',
    element: <ProductSearch />,
  },
  {
    path: '/admincp',
    element: <AdminLogin />,
  },
]);

export default function Routes() {
  const dispatch = useDispatch();

  const token = useSelector(state => state.userReducer.token)


  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListBlog());
    dispatch(getCartProduct());
    // dispatch(getListEmailClient())
  }, [token]);

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
