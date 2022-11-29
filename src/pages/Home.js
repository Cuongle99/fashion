import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getListProduct } from '../redux/Product/productSlice';
import BackToTop from '../components/BackToTop'
import BannerHome from '../components/BannerHome'
import BlogBox from '../components/BlogBox'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import ProductBox from '../components/ProductBox'
import ProductNew from '../components/ProductNew'
import ProductSale from '../components/ProductSale'
import SubEmail from '../components/SubEmail'
import Support from '../components/Support'
import Season from '../components/Season';
import { getListBlog } from '../redux/Blog/blogSlice';


export default function Home() {

  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(getListProduct());
  //   dispatch(getListBlog());
  // });

  return (
    <>
        <Header />
        <HeroSlider />
        <Support />
        <ProductBox />
        <BannerHome />
        <ProductSale />
        <Season />
        <ProductNew />
        <BlogBox />
        <SubEmail />
        <Footer />
        <BackToTop />
    </>
  )
}
