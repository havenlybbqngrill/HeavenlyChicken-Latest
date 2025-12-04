import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigation } from "../NavigationContext";

import {
  MenuItemName1,
  MenuItemName2,
  MenuItemName3,
  MenuItemName4,
  MenuItemName5,
  MenuItemName6,
  MenuItemImg1,
  MenuItemImg2,
  MenuItemImg3,
  MenuItemImg4,
  MenuItemImg5,
  MenuItemImg6,
  MenuItemIngredients1,
  MenuItemIngredients2,
  MenuItemIngredients3,
  MenuItemIngredients4,
  MenuItemIngredients5,
  MenuItemIngredients6,
  MenuItemPrice1,
  MenuItemPrice2,
  MenuItemPrice3,
  MenuItemPrice4,
  MenuItemPrice5,
  MenuItemPrice6,
  MenuItemLink1,
  MenuItemLink2,
  MenuItemLink3,
  MenuItemLink4,
  MenuItemLink5,
  MenuItemLink6,
} from "../Data/data";

const dishes = [
  {
    name: MenuItemName1,
    img: MenuItemImg1,
    ingredients: MenuItemIngredients1,
    price: MenuItemPrice1,
    link: MenuItemLink1,
  },
  {
    name: MenuItemName2,
    img: MenuItemImg2,
    ingredients: MenuItemIngredients2,
    price: MenuItemPrice2,
    link: MenuItemLink2,
  },
  {
    name: MenuItemName3,
    img: MenuItemImg3,
    ingredients: MenuItemIngredients3,
    price: MenuItemPrice3,
    link: MenuItemLink3,
  },
  {
    name: MenuItemName4,
    img: MenuItemImg4,
    ingredients: MenuItemIngredients4,
    price: MenuItemPrice4,
    link: MenuItemLink4,
  },
  {
    name: MenuItemName5,
    img: MenuItemImg5,
    ingredients: MenuItemIngredients5,
    price: MenuItemPrice5,
    link: MenuItemLink5,
  },
  {
    name: MenuItemName6,
    img: MenuItemImg6,
    ingredients: MenuItemIngredients6,
    price: MenuItemPrice6,
    link: MenuItemLink6,
  },
];

const Menu = () => {
  const { isAdmin } = useNavigation();
  const [uploadedImages, setUploadedImages] = useState(
    Array(dishes.length).fill(null)
  );
  const [uploadingImages, setUploadingImages] = useState(
    Array(dishes.length).fill(false)
  );
  const [isImageSaved, setIsImageSaved] = useState(
    Array(dishes.length).fill(false)
  );

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...uploadedImages];
      const newUploadingState = [...uploadingImages];
      newUploadingState[index] = true; // Set uploading state
      setUploadingImages(newUploadingState);

      newImages[index] = URL.createObjectURL(file);
      setUploadedImages(newImages);

      newUploadingState[index] = false; // Reset uploading state
      setUploadingImages(newUploadingState);

      const newSavedState = [...isImageSaved];
      newSavedState[index] = false; // Reset save state on new upload
      setIsImageSaved(newSavedState);

      console.log("Image uploaded:", file.name);
    }
  };

  const handleImageSave = (index) => {
    alert("Image saved successfully!"); // Replace this with actual save logic
    const newSavedState = [...isImageSaved];
    newSavedState[index] = true; // Set saved state to true after saving
    setIsImageSaved(newSavedState);
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div
      className="bg-[#05080a] text-white font-forum py-10 md:py-20 relative"
      id="menu"
    >
      <div className="max-w-[1300px] mx-auto px-4 py-8 bg-[#05080a]">
        {/* Title */}
        <div className="flex flex-col justify-center items-center mb-8 md:mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 ">
            Delicious Menu
          </h1>
          <img
            src="/separator.png"
            alt="Centered Image"
            className="w-[100px] md:w-[200px] h-[20px] object-cover rounded-md mb-8 "
          />
        </div>

        {/* Menu Grid */}
        {/* replace this with menu grid container  */}
         {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[1000px] mx-auto ">
          {dishes.map((dish, idx) => (
            <div key={idx} className="relative">
              <a
                href={dish.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="relative"
              >
                <motion.div
                  className="bg-[#111315] p-3 rounded-lg flex flex-col items-start hover:shadow-[4px_4px_10px_0px_rgba(243,128,37,0.5)] transition-transform duration-300 ease-in-out"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={idx}
                  variants={boxVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={uploadedImages[idx] || dish.img}
                    alt={dish.name}
                    className="w-full h-40 md:h-52 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold">{dish.name}</h2>
                  <p className="text-sm mt-2 mb-4">{dish.ingredients}</p>
                  <span className="text-lg font-semibold text-[#D68240]">
                    {dish.price}
                  </span>
                </motion.div>
              </a>

              {/*(Only visible for admin) */}
              {isAdmin && (
                <div className="flex space-x-4 mt-2">
                  <label
                    htmlFor={`image-input-${idx}`}
                    className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
                  >
                    Upload
                  </label>
                  <input
                    id={`image-input-${idx}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, idx)}
                  />
                  {uploadedImages[idx] && !isImageSaved[idx] && (
                    <button
                      className="bg-[#F38025] text-white px-4 py-2 rounded hover:bg-black"
                      onClick={() => handleImageSave(idx)}
                    >
                      Save
                    </button>
                  )}
                  {uploadingImages[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
                      Uploading...
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Menu Button */}
        <div className="flex justify-center mt-8 md:mt-16">
          <a
            href="https://www.ubereats.com/store/heavenly-chicken-and-ribs/m3TyZtZKSaaug61ICO9ElA?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 border text-white font-semibold hover:bg-white hover:text-black transition-colors">
              View All Menu
            </button>
          </a>
        </div>
      </div>
      <img
        src="/Menu_Items/menuVector.png"
        alt="Decorative Vector"
        className="absolute right-0 top-2 md:top-5 w-[200px] md:w-[400px]"
      />
    </div>
  );
};

export default Menu;
