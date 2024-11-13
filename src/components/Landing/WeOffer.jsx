import { useState } from "react";
import { useNavigation } from "../NavigationContext"; // Ensure to adjust the import based on your file structure

const WeOffer = () => {
  const { isAdmin } = useNavigation(); // Get admin status
  const [uploadedImages, setUploadedImages] = useState([null, null, null]);
  const [uploadingImages, setUploadingImages] = useState([false, false, false]);
  const [isImagesSaved, setIsImagesSaved] = useState([false, false, false]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...uploadedImages];
      const newUploading = [...uploadingImages];
      newUploading[index] = true; // Set uploading state for the specific image
      setUploadingImages(newUploading);

      newImages[index] = URL.createObjectURL(file);
      setUploadedImages(newImages);
      newUploading[index] = false; // Reset uploading state after upload
      setUploadingImages(newUploading);

      const newSavedState = [...isImagesSaved];
      newSavedState[index] = false; // Reset save state on new upload
      setIsImagesSaved(newSavedState);

      console.log("Image uploaded:", file.name);
    }
  };

  const handleImageSave = (index) => {
    alert(`Image ${index + 1} saved successfully!`); // Replace this with actual save logic
    const newSavedState = [...isImagesSaved];
    newSavedState[index] = true; // Set saved state to true after saving
    setIsImagesSaved(newSavedState);
  };

  return (
    <div className="flex flex-col items-center py-20 bg-black text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 font-forum ">
        Discover Our Flavors
      </h2>
      <img
        src="/separator.png"
        alt="Centered Image"
        className="w-[100px] md:w-[200px] h-[20px] object-cover rounded-md mb-8 ml-[-15px]"
      />
      <p className="text-2xl mb-3 text-center max-w-[90%] md:max-w-[500px] font-forum ">
        Discover the finest selection of our products crafted with care and
        precision.
      </p>
      <p className="text-base mb-8 text-center max-w-[90%] md:max-w-[600px] font-forum">
        Each product is made using the highest quality ingredients, ensuring an
        exceptional experience that reflects our dedication to excellence.
      </p>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] px-6 ">
        {/* First Box */}
        <div className="flex flex-col items-center md:mb-0 md:mr-4 relative">
          <img
            src={uploadedImages[0] || "/weServe/breakfast.jpg"}
            alt="Breakfast"
            className="w-[300px] md:w-[280px] h-[300px] object-cover rounded-md hover:shadow-[4px_4px_10px_0px_rgba(243,128,37,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {uploadingImages[0] && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
              Uploading...
            </div>
          )}
          {isAdmin && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <label
                htmlFor="breakfast-input"
                className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
              >
                Upload
              </label>
              <input
                id="breakfast-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, 0)}
              />
              {uploadedImages[0] && !isImagesSaved[0] && (
                <button
                  className="bg-[#F38025] text-white px-4 py-2 rounded hover:bg-black"
                  onClick={() => handleImageSave(0)}
                >
                  Save
                </button>
              )}
            </div>
          )}
          <p className="mt-3 font-forum text-xl">Breakfast</p>
        </div>

        {/* Second Box */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:my-4 relative">
          <img
            src={uploadedImages[1] || "/weServe/Appetizer.jpg"}
            alt="Appetizer"
            className="w-[300px] md:w-[280px] h-[300px] translate-y-10 object-cover rounded-md hover:shadow-[4px_4px_10px_0px_rgba(243,128,37,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {uploadingImages[1] && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
              Uploading...
            </div>
          )}
          {isAdmin && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <label
                htmlFor="appetizer-input"
                className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
              >
                Upload
              </label>
              <input
                id="appetizer-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, 1)}
              />
              {uploadedImages[1] && !isImagesSaved[1] && (
                <button
                  className="bg-[#F38025] text-white px-4 py-2 rounded hover:bg-black"
                  onClick={() => handleImageSave(1)}
                >
                  Save
                </button>
              )}
            </div>
          )}
          <p className="mt-10 font-forum text-xl pt-2">Appetizers</p>
        </div>

        {/* Third Box */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:ml-4 relative">
          <img
            src={uploadedImages[2] || "/weServe/drinks.jpg"}
            alt="Drinks"
            className="w-[300px] md:w-full h-[300px] object-cover rounded-md hover:shadow-[4px_4px_10px_0px_rgba(243,128,37,0.5)] hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {uploadingImages[2] && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
              Uploading...
            </div>
          )}
          {isAdmin && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <label
                htmlFor="drinks-input"
                className="bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
              >
                Upload
              </label>
              <input
                id="drinks-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, 2)}
              />
              {uploadedImages[2] && !isImagesSaved[2] && (
                <button
                  className="bg-[#F38025] text-white px-4 py-2 rounded hover:bg-black"
                  onClick={() => handleImageSave(2)}
                >
                  Save
                </button>
              )}
            </div>
          )}
          <p className="mt-3 font-forum text-xl">Drinks</p>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
