import { useState, useEffect } from "react";
import Join from "./components/ConnectUs/Join";
import Landing from "./pages/Landing";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupHandled = localStorage.getItem("popupHandled");
    if (!popupHandled) {
      setShowPopup(true); // show Join popup only if not handled
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupHandled", "true"); // mark popup as handled
  };

  const handleJoinToday = () => {
    setShowPopup(false);
    localStorage.setItem("popupHandled", "true"); // also mark as handled
  };

  return (
    <div>
      {showPopup ? (
        <Join onClose={handleClose} onJoin={handleJoinToday} />
      ) : (
        <Landing />
      )}
    </div>
  );
}
