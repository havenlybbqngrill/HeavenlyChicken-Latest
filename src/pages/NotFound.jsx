import TopInfoBar from "../components/Landing/TopInfoBar";
import Navbar from "../components/Landing/Navbar";
import Contact from "../components/Landing/Contact";


export default function NotFound() {
  return (
     <TopInfoBar />
      <Navbar />
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </a>
    </div>
     <Contact />
  );
}
