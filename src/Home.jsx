import { useState, useEffect } from "react";
import Join from "./components/ConnectUs/Join";
import Subscribe from "./components/ConnectUs/Subscribe";
import Landing from "./pages/Landing";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [popupType, setPopupType] = useState("join"); // "join" or "subscribe"

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupShown", "true");
  };

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");
    if (alreadyShown) {
      setShowPopup(false);
    }
  }, []);

  return (
    <>
      {showPopup && (
        popupType === "join" ? (
          <Join onClose={handleClose} />
        ) : (
          <Subscribe onClose={handleClose} />
        )
      )}
      {!showPopup && <Landing />}
    </>
  );
}
