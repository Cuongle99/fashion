import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Cart from "../pages/Cart";
import Favourites from "../pages/Favourites";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import { getListBlog } from "../redux/Blog/blogSlice";
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
  }
]);

export default function Routes() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListBlog());
    dispatch(getCartProduct());
  });
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
