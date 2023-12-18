import Content1 from "../../components/Main/Content1";
import Content2 from "../../components/Main/Content2";
// import { Swiper } from "../../styled/swiperStyle";
import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Main = () => {
    return (
        <>
            <VisualWrap>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                >
                <SwiperSlide><img src="../../public/images/visual1.jpg" alt="visual1" /> </SwiperSlide>
                <SwiperSlide><img src="../../public/images/visual2.jpeg" alt="visual2" /></SwiperSlide>
                <SwiperSlide><img src="../../public/images/visual3.jpeg" alt="visual3" />swiper3</SwiperSlide>
                <SwiperSlide><img src="../../public/images/visual4.jpeg" alt="visual4" />swiper4</SwiperSlide>
            </Swiper>
            </VisualWrap>
            <MainWrap >
                <Content1 />
                <Content2 />
            </MainWrap>
        </>
    );
};

export default Main;