import { useState } from "react";
import Join from "./components/ConnectUs/Join";
import Landing from "./pages/Landing";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div>
      {showPopup && <Join onClose={() => setShowPopup(false)} />}
      {!showPopup && <Landing />}
    </div>
  );
}
