import ReviewCard from "../../Utilities/cards/ReviewCard";
import man from "/src/assets/man.jfif";
import man2 from "/src/assets/man2.jfif";
import woman from "/src/assets/woamn.jfif";
import woman2 from "/src/assets/woman.jfif";
import "./Review.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
const messages = [
  {
    id: 1,
    image: man,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos modi voluptatibus, saepe beatae sint ipsum, molestiae aspernatur autem eos delectus voluptates. Qui, tempore nisi, architecto eligendi doloribus explicabo ratione.",
    name: "Jonny devs",
    profession: "Student",
  },
  {
    id: 2,
    image: man2,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos modi voluptatibus, saepe beatae sint ipsum, molestiae aspernatur autem eos delectus voluptates. Qui, tempore nisi, architecto eligendi doloribus explicabo ratione.",
    name: "Daniel Michael",
    profession: "Barber",
  },
  {
    id: 3,
    image: woman,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos modi voluptatibus, saepe beatae sint ipsum, molestiae aspernatur autem eos delectus voluptates. Qui, tempore nisi, architecto eligendi doloribus explicabo ratione.",
    name: "Tracy Wairimu",
    profession: "Salonist",
  },
  {
    id: 4,
    image: woman2,
    say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos modi voluptatibus, saepe beatae sint ipsum, molestiae aspernatur autem eos delectus voluptates. Qui, tempore nisi, architecto eligendi doloribus explicabo ratione.",
    name: "Lillian Amollo",
    profession: "Business Manager",
  },
];
const ReviewComponent = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="text">
        <h1>
          What our <span>Customers</span> say about us.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure
          nobis iusto. Suscipit facere necessitatibus cupiditate sunt dolor,
          temporibus quis.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {messages.map((message) => (
          <SwiperSlide>
            <ReviewCard message={message} key={message.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewComponent;
