import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as ChevronUpSVG } from "../assets/images/svg/back-top-svg.svg";

export default function BackToTop() {
  return (
    <ScrollToTop smooth className='btn__back-top' component={<ChevronUpSVG />} />
  )
} 




