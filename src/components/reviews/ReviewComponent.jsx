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
    say: "Pearson has always been my reliable go-to shop whenever I needed revision materials for my school work. The materials are always on point, you cant miss a mark with Pearsons new & updated revision materials.",
    name: "Jonny devs",
    profession: "Student",
  },
  {
    id: 2,
    image: man2,
    say: "A while ago, I needed a banner for my barber shop. A friend reffered me to Pearsons. The banner was so well done that I have always turned to Pearson for all my IT related needs.",
    name: "Daniel Michael",
    profession: "Barber",
  },
  {
    id: 3,
    image: woman,
    say: "Since starting my business about a year ago, I contacted Pearsons to design my shop and banners for my shop advertisement. I can highly recommend that you contact them directly to get started.",
    name: "Tracy Wairimu",
    profession: "Salonist",
  },
  {
    id: 4,
    image: woman2,
    say: "After facing many business management problems, I contacted Pearsons to help with automating my business management. They came up with an efficient point of sale system that I have been using for my business.",
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
          Since our services are efficient and reliable,we have always received
          positive feedback from our customers. This makes us very reliable &
          trustworthy.
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
          <SwiperSlide key={message.id}>
            <ReviewCard message={message} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewComponent;
