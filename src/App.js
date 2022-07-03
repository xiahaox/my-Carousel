import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, Component, useEffect } from 'react';
import { render } from "react-dom";
import axios from 'axios'
import Carousel from "./lib";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(props) {
  console.log(props, '--------');
  // const [current, setCurrent] = useState(0);
  const [photos, setPhotos] = useState([]);
  const initialSlide = 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const CarouselRef = useRef(null);
  const sliderRef = useRef(null);

  const { news = [] } = { news: [0, 1, 2, 3, 4] };
  let isMobile = false;
  // let currentIndex = 1

  const CLIENT_ID = '31cf57d170cbbbbc9c5f5f671cb612b275d5b3a83722ecebd754bf4661fe0388'
  const server = 'https://api.unsplash.com'


  useEffect(() => {
    // axios.get(`${server}/search/photos/?client_id=${CLIENT_ID}&per_page=50&query=animal& =landscape`)
    //   .then((res) => {
    //     // console.log(res)
    //     // this.setState({ photos: res.data.results })
    //     setPhotos(res.data.results)
    //   })
    console.log("useEffect");
    setCurrentIndex(initialSlide);
  }, [])

  const timeSaleFn = (index) => {
    // console.log(currentIndex, index);

    let count = index - currentIndex;
    if (count == 0) return;
    console.log(sliderRef);

    setCurrentIndex(index);
    if (isMobile) {
      sliderRef.current.slickGoTo(index)
    } else {
      if (count > 0) {
        CarouselRef.current.moveSlide("after", Math.abs(count))
      } else {
        CarouselRef.current.moveSlide("before", Math.abs(count))
      }
    }
  };

  const renderImages = () => {
    console.log(photos);
    if (!photos.length) return <div>Loading...</div>
    return photos.splice(0, 4).map((img) => <img key={img.id} src={img.urls.regular} alt={"photo"} />)
  }
  const buttonFn = (direction) => {
    let index = 0;
    if (direction == "before") {
      if (currentIndex == 0) {
        index = news.length - 1
      } else {
        index = currentIndex - 1
      }
    } else {
      if (currentIndex == news.length - 1) {
        index = 0;
      } else {
        index = currentIndex + 1
      }
    }
    timeSaleFn(index)
  }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   infinite: true,
  //   initialSlide: initialSlide,
  //   // autoplay: true,
  //   // speed: 500,
  //   centerPadding: "40px",
  //   afterChange: current => setCurrentIndex(current)
  // };
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div
      className="App"
      style={{ backgroundColor: `${1 < 2 ? 'white' : 'white'}` }}
    >
      <div className={`design-news  ${isMobile ? 'mobile' : ''}`}>
        <div className="design-news-wrapper">
          <div className="FlashSale_module_title">
            <div className="time_value">
              {news.map((item, index) => {
                console.log(currentIndex);
                return (
                  <div
                    className={`${index == currentIndex
                      ? 'choose time_value_item'
                      : 'time_value_item'
                      }`}
                    data-timer="0"
                    onClick={() => timeSaleFn(index)}
                  >
                    <div>05.20</div>
                    <div>（Ended）</div>
                  </div>
                );
              })}
            </div>
            <div className="sale_value">
              <div className="whire_line">
                {news.concat({}).map((item, index) => {
                  console.log(currentIndex);
                  return (
                    <div
                      className={`${index <= initialSlide ? 'blue' : ''}  ${index == initialSlide ? 'choose' : ''}`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          {
            !isMobile ? (
              <div>
                <div>
                  <Carousel transition={500} initialSlide={initialSlide} ref={CarouselRef}>
                    <img key={0} src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDJ8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                    <img key={1} src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDN8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                    <img key={2} src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDR8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                    <img key={3} src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDV8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                    <img key={3} src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDV8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                  </Carousel>
                </div>
                <nav>
                  <button className="slider3d__button slider3d__button--left" onClick={() => buttonFn('before')}></button>
                  <button className="slider3d__button slider3d__button--right" onClick={() => buttonFn('after')}></button>
                </nav>
              </div>
            ) : (
              <div>
                {/* layout_bottom  layout_right*/}
                <Slider className='sliderStyle layout_right' {...settings} ref={sliderRef}>
                  <img key={0} src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDJ8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                  <img key={1} src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDN8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                  <img key={2} src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDR8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                  <img key={3} src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTM0MXwwfDF8c2VhcmNofDV8fGFuaW1hbHxlbnwwfDB8fHwxNjU2MTM2MzQw&ixlib=rb-1.2.1&q=80&w=1080" alt={"photo"} />
                </Slider>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
