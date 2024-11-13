import AboutUs from "../components/Landing/AboutUs";
import Contact from "../components/Landing/Contact";
import HeroAndTopSellers from "../components/Landing/Hero";
import Highlight from "../components/Landing/Highlight";
import Menu from "../components/Landing/Menu";
import MostPopular1 from "../components/Landing/MostPopular1";
import MostPopular2 from "../components/Landing/MostPopular2";
import MostPopular3 from "../components/Landing/MostPopular3";
import Navbar from "../components/Landing/Navbar";
import Reviews from "../components/Landing/Reviews";
import TopInfoBar from "../components/Landing/TopInfoBar";

import WeOffer from "../components/Landing/WeOffer";

export default function Landing() {
  return (
    <div>
      <TopInfoBar />
      <Navbar />
      <HeroAndTopSellers />
      <WeOffer />
      <AboutUs />
      <MostPopular1 />
      <MostPopular2 />
      <MostPopular3 />
      <Menu />
      <Reviews />
      <Highlight />
      <Contact />
    </div>
  );
}
