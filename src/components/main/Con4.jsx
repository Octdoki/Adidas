

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import {  Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Con1Wrap, Con4Wrap } from './ConStyle';
import { Outlet, Link } from "react-router-dom"; 

const Con4 = () => {
    return (
        <Con1Wrap>
             <div className="inner">
                <div className="introWrap">
                <h3>Adidas Community </h3> 
                <span className="read">
                    <Link to="/about">
                        READ MORE
                        <img src="./images/arrow.svg" alt="화살표 icon" />
                    </Link>
                </span>  
                </div>
    
                <Con4Wrap>
                    <ul>
                        <li>
                            <img src="./images/con4.avif" alt="화살표 icon" />
                            <p></p>
                        </li>
                        <li>
                            <img src="./images/con4-1.avif" alt="화살표 icon" />
                        </li>
                    </ul>
                  
                </Con4Wrap>
             
            </div>
        </Con1Wrap>
    );
};

export default Con4;