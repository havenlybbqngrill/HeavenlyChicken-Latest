import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigation } from "../NavigationContext";
import { FaPhoneAlt } from "react-icons/fa";

const Join = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCanAccessProtectedRoute, isAdmin, checkAdmin } = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  useEffect(() => {
    checkAdmin(location.pathname);
  }, [location.pathname, checkAdmin]);

  const handleSubscribe = () => {
    setCanAccessProtectedRoute(true);
    if (isAdmin) {
      navigate("/admin/subscribe");
    } else {
      navigate("/subscribe");
    }
  };

  // const handleClose = () => {
  //   setCanAccessProtectedRoute(true);
  //   if (isAdmin) {
  //     navigate("/admin/landing");
  //   } else {
  //     navigate("/landing");
  //   }
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setSelectedImage(URL.createObjectURL(file));
        setIsUploading(false);
        setIsImageUploaded(true);
      }, 1000);
    }
  };

  const handleSaveImage = () => {
    // Logic for saving the image
    alert("Image saved successfully!");
    setIsImageUploaded(false); // Hide the save button after saving
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/JoinUs/joinbg.jpg')` }}
      >
        <div className="bg-black opacity-40 inset-0 absolute" />
      </div>
      <div className="relative bg-white rounded-md shadow-lg w-11/12 max-w-4xl flex flex-col md:flex-row items-stretch z-10">
        <AiOutlineClose
          className="w-8 h-8 md:text-black absolute top-2 right-2 cursor-pointer md:w-6 md:h-6 z-20"
          onClick={onClose}
        />
        <div
          className="relative flex-none w-full md:w-1/2 h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={selectedImage || "/JoinUs/img1.jpg"}
            alt="Join Us"
            className="w-full h-[200px] md:h-[500px] object-cover rounded-sm"
          />
          {isAdmin && isHovered && (
            <>
              <label
                htmlFor="upload-input"
                className="absolute bottom-4 right-4 bg-[#F38025] text-white px-4 py-2 rounded cursor-pointer hover:bg-black"
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
            </>
          )}
          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl">
              Uploading...
            </div>
          )}
          {/* Save button */}
          {isImageUploaded && (
            <button
              className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleSaveImage}
            >
              Save Image
            </button>
          )}
        </div>
        <div className="flex-1 p-4 md:p-8 flex flex-col justify-center">
          <p className="text-black text-3xl text-center font-bold">
            Get New Offers
          </p>
          <p className="text-center text-gray-800 mt-3">
            Welcome to Heavenly Chicken and Ribs! Join us for mouthwatering
            meals.
          </p>
          <button
  className="bg-[#F38025] rounded-sm px-4 py-2 font-medium leading-loose uppercase tracking-widest text-white mt-5 hover:bg-black"
  onClick={() => {
    handleSubscribe(); // existing logic
    if (onJoin) onJoin(); // hide popup and prevent showing again
  }}
>
  Join Today
</button>

          {/* Social Media */}
          <div className="relative pt-5 md:top-28 justify-center items-center flex space-x-2">
            <a href="tel:201-347-3123" className="hover:underline">
              <div className="bg-black rounded-full p-3">
                <FaPhoneAlt className="w-4 h-4 text-white" />
              </div>
            </a>
            <a
              href="mailto:hcrnewjersey@gmail.com"
              className="hover:underline"
            >
              <div className="bg-black rounded-full p-3">
                <AiOutlineMail className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
