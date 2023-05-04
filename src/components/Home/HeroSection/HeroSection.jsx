import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { A11y, FreeMode, Pagination, Autoplay } from "swiper";
import sliderImg1 from "../../../assets/images/slider/slide-1.jpg";
import sliderImg2 from "../../../assets/images/slider/slide-2.jpg";
import sliderImg3 from "../../../assets/images/slider/slide-3.jpg";

import { useRef } from "react";
import SliderButton from "../SliderButton/SliderButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//  Slider object
const slider = [
  {
    id: 1,
    image: sliderImg1,
    girding: "Welcome to ",
    title: "Bakery Catalog Demo",
    subtitle:
      "We are a unique bakery of square confections. We take pride in using natural ingredients and baking our cupcakes, cakes, and desserts.",
  },
  {
    id: 2,
    image: sliderImg2,
    girding: "Fresh Bakery Products",
    title: "Don’t miss amazing grocery deals",
    subtitle:
      "Our ingredients are high quality where each dessert is carefully made from scratch with only the finest, all-natural ingredients.",
  },
  {
    id: 3,
    image: sliderImg3,
    girding: "Have fun",
    title: "Kid's Parties!",
    subtitle:
      "We now offer fun cupcake parties. Frost, fill and decorate your own cupcakes. Choose from a variety of fondant shapes and colors, or sprinkles!",
  },
];

const HeroSection = () => {
  const swiper = useRef(null);
  const handleNextSlideClick = () => {
    // call swiper instance's slideNext() method
    swiper.current.swiper.slideNext();
  };
  const handlePrevSlideClick = () => {
    // call swiper instance's slidePrev() method
    // console.dir(swiper.current);
    swiper.current.swiper.slidePrev();
  };

  return (
    <div className="container mx-auto relative py-6 sm:py-8 sm:px-8 rounded-lg group">
      <Swiper
        onInit={(swiper) => {
          // console.log("init");
        }}
        onSlideChange={(swiper) => {
          // console.log("slide change");
        }}
        ref={swiper}
        modules={[Pagination, Autoplay, FreeMode, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        loop={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-[80vh] relative z-10 rounded-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full object-cover w-full rounded-lg"
              />
              <div className="px-2 sm:px-4 rounded-lg absolute w-full   mx-auto sm:mx-0 z-50 h-full  top-0 left-0 flex items-center justify-center text-center">
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-orange-700 ">
                    {slide.girding}
                  </h3>
                  <h2 className="text-4xl mt-1 mb-6 font-bold text-white">
                    {slide.title}
                  </h2>
                  <p className="text-white">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton label="prev" onClick={handlePrevSlideClick} />
      <SliderButton label="next" onClick={handleNextSlideClick} />
    </div>
  );
};

export default HeroSection;
