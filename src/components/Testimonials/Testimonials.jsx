// import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import t1 from "../../assets/images/Black edge/Icon/icon.png";
import t2 from "../../assets/images/Black edge/Icon/icon.png";
import { IoIosStar } from "react-icons/io";
import AOS from "aos";
import { useContext, useEffect } from "react";
import { themeContext } from "../../Context/Context";

const testimonials = [
  {
    image: t1,
    name: "Ada Lovelace",
    profession: "Traveller",
    feedback:
      "Exploring the world has never been this rewarding. The services provided exceeded all my expectations!",
    rating: 5,
  },
  {
    image: t2,
    name: "Joseph Smith",
    profession: "Photographer",
    feedback:
      "Capturing moments is my passion, and I’m grateful for the opportunities and inspiration I’ve found here.",
    rating: 4,
  },
  {
    image: t1,
    name: "Alex Brown",
    profession: "Entrepreneur",
    feedback:
      "This experience has been transformative. It’s rare to find such dedication and professionalism in today’s world.",
    rating: 4,
  },
  {
    image: t2,
    name: "Emily Carter",
    profession: "Digital Nomad",
    feedback:
      "Seamless and efficient! The team understood my needs and delivered beyond my imagination.",
    rating: 4,
  },
  {
    image: t1,
    name: "David Wilson",
    profession: "Adventure Blogger",
    feedback:
      "The services provided were exactly what I needed to enhance my journey. Every detail was carefully crafted.",
    rating: 5,
  },
  {
    image: t2,
    name: "Alice Brown",
    profession: "Lifestyle Coach",
    feedback:
      "A fantastic experience! The team’s dedication and attention to detail truly made a difference.",
    rating: 5,
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const {theme} = useContext(themeContext)

  return (
    <div className="container mx-auto px-12">
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-3xl md:text-4xl text-gray-800 font-bold mb-8"
      >
        What Client Say About Us
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="200"
          className="bg-CustomYellow mt-3 mb-6 h-1 w-32"
        ></div>
      </h2>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 6 },
            640: { slidesPerView: 2, spaceBetween: 13 },
            1025: { slidesPerView: 3, spaceBetween: 17 },
          }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className={`testimonial-card h-[300px] relative p-2 md:p-4 ${theme === "dark" ? "bg-CustomDark border-2 border-CustomWhite" : "bg-gray-100"}  rounded-2xl shadow-lg transition-transform duration-300 max-w-sm`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden flex relative justify-center rounded-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full absolute object-cover"
                      />
                    </div>
                    <div className="text-start">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">
                        {testimonial.profession}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IoIosStar
                      size={25}
                      key={i}
                      className="text-yellow-400 text-xs md:text-sm lg:text-base"
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <IoIosStar
                      size={25}
                      key={i + 5}
                      className="text-gray-300 text-xs md:text-sm lg:text-base"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 px-2">
                  {testimonial.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
