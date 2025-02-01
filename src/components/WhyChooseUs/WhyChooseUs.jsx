import React, { useContext, useEffect } from "react";
import Slider from "react-slick"; // For the carousel slider
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { themeContext } from "../../Context/Context";

export default function TechFeatures() {
  // Slick carousel settings
  const settings = {
    slidesToShow: 1,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Make animations trigger only once
    });
  }, []);

  const features = [
    {
      id: 1,
      title: "AI-Powered Automation",
      description:
        "Our platform uses cutting-edge AI to automate your workflows and boost efficiency.",
      delay: 300,
    },
    {
      id: 2,
      title: "Secure Cloud Hosting",
      description:
        "Experience high-speed, secure cloud hosting solutions with 99.9% uptime and robust security.",
      delay: 400,
    },
    {
      id: 3,
      title: "Scalable Solutions",
      description:
        "Solutions that grow with your business for seamless performance.",
      delay: 500,
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      description:
        "Get 24/7 support from our expert team to help you resolve any issues quickly and efficiently.",
      delay: 600,
    },
  ];

  const  {theme} = useContext(themeContext)

  return (
    <section className={` ${theme === "dark" ? "bg-CustomDark" : "bg-white"} sm:text-left py-4 pb-10 sm:px-16 px-8` }>
      <h2
      className={` ${theme === "dark" ? "text-CustomWhite" : " text-black"} text-left text-3xl lg:text-4xl font-bold mb-4` }
        data-aos="fade-up"
      >
        Why Choose Our Tech Solutions
      </h2>
      <div
        className="bg-CustomYellow h-1 w-32"
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>

      <div className="mt-8 grid grid-cols-12 gap-10">
        {/* <div className="col-span-8 lg:col-span-7 flex flex-col items-start justify-center gap-y-10 mt-10 lg:mx-0 lg:mt-0">
          <div data-aos="fade-up" data-aos-delay="300">
            <span className="bg-CustomBlue inline-block text-white rounded-full px-3.5 py-0.5 text-sm tracking-wide">
              01
            </span>
            <h2 className="text-2xl font-semibold my-4">
              AI-Powered Automation
            </h2>
            <p className="text-gray-600">
              Our platform uses cutting-edge AI to automate your workflows and
              boost efficiency.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <span className="bg-CustomBlue inline-block text-white rounded-full px-3.5 py-0.5 text-sm tracking-wide">
              02
            </span>
            <h2 className="text-2xl font-semibold my-4">
              Secure Cloud Hosting
            </h2>
            <p className="text-gray-600">
              Experience high-speed, secure cloud hosting solutions with 99.9%
              uptime and robust security.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <span className="bg-CustomBlue inline-block text-white rounded-full px-3.5 py-0.5 text-sm tracking-wide">
              03
            </span>
            <h2 className="text-2xl font-semibold my-4">Scalable Solutions</h2>
            <p className="text-gray-600">
              Solutions that grow with your business for seamless performance
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600">
            <span className="bg-CustomBlue inline-block text-white rounded-full px-3.5 py-0.5 text-sm tracking-wide">
              04
            </span>
            <h2 className="text-2xl font-semibold my-4">
              24/7 Customer Support
            </h2>
            <p className="text-gray-600">
              Get 24/7 support from our expert team to help you resolve any
              issues quickly and efficiently.
            </p>
          </div>
        </div> */}
        <div className="col-span-8 lg:col-span-7 flex flex-col items-start justify-center gap-y-10 mt-10 lg:mx-0 lg:mt-0">
          {features.map((feature) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <span className="bg-CustomBlue inline-block text-white rounded-full px-3.5 py-0.5 text-sm tracking-wide">
                {feature.id < 10 ? `0${feature.id}` : feature.id}
              </span>
            <h2 className={`${theme === "dark" ? "text-CustomWhite" : "text-black"} text-2xl font-semibold my-4`}>{feature.title}</h2>
            <p className={` ${theme === "dark" ? "text-CustomWhite" : "text-gray-600"} `}>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="hidden sm:block relative col-span-12 order-first lg:order-last lg:col-span-5 rounded-3xl overflow-x-auto lg:overflow-visible">
          <div data-aos="fade-up" data-aos-delay="15s0">
            <Slider {...settings} className="img-carousel space-y-4">
              <div data-aos="fade-up">
                <img
                  src="https://images.pexels.com/photos/6153344/pexels-photo-6153344.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-full object-cover rounded-3xl max-h-[20vh] min-h-[10.625rem] lg:max-h-[80vh] lg:min-h-[43.125rem]"
                  alt="Tech Image 1"
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src="https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full object-cover rounded-3xl max-h-[20vh] min-h-[10.625rem] lg:max-h-[80vh] lg:min-h-[43.125rem]"
                  alt="Tech Image 2"
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src="https://images.pexels.com/photos/7658430/pexels-photo-7658430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-full object-cover rounded-3xl max-h-[20vh] min-h-[10.625rem] lg:max-h-[80vh] lg:min-h-[43.125rem]"
                  alt="Tech Image 3"
                />
              </div>
              <div data-aos="fade-up">
                <img
                  src="https://images.pexels.com/photos/12899121/pexels-photo-12899121.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="w-full object-cover rounded-3xl max-h-[20vh] min-h-[10.625rem] lg:max-h-[80vh] lg:min-h-[43.125rem]"
                  alt="Tech Image 4"
                />
              </div>
            </Slider>
          </div>
          {/* Profiles */}
          {/* <div className="hidden lg:flex z-10 absolute top-72 -left-16 bg-white rounded-full items-center py-3 pl-3 pr-16 shadow-xl" data-aos="fade-left">
            <img
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="Profile"
              className="mr-3.5 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="capitalize">Alex Carter</h3>
              <span className="text-xs font-semibold mt-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 w-3.5 h-3.5 text-yellow-400">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                4.8
              </span>
            </div>
          </div>

          <div className="hidden xl:flex z-10 absolute bottom-56 -right-16 bg-white rounded-full items-center py-3 pl-3 pr-16 shadow-xl" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixid=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"
              alt="Profile"
              className="mr-3.5 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="capitalize">Sharon Moen</h3>
              <span className="text-xs font-semibold mt-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1 w-3.5 h-3.5 text-yellow-400">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                4.5
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
