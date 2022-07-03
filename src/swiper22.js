import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Thumbs,
    Controller,
    EffectFade,
} from 'swiper';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css/effect-flip';

SwiperCore.use([Thumbs, Pagination])

class CarouselN extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        // new Swiper(".swiper-container", {
        //     loop: true,
        //     spaceBetween: 10,
        //     slidesPerView: 4,
        //     freeMode: true,
        //     watchSlidesProgress: true,
        // });
        // var swiper2 = new Swiper(".swiper-container2", {
        //     loop: true,
        //     spaceBetween: 10,
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev",
        //     },
        //     thumbs: {
        //         swiper: swiper,
        //     },
        // });

    }
    render() {
        return (

            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {[1, 2, 3].map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src="./Rectangle.png" alt="" />
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </div>
                <div className="swiper-container2">
                    <div className="swiper-wrapper">
                        {[1, 2, 3].map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src="./Rectangle.png" alt="" />
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default CarouselN