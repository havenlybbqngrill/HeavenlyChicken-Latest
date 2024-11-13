import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useState } from "react";
import { useNavigation } from "../NavigationContext";

const MostPopular1 = () => {
  const { isAdmin } = useNavigation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [selectedImage, setSelectedImage] = useState(null); // Track selected image
  const [isUploading, setIsUploading] = useState(false); // Track uploading state
  const [isImageSaved, setIsImageSaved] = useState(false); // Track if the image is saved

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setSelectedImage(URL.createObjectURL(file));
      setIsImageSaved(false); // Reset save status when a new image is uploaded
      setIsUploading(false);
      console.log("Image uploaded:", file.name);
    }
  };

  const handleSaveImage = () => {
    // Logic to save the uploaded image
    setIsImageSaved(true); // Set image as saved
    alert("Image saved successfully!"); // Replace this with actual save logic
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen md:h-[45vh] lg:h-screen">
      {/* First part */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full order-2 md:order-1 relative flex justify-center items-center">
        <img
          src={selectedImage || "/ribs.jpg"}
          alt="Delicious Pork Ribs"
          className="w-full h-full object-cover"
        />
        {/* Uploading overlay */}
        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
            Uploading...
          </div>
        )}
        {/* (only visible for admin) */}
        {isAdmin && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <label
              htmlFor="upload-input"
              className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
            >
              Upload
            </label>
            <input
              id="upload-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            {selectedImage && !isImageSaved && (
              <button
                className="bg-[#F38025] text-white px-4 py-2 rounded hover:bg-black"
                onClick={handleSaveImage}
              >
                Save
              </button>
            )}
          </div>
        )}
      </div>

      {/* Second part */}
      <div
        ref={ref}
        className="w-full md:w-1/2 h-1/2 md:h-full bg-black flex justify-center items-center text-white font-forum order-1 md:order-2"
      >
        <div className="text-left space-y-4 px-4 md:px-8">
          <motion.h2
            className="text-xl text-[#F38025]"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Popular Dish
          </motion.h2>
          <motion.div
            className="border-b border-white w-24"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.h3
            className="text-4xl md:text-6xl font-semibold"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ribs Rack
          </motion.h3>
          <motion.p
            className="text-base md:text-lg max-w-[500px]"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Premium large Pork Ribs slow-cooked and char-grilled, served with
            our signature honey hickory sauce for a perfect balance of smoky and
            sweet flavors. Paired with crispy seasoned fries for a mouthwatering
            BBQ experience.
          </motion.p>
          <Link to="menu" smooth={true}>
            <motion.button
              className="px-6 py-2 border text-white font-semibold hover:bg-white hover:text-black transition-colors mt-4 md:mt-5"
              variants={textVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
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

export default MostPopular1;
