import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useNavigation } from "../NavigationContext";

const MostPopular2 = () => {
  const { isAdmin } = useNavigation(); 
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });


  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [isImageSaved, setIsImageSaved] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadingImage(true);
      setUploadedImage(URL.createObjectURL(file));
      setUploadingImage(false);
      setIsImageSaved(false); // Reset save state on new upload
      console.log("Image uploaded:", file.name);
    }
  };

  const handleImageSave = () => {
    alert("Image saved successfully!"); 
    setIsImageSaved(true); 
  };

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen md:h-[45vh] lg:h-screen">
      {/* First part */}
      <div className="w-full md:w-1/2 h-full order-2 relative flex justify-center items-center">
        <img
          src={uploadedImage || "/bowls.jpg"}
          alt="Popular Dish"
          className="w-full h-full object-cover"
        />
        {uploadingImage && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
            Uploading...
          </div>
        )}
        {isAdmin && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <label
              htmlFor="image-input"
              className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
            >
              Upload
            </label>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            {uploadedImage && !isImageSaved && (
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
        ref={ref}
        className="w-full md:w-1/2 h-auto md:h-full bg-black flex justify-center items-center text-white font-forum order-1 py-8 md:py-0"
      >
        <div className="text-left space-y-4 px-4 md:px-8 max-w-[500px]">
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
          ></motion.div>

          <motion.h3
            className="text-4xl md:text-6xl font-semibold"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Heavenly Bowls
          </motion.h3>
          <motion.p
            className="text-base md:text-lg"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Choose from flavorful options like Turkey, Chicken, Steak, Fish, or
            Shrimp, served over a bed of fresh grains and seasonal veggies. Each
            bowl is crafted to offer a balanced, protein-packed meal with bold,
            savory flavors.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default MostPopular2;
