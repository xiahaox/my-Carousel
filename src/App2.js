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
  Autoplay,
  EffectFade,
} from 'swiper';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselN from "./swiper22";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css/effect-flip';
import 'swiper/css/autoplay'
function App(props) {
  console.log(props, '--------');
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // const { news = [] } = props.designContext;
  let isMobile = false;
  const initialSlide = 0;
  // SwiperCore.use([Thumbs])

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  // console.log(thumbsSwiper1, thumbsSwiper2);

  // const [firstSwiper, setFirstSwiper] = useState(null);
  // const [secondSwiper, setSecondSwiper] = useState(null);

  useEffect(() => {
    const gallerySwiper = carouselRef.current.swiper;
    const thumbnailSwiper = carouselRef2.current.swiper;
    // console.log(thumbnailSwiper, thumbsSwiper);
    // gallerySwiper.thumbs.swiper = thumbnailSwiper;
    // thumbnailSwiper.thumbs.control = gallerySwiper;
  });
  return (
    <div
      className="App"
      style={{ backgroundColor: `${1 < 2 ? 'white' : 'white'}` }}
    >
      <div className={`design-news  ${isMobile ? 'mobile' : ''}`}>
        <div className="design-news-wrapper">
          {/* <CarouselN></CarouselN> */}
          <Swiper
            ref={carouselRef}
            // modules={[Pagination, Scrollbar]}
            // navigation
            // slidesPerView={isMobile ? 'auto' : 'auto'}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            // loop={true}
            // loopedSlides={5} //slide之间的距离
            spaceBetween={isMobile ? 20 : 0}
            // slidesOffsetAfter={100} //设定slide与右边框的预设偏移量
            // allowTouchMove={false}
            watchSlidesProgress={true}
            // scrollbar={{ draggable: true }}
            initialSlide={current} //设定初始化时slide的索引
            pagination={{ clickable: true }}
            // loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => {
              console.log(swiper.activeIndex);
              setCurrent(swiper.realIndex);
            }}
            modules={[Thumbs, EffectFade, Autoplay]}
            // effect={'fade'}

            // onSetTransition={(swiper, transition) => {
            //   for (var i = 0; i < swiper.slides.length; i++) {
            //     var slide = swiper.slides.eq(i);
            //     slide.transition(transition);
            //   }
            // }}

            thumbs={{ swiper: (thumbsSwiper && !thumbsSwiper.destroyed) ? thumbsSwiper : null, }}
          >
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src="./Rectangle.png" alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            className={'swiper2'}
            ref={carouselRef2}
            // direction={'vertical'}
            // onSwiper={setSecondSwiper}
            // loop={true}
            modules={[Thumbs]}
            // watchSlidesProgress
            slidesPerView={3}
            freeMode={true}
            // centeredSlides={true}
            // slideToClickedSlide={true}
            spaceBetween={20}
            grabCursor={true}
            onSwiper={setThumbsSwiper}
            observeParents={true}
            onSlideChange={(swiper) => {
              console.log(swiper.activeIndex);
              // setCurrent(swiper.realIndex);
            }}
          // initialSlide={6}

          >
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src="./Rectangle.png" alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div >
  );
}

export default App;
