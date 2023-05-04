import { A11y, Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonial = [
  {
    id: 1,
    name: "Naomi Carter",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-1-104x104.jpg",
    comments:
      "“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”",
  },
  {
    id: 2,
    name: "Ethan Sullivan",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-2-104x104.jpg",
    comments:
      "“When we were in Portugal we were all blown away by your service and will be recommending you to our friends.”",
  },
  {
    id: 3,
    name: "Lila Patel",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-3-104x104.jpg",
    comments:
      "“Many thanks for the beautiful food and wonderful service. Your food really made the event special. I appreciate your time and effort!”",
  },
  {
    id: 4,
    name: "Dylan Wong",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-4-104x104.jpg",
    comments:
      "“Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”",
  },
  {
    id: 5,
    name: "Ava Johnson",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-3-104x104.jpg",
    comments:
      "“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”",
  },
  {
    id: 6,
    name: "Lucas Kim",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-4-104x104.jpg",
    comments:
      "“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”",
  },
  {
    id: 7,
    name: "Mia Rodriguez",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-1-104x104.jpg",
    comments:
      "“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”",
  },
  {
    id: 8,
    name: "Caleb Chen",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-2-104x104.jpg",
    comments:
      "“When we were in Portugal we were all blown away by your service and will be recommending you to our friends.”",
  },
  {
    id: 9,
    name: "Lily Nguyen",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-3-104x104.jpg",
    comments:
      "“Many thanks for the beautiful food and wonderful service. Your food really made the event special. I appreciate your time and effort!”",
  },
  {
    id: 10,
    name: "Mason Brown",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-4-104x104.jpg",
    comments:
      "“Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”",
  },
  {
    id: 11,
    name: "Harper Lee",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-5-104x104.jpg",
    comments:
      "“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”",
  },
  {
    id: 12,
    name: "Owen Garcia",
    img: "https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-6-104x104.jpg",
    comments:
      "“Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”",
  },
];

const Testimonial = () => {
  return (
    <div className="">
      <Swiper
        onInit={(swiper) => {
          // console.log("init");
        }}
        onSlideChange={(swiper) => {
          // console.log("slide change");
        }}
        modules={[Pagination,Navigation, Autoplay, FreeMode, A11y]}
        spaceBetween={10}
        slidesPerView={4}
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
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {testimonial.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div  className="card  shadow-xl group">
            <div className="w-28 h-28 mx-auto rounded-full border-2 group-hover:bg-slate-600 flex items-center justify-center transition-all transform duration-300 overflow-hidden">
              <img src={slide.img} alt="" className="w-full object-cover" />
            </div>
            <div className="card-body items-center text-center">
              <p className="">{slide.comments}</p>
              <h2 className="card-title text-xl font-bold"> {slide.name} </h2>

              
            </div>
          </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
