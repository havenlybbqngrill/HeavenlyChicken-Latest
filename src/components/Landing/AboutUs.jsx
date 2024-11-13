import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#05080a] flex justify-center p-8 pb-20" id="about">
      <div
        ref={ref}
        className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center py-20 font-forum"
      >
        {/* Left Part */}
        <div className="lg:w-1/2 mb-6 md:mb-10 lg:mb-0 px-4 w-full flex flex-col justify-center ">
          <motion.h2
            className="text-xl text-[#F38025] mb-2 "
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            About Us
            <div className="border-b border-white w-24 mb-4"></div>
          </motion.h2>
          <motion.h3
            className="text-6xl font-semibold text-white mb-2  "
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.2 }}
          >
            History
          </motion.h3>
          <motion.p
            className="text-white leading-relaxed text-justify "
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Established in 2006, Heavenly Chicken & Ribs is proudly owned and
            operated by{" "}
            <span className="italic">Gary and Jennifer Armstrong</span>. With a
            deep commitment to our community, we take pride in giving back to
            the very place that has supported us over the years. Our connections
            run deep with the locals—the schools, churches, beaches, and the
            many organizations that are woven into the fabric of our area.
            <br />
            <br />
            Many years ago, recognizing a growing need for more dining options,
            we set out to create a space that could serve our community. As
            locals ourselves, we understood the demand for quality food in our
            area. With our previous experience in the food industry, we rolled
            up our sleeves and established our little hole in the wall.
            <br />
            <br />
            Today, we are proud to be a part of Calvert County for over a
            decade, providing job opportunities for the younger generation and
            fostering a sense of community. We cherish our food, our dedicated
            staff, our customers, and our beloved Southern Maryland.
          </motion.p>
        </div>

        {/* Right Part */}
        <motion.div
          className="md:w-1/2 flex justify-center relative px-4 md:px-10 w-full lg:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <img
            src="/waiters.jpg"
            alt="Heavenly Chicken & Ribs"
            className="w-full h-auto border rounded-md"
          />
          <motion.img
            src="/chefs.jpg"
            alt="Our Chefs"
            className="absolute top-[130px] left-20 md:left-[5rem] lg:left-48 w-2/4 md:w-3/4 h-auto border rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
