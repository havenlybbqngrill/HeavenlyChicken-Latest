import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigation } from "../NavigationContext";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Subscribe = () => {
  const navigate = useNavigate();
  const { isAdmin } = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    if (isAdmin) {
      navigate("/admin/landing");
    } else {
      navigate("/");
    }
  };

  const handleSubscribe = async () => {

      // Simple validation
  if (!phoneNumber.trim()) {
    toast.error("Phone number is required!", { position: "top-center", autoClose: 2000 });
    return;
  }

  if (!email.trim()) {
    toast.error("Email is required!", { position: "top-center", autoClose: 2000 });
    return;
  }


    const googleFormActionUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd8JaHYIICZghpfGEaKqiX2k_2BRnA-X9KKsgBD1Ho0DvyN0g/formResponse";
    
    const formData = new FormData();
    formData.append("entry.1467201196", phoneNumber); // Replace with the correct field name for Phone Number
    formData.append("entry.554754268", email); // Replace with the correct field name for Email

    try {
      await fetch(googleFormActionUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      
      toast.success("Thank you for subscribing!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        if (isAdmin) {
          navigate("/admin/landing");
        } else {
          navigate("/");
        }
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Subscription failed. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setSelectedImage(URL.createObjectURL(file)); // Preview the selected image
        setIsUploading(false);
      }, 1000);
    }
  };

  const handleSaveImage = () => {
    toast.success("Image saved successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/JoinUs/joinbg.jpg')` }}
      >
        <div className="bg-black opacity-40 inset-0 absolute" />
      </div>

      <div className="relative bg-white rounded-md shadow-lg max-w-[450px] mx-auto flex flex-col items-center z-10 p-6">
        <AiOutlineClose
          className="w-8 h-8 md:text-black absolute top-2 right-2 cursor-pointer md:w-6 md:h-6 z-20"
          onClick={handleClose}
        />
        {/* Logo with Hoverable Upload for Admins */}
        <div
          className="w-24 h-24 rounded-full overflow-hidden mb-4 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={selectedImage || "/logo.png"}
            alt="Subscribe"
            className="w-full h-full object-cover"
          />
          {isAdmin && isHovered && (
            <>
              <label
                htmlFor="upload-input"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xs px-1 py-1 rounded cursor-pointer"
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
          {/* Show Uploading... */}
          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xs">
              Uploading...
            </div>
          )}
        </div>

        {/* Save Button */}
        {selectedImage && (
          <button
            className="bg-[#F38025] text-white text-xs px-4 py-2 rounded-sm cursor-pointer hover:bg-black mb-4"
            onClick={handleSaveImage}
          >
            Save
          </button>
        )}

        <p className="text-black text-xl text-center font-semibold">
          Join now and start earning rewards while staying informed on the
          latest offers!
        </p>

        {/* Input Box for Phone Number */}
        <div className="w-full mt-6 md:mt-8">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phoneNumber"
           >
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#F38025]"
            required={true}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Input Box for Email */}
        <div className="w-full mt-6 md:mt-8">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#F38025]"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Subscribe Button */}
        <button
          className="bg-[#F38025] w-full rounded-sm px-6 py-2 font-medium leading-loose uppercase tracking-widest text-white mt-4 hover:bg-black"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>

        {/* Terms and Privacy */}
        <p className="text-xs text-gray-600 mt-8 text-center md:max-w-[300px]">
          By signing up you agree to our Privacy Policy and our Terms of
          Service.
        </p>
        
        {/* Contact Icons */}
        <div className="bottom-4 justify-center items-center flex space-x-2 pt-6">
          <a href="tel:201-555-1234" className="hover:underline">
            <div className="bg-black rounded-full p-2">
              <FaPhoneAlt className="w-4 h-4 text-white" />
            </div>
          </a>
          <a href="mailto:info@heavenlychicken.com" className="hover:underline">
            <div className="bg-black rounded-full p-2">
              <AiOutlineMail className="w-4 h-4 text-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
