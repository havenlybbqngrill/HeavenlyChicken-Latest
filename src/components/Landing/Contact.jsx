const Contact = () => {
  return (
    <div
      className="relative bg-[#05080a] text-white py-20 font-forum"
      id="contact"
    >
      {/* Subscribe Section */}
      <div className="relative text-center mb-8 md:mb-12 z-20">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <img
            src="/separator.png"
            alt="Centered Image"
            className="w-[100px] md:w-[200px] h-[20px] object-cover rounded-md mb-8"
          />
        </div>
      </div>

      {/* Info Boxes  */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 px-4 md:px-16 max-w-[1200px] mx-auto z-20">
        {/* First Box */}
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mb-4">
           <a href="https://share.google/9dA07mcnZwfKDj1nF"> Jersey City, NJ: 201-347-3123 555 Tonnelle Ave. Jersey City 07307</a>
          </p>
          <h3 className="text-xl font-semibold">Phone No</h3>
          <p className="mb-4"> <a href="tel:+1 201-347-3123">+1 201-347-3123</a></p>
          <h3 className="text-xl font-semibold">Email</h3>
          <p><a href="mailto:hcrnewjersey@gmail.com"></a>hcrnewjersey@gmail.com</p>
        </div>

        {/* Second Box */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p className="font-medium text-lg mb-2">
            Monday - Saturday:{" "}
            <span className="text-gray-400">10am - 10pm</span>
          </p>
          <p className="font-medium text-lg">
            Sunday: <span className="text-gray-400">11am - 9pm</span>
          </p>
        </div>

        {/* Third Box */}
        <div className="md:ml-12">
          <h3 className="text-xl font-semibold mb-2">Get New & Offers</h3>
          <ul className="space-y-2 mb-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
          </ul>
          <div className="flex md:justify-center mb-6 md:mr-20 lg:mr-0">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 outline-none bg-[#05080a] text-white border border-[#D68240]"
            />
            <button className="bg-[#F38025] text-black px-4 py-2 font-medium leading-loose uppercase tracking-widest hover:text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Vector Image */}
      <img
        src="/footerVector.png"
        alt="Decorative Vector"
        className="absolute left-0 top-2 md:top-5 w-[200px] md:w-[400px] z-10"
      />
    </div>
  );
};

export default Contact;
