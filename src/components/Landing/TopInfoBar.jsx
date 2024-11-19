import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaStar } from "react-icons/fa";

const TopInfoBar = () => {
  return (
    <div className="bg-black text-white text-sm lg:text-base py-4 px-4 lg:px-10 flex justify-between items-center w-full mx-auto z-50">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <span className="hidden md:flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <a
            // add shop location here
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Rohit
          </a>
        </span>
        <span className="hidden md:flex">|</span>

        <a href="mailto:hcrnewjersey@gmail.com" className="hover:underline">
          <span className="hidden md:flex items-center">
            <FaEnvelope className="mr-1" />
            hcrnewjersey@gmail.com
          </span>
        </a>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4 mr-10 md:mr-0 ml-auto">
        <span className="flex items-center relative group">
          <a href="tel:201-555-1234" className="hover:underline">
            <FaPhoneAlt className="block mr-4 text-base mt-1 md:mr-2 md:text-sm" />
          </a>
          <span
            className="hidden group-hover:block md:block transition"
            title="Call us"
          >
            <a href="tel:201-347-3123" className="hover:underline">
              000-000-0000
            </a>
          </span>
          <span className="md:ml-3">|</span>
        </span>

        {/* Uber Eats rating */}
        <span className="flex items-center space-x-2 text-base">
          <img
            src="/ubereats.png"
            alt="Uber Eats"
            className="h-5 w-5 lg:h-7 lg:w-7"
          />
          <span className="ml-1">4.7</span>
          <FaStar className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default TopInfoBar;
