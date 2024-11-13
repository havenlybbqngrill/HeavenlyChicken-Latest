import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useState } from "react";
import { useNavigation } from "../NavigationContext"; 

const MostPopular3 = () => {
  const { isAdmin } = useNavigation(); 
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0 },
  };

  const [uploadedImage, setUploadedImage] = useState(null); // Track selected image
  const [isProcessing, setIsProcessing] = useState(false); // Track upload state
  const [showSaveButton, setShowSaveButton] = useState(false); // Track save button visibility

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsProcessing(true);
      setUploadedImage(URL.createObjectURL(file));
      setIsProcessing(false);
      setShowSaveButton(true); 
      console.log("Image uploaded:", file.name);
    }
  };

  const handleImageSave = () => {
    // Logic to save the uploaded image
    alert("Image saved successfully!"); // Replace this with actual save logic
    setShowSaveButton(false); // Hide the save button after saving
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen md:h-[45vh] lg:h-screen">
      {/* First part */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full order-2 md:order-1 relative flex justify-center items-center">
        <img
          src={uploadedImage || "/fried-chicken.jpg"} // Use uploaded image if available
          alt="Fried Chicken"
          className="w-full h-full object-cover"
        />
        {/* Uploading overlay */}
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
            Uploading...
          </div>
        )}
        {/*  (only visible for admin) */}
        {isAdmin && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <label
              htmlFor="image-upload"
              className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
            >
              Upload
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            {uploadedImage && showSaveButton && (
              <button
                className="bg-[#F38025] text-white px-4 py-2 rounded hover:bg-black"
                onClick={handleImageSave}
              >
                Save
              </button>
            )}
          </div>
        )}
      </div>

      {/* Second part */}
      <div
        ref={sectionRef}
        className="w-full md:w-1/2 h-1/2 md:h-full bg-black flex justify-center items-center text-white font-forum order-1 md:order-2"
      >
        <div className="text-left space-y-4 px-4 md:px-8">
          <motion.h2
            className="text-xl text-[#F38025]"
            variants={animationVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Popular Dish
          </motion.h2>
          <motion.div
            className="border-b border-white w-24"
            variants={animationVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ delay: 0.2, duration: 0.5 }}
          ></motion.div>

          <motion.h3
            className="text-4xl md:text-6xl font-semibold"
            variants={animationVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Fried Chicken
          </motion.h3>
          <motion.p
            className="text-base md:text-lg max-w-[500px]"
            variants={animationVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your choice of fresh, hand-breaded Fried Chicken, Tenders, or Wings,
            made with premium cuts for improved taste and crispiness. Each bite
            delivers a perfect balance of juicy and crunchy goodness.
          </motion.p>
          <Link to="menu" smooth={true}>
            <motion.button
              className="px-6 py-2 border text-white font-semibold hover:bg-white hover:text-black transition-colors mt-4 md:mt-5"
              variants={animationVariants}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              View Our Menu
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MostPopular3;
