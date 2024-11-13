import { FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Highlight = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-black py-12 font-dm-sans">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold">
            {inView && <CountUp start={0} end={1287} duration={3} />}+
          </span>
          <span className="mt-2 text-base md:text-lg">Visitors daily</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold">
            {inView && <CountUp start={0} end={578} duration={3} />}+
          </span>
          <span className="mt-2 text-base md:text-lg">Delivery monthly</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold">
            {inView && <CountUp start={0} end={10000} duration={3} />}+
          </span>
          <span className="mt-2 text-base md:text-lg">Positive feedback</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-1">
            <span className="text-3xl md:text-4xl font-bold">
              {inView && (
                <CountUp start={0} end={4.7} decimals={1} duration={3} />
              )}
            </span>
            <FaStar className="text-white text-2xl md:text-3xl" />
          </div>
          <span className="mt-2 text-base md:text-lg">Uber Eats</span>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
