import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-scroll";
import TopSellers from "./TopSellers";

import {
  slideImage1,
  slideImage2,
  slideImage3,
  slideTitle1,
  slideTitle2,
  slideTitle3,
  slideSubtitle1,
  slideSubtitle2,
  slideSubtitle3,
} from "../Data/data";

const slides = [
  {
    image: slideImage1,
    title: slideTitle1,
    subtitle: slideSubtitle1,
  },
  {
    image: slideImage2,
    title: slideTitle2,
    subtitle: slideSubtitle2,
  },
  {
    image: slideImage3,
    title: slideTitle3,
    subtitle: slideSubtitle3,
  },
];

const Hero = () => {
  return (
    <div className="w-full relative" id="home">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showIndicators={false}
        showArrows={true}
        interval={2500}
        transitionTime={1000}  
        className="h-full"
      >
        {slides.map((slide, index) => (
          <div className="relative" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-[40vh] sm:h-[50vh] lg:h-[55vh]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <p className="text-[12px] md:text-base font-forum uppercase font-light mb-2 text-center max-w-[90%] md:max-w-[600px] mt-20 md:mt-0">
                Crafted with Heritage & Precision
              </p>

              <div className="border-b border-white w-24 mb-8"></div>
              <p className="text-[2.3rem] lg:text-[5rem] font-normal mb-4 font-forum leading-none text-center max-w-[90%] md:max-w-[700px]">
                {slide.title}
              </p>
              <p className="text-[14px] md:text-lg font-light mb-6 text-center max-w-[90%] md:max-w-[600px]">
                {slide.subtitle}
              </p>

              <Link to="menu" smooth={true}>
                <button className="px-6 py-2 border text-white font-semibold hover:bg-white hover:text-black transition-colors">
                  View Our Menu
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const HeroAndTopSellers = () => {
  return (
    <div className="w-full bg-black">
      <Hero />
      <div className="w-full py-5 bg-black">
        <TopSellers />
      </div>
    </div>
  );
};

export default HeroAndTopSellers;
