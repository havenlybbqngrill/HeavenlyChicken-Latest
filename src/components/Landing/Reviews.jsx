import { Carousel } from "react-responsive-carousel";
import { FaQuoteRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  ReviewText1,
  ReviewText2,
  ReviewText3,
  ReviewText4,
  ReviewText5,
  ReviewUserImg1,
  ReviewUserImg2,
  ReviewUserImg3,
  ReviewUserImg4,
  ReviewUserImg5,
  ReviewUserName1,
  ReviewUserName2,
  ReviewUserName3,
  ReviewUserName4,
  ReviewUserName5,
} from "../Data/data";

const reviews = [
  {
    id: 1,
    text: ReviewText1,
    userImg: ReviewUserImg1,
    userName: ReviewUserName1,
  },
  {
    id: 2,
    text: ReviewText2,
    userImg: ReviewUserImg2,
    userName: ReviewUserName2,
  },
  {
    id: 3,
    text: ReviewText3,
    userImg: ReviewUserImg3,
    userName: ReviewUserName3,
  },
  {
    id: 4,
    text: ReviewText4,
    userImg: ReviewUserImg4,
    userName: ReviewUserName4,
  },
  {
    id: 5,
    text: ReviewText5,
    userImg: ReviewUserImg5,
    userName: ReviewUserName5,
  },
];

const Reviews = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] lg:h-[600px] font-forum overflow-hidden"
      style={{
        backgroundImage: "url('/Reviews/reviewbg1.jpg')",
      }}
    >
      <h2 className="text-center">Our Happy Customers</h2>
      <div className="absolute inset-0 bg-black opacity-55" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center h-[50%]">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={5000}
            renderIndicator={(onClickHandler, isSelected, index) => {
              return (
                <li
                  className={`inline-block cursor-pointer mx-1 rounded-full w-3 h-3 bg-white transition-all duration-300 ${
                    isSelected ? "h-3 w-3 bg-blue-500" : ""
                  }`}
                  onClick={onClickHandler}
                  key={index}
                />
              );
            }}
            renderIndicators={(children) => (
              <div className="absolute bottom-5 w-full flex justify-center">
                <ul className="flex space-x-2 md:space-x-4 mb-6 md:mb-10">
                  {children}
                </ul>
              </div>
            )}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col items-center h-[240px] md:h-[350px]"
              >
                <FaQuoteRight className="text-white text-sm md:text-xl mb-2 font-medium" />
                <div className="flex items-center justify-center text-white text-xl md:text-5xl text-center font-medium px-4 max-w-[400px] md:max-w-[700px] leading-relaxed">
                  <p className="inline-block">{review.text}</p>
                </div>
                <div className="mt-6">
                  <img
                    src={review.userImg}
                    alt={review.userName}
                    className="rounded-full w-12 h-12 md:w-20 md:h-20 border-4 border-white mb-3"
                  />
                </div>
                <p className="text-[#ce8b54] font-semibold text-xl">
                  {review.userName}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
